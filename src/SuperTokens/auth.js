import SelfGuard from 'selfguard-client';
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
let domain = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:8080"

async function createAPIKey(){
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

export async function signIn(password){
  try {
    let api_key = await retrieveAPIKey(); //get api key
    let sg = new SelfGuard(api_key,null,null,domain); //setup Selfguard Instnace
    let keys = await sg.getKeyPairs();
    let private_key = sg.decryptWithPassword(keys[0].encrypted_private_key,password);
    window.storage.setItem("api_key", api_key);
    window.storage.setItem("private_key",private_key);
    window.storage.setItem("public_key",keys[0].public_key);
  }
  catch(err){
    console.log({err});
  }
  return;
}

export async function signUp(password) {
  try {
    let api_key = await createAPIKey(); //Create API Key
    let sg = new SelfGuard(api_key,null,null,domain); //Setup Selfguard Instnace
    let key_pair = sg.createKeyPair('rsa'); //Generate Key Pair
    await sg.uploadKeyPair(key_pair, password); //Upload Key Pair
    window.storage.setItem("private_key",key_pair.private_key);
    window.storage.setItem("public_key",key_pair.public_key);
    window.storage.setItem("api_key", api_key);
  }
  catch(err){
    console.log({err});
  }
  return;
}