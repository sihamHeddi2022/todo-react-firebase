
import  firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC5mwbsziAp-TIeFtNfPuQQ-MfaX_upGOw",
  authDomain: "todo-app-s1.firebaseapp.com",
  projectId: "todo-app-s1",
  storageBucket: "todo-app-s1.appspot.com",
  messagingSenderId: "802973845420",
  appId: "1:802973845420:web:4b12ba1bfdf0a8b9aadc09"
};

const app= firebase.initializeApp(firebaseConfig)


const db = firebase.firestore(app)

export const signInWithGoogle = async ()=>{
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
     const u =await firebase.auth()
    .signInWithPopup(provider)
    if (u) return {success:true}
  } catch (error) {
    return {error:error}
  }
  
}

export const login = async (email,password)=>{
  try {
     await  firebase.auth().signInWithEmailAndPassword(email, password)
     return {success:true}
  } catch (error) {
    if(error.code=="auth/user-not-found") return {message:"there is no user with that email"}
    return {message:error.message}
  }
  

}


export const registerWithEmailAndPassword=async ({email,password,displayName})=>{
   
  try {
     const u = await  firebase.auth().createUserWithEmailAndPassword(email, password)
     if(u)
     {
      const result = await db.collection("users").doc(u.user.uid).set({displayName:displayName})
     if(result) return {success:true}
     }
  } catch (error) {
     return {error:error}
  }
   
  


}