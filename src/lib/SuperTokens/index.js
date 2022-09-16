import SelfGuard from 'selfguard-client';
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
import React from 'react';
import {style} from './style';
Session.addAxiosInterceptors(axios);
let api_key = process.env.REACT_APP_SELFGUARD_API_KEY;

//display of the auth component
export function Page({ DefaultComponent, ...props }) {
  return (
      <div className='container'style={{marginTop:'20px'}}>
          <div className='text-center'>
            <div className="navbar-brand vertical text-center" style={{justifyContent:'center'}}>
              <img src="/logo.png" width="70" height="70" className="d-inline-block" alt=""/>
               <h1 className="d-inline-block" style={{margin:0,marginLeft:'5px',color:'black'}}><b>SelfGuard - File Storage</b></h1>
            </div>
          </div>
          <DefaultComponent {...props} />
          <p className='text-center' style={{marginTop:'20px'}}> Powered by SelfGuard </p>
          <div className='text-center' style={{marginTop:'10px'}}>
          <h6 style={{lineHeight:'25px'}}>When you initially sign up and create an account, a <b>public/private key encrypted by your password</b> is created. </h6>
          <h6 style={{lineHeight:'25px'}}>Your public key is used to <b>asymmetric ally encrypt the data keys</b> used for encryptions.</h6>
          <h6 style={{lineHeight:'25px'}}>Your private key is used to <b>asymmetric ally decrypt the data keys</b> use for decryptions.</h6>
          </div>
          <div className='col-12 text-center' style={{marginTop:"50px",paddingBottom:'10px'}}>
            <hr/>
            <div className="navbar-brand vertical text-center" style={{justifyContent:'center'}}>
               <img src="/logo.png" width="40" height="40" className="d-inline-block" alt=""/>
               <h3 className="d-inline-block" style={{margin:0,marginLeft:'5px'}}><b>SelfGuard</b></h3>
            </div>
            <p>© 2022 SelfGuard Inc. All rights reserved.</p>
          </div>
      </div>
  );
}

export const functions = (originalImplementation) => {
    return {
        ...originalImplementation,
        signIn: async function (input){
          let status = await originalImplementation.signIn(input);
          if(status.status === "OK"){
            let password = input.formFields[1].value;
            let sg = new SelfGuard(api_key); //setup Selfguard Instnace
            let keys = await sg.getKeyPairs();
            let private_key = sg.decryptWithPassword(keys[0].encrypted_private_key,password);
            window.storage.setItem("private_key",private_key);
            window.storage.setItem("public_key",keys[0].public_key);
          }
          return status;
        },
        signUp: async function (input) {
          let status = await originalImplementation.signUp(input);
          if(status.status === "OK"){
            let password = input.formFields[1].value;
            let sg = new SelfGuard(api_key); //setup Selfguard Instnace
            let key_pair = sg.createKeyPair('rsa'); //Generate Key Pair
            await sg.uploadKeyPair(key_pair, password); //Upload Key Pair
            window.storage.setItem("private_key",key_pair.private_key);
            window.storage.setItem("public_key",key_pair.public_key);
          }
          return status;
        }
    }
}

export const options = {
  signInAndUpFeature: {
      defaultToSignUp: true
  },
  useShadowDom: false,
    override: {
      components: {
          EmailPasswordSignIn_Override: ({ DefaultComponent, ...props }) => {
            return Page({ DefaultComponent, ...props })
          },
          EmailPasswordSignUp_Override: ({ DefaultComponent, ...props }) => {
            return Page({ DefaultComponent, ...props })
          },
      },
      functions
    },
    emailVerificationFeature: {
        mode: "REQUIRED",
    },
    style
}