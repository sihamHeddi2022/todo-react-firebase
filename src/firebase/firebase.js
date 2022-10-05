
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

export const searchUser =(name)=>{

   return db.collection("users").where("displayName","==",name)
    .get().then((doc)=>{
       console.log(doc.data());
        return {data:doc.data()}
    })
    .catch(err=>{
       return {error:err}
    })
}


export const addTask = ({name,description,owner,theme,date,users})=>{
  
   return db.collection("tasks").add({name,description,owner,theme,date,users})
   .then(()=>{
       return {success:true}
   })
   .catch((error)=>{
      return {error:error}
   })

} 


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

export const logout = ()=>{
  return firebase.auth().signOut()
  .then(function() {
      return {success:true}
  })
  .catch(function(error) {
     return {error:error.message}
  });
}

export const registerWithEmailAndPassword=async ({email,password,displayName})=>{
   
  try {
     const u = await  firebase.auth().createUserWithEmailAndPassword(email, password)
     if(u)
     {

       await u.user.updateProfile({displayName:displayName})
      return {success:true}

     }
  } catch (error) {
     return {error:error.message}
  }
   
  


}