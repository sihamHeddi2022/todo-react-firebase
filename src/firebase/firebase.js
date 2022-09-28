
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

export const signInWithGoogle = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log("fffddf");
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result)
    const user = result.user
    return {data:user}


    
  }).catch(error=>{
    console.log(error);
    return {error:error}
  })

}

export const registerWithEmailAndPassword=({email,password,displayName})=>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
        console.log(userCredential);
        db.collection("users").where("uid","==",userCredential.user.uid).update({displayName:displayName})
        .then(()=>{
            return {message:"registered succefully !!"}

        }) 
    })
 
   .catch(error=>{
    console.log(error);
    return {error:error}
  })


}