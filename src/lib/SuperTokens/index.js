import SelfGuard from 'selfguard-client';
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
import {style} from './style';
import React from 'react';
let domain = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:8080"

async function createAPIKey(domain){
  try {
    Session.addAxiosInterceptors(axios);
    let result = await axios.post(domain + "/createAPIKey");
    return result.data;
  }
  catch(err){
    console.log({err});
  }
}

async function retrieveAPIKey(){
  try {
    Session.addAxiosInterceptors(axios);
    let result = await axios.post(domain + "/retrieveAPIKey");
    return result.data;
  }
  catch(err){
    console.log({err});
  }
}

//display of the auth component
export function Page({ DefaultComponent, ...props }) {
  return (
      <div className='container'style={{marginTop:'20px'}}>
          <div className='text-center'>
            <div className="navbar-brand vertical text-center" style={{justifyContent:'center'}}>
              <img src="/logo.png" width="70" height="70" className="d-inline-block" alt=""/>
               <h1 className="d-inline-block" style={{margin:0,marginLeft:'5px',color:'black'}}><b>SelfGuard</b></h1>
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

export default function SuperTokensOptions(signIn, signUp){
  return {
    getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
            if (context.redirectToPath !== undefined) {
                return context.redirectToPath;
            }
            return "/";
        }
        return undefined;
    },
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
        functions: (originalImplementation) => {
          return {
              ...originalImplementation,
              signIn: async function (input){
                let status = await originalImplementation.signIn(input);
                if(status.status === "OK"){
                  let password = input.formFields[1].value;
                  await signIn(password);
                }
                return status;
              },
              signUp: async function (input) {
                let status = await originalImplementation.signUp(input);
                if(status.status === "OK"){
                  let password = input.formFields[1].value;
                  await signUp(password);
                }
                return status;
              }
          }
        }
      },
      emailVerificationFeature: {
          mode: "REQUIRED",
      },
      style
  }
}