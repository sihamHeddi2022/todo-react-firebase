
import  firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';


const firebaseConfig = {
   apiKey: "AIzaSyDw2li5VYpZXsJx-Dk9TY-tisC4eh3iTFw",
   authDomain: "todo-app-v1-67a53.firebaseapp.com",
   projectId: "todo-app-v1-67a53",
   storageBucket: "todo-app-v1-67a53.appspot.com",
   messagingSenderId: "366543160584",
   appId: "1:366543160584:web:3003c81934c8283fc458bd"
 };
const app= firebase.initializeApp(firebaseConfig)


const db = firebase.firestore(app)










// export const searchUser =(name)=>{

//    return db.collection("users").where("displayName",">=",name)
//     .get().then((doc)=>{
//       console.log(doc.docs);
//       let users = []
//       doc.docs.forEach((doc)=>
//       {
//          users.push(doc.data())
//       })
//         return {data:users}
//     })
//     .catch(err=>{
//        return {error:err}
//     })
// }



export const updateTask = ({id,name,description,theme,date})=>{
  return db.collection("tasks").doc(id).update({
    name,description,theme,date
  }).then(()=>{
    return {success:true}
  })
  .catch(err=>{
   return {error:err}
  })
}
export const getTask = (id)=>{
  return db.collection("tasks").doc(id).get()
  .then((doc)=>{
    return {data:doc.data()}
  })
  .catch(err=>{
    return {error:err}
  })
}


export const deleteTasks = (id)=>{
   return db.collection("tasks").doc(id)
   .delete()
   .then(()=>{
     return {success:true}
   })
   .catch(err=>{
    return {error:err}
   })
}


export const updateSt = (id,status)=>{
  return db.collection("tasks").doc(id).update({
    status:status
  }).then(()=>{
    return {success:true}
  })
  .catch(err=>{
    return {error:err}
  })
}


export const getTasks = (uid)=>{
  return db.collection("tasks").where("owner","==",uid)
  .get().then((docs)=>{
      const tasks =[]
      docs.forEach((doc)=>{
        tasks.push({
          id:doc.id,
          task:doc.data()})
      })
      return {tasks:tasks}
  }).catch((err)=>{
    return {err:err}
  })
}


export const addTask = ({name,description,owner,theme,date,status})=>{
  
   return db.collection("tasks").add({name,description,owner,theme,date,status})
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
     const {user} =await firebase.auth()
    .signInWithPopup(provider)
    if (user) {
      const f = await db.collection("users").where("id","==",user.uid).get()
      if(f.size==0)
      console.log("I'm the user ",user);
       await db.collection("users").add({
         email:user.email,
         id:user.uid,
         displayName:user.displayName
       })
      return {success:true}
   }
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
   const {user} = await  firebase.auth().createUserWithEmailAndPassword(email, password)
   const f = await db.collection("users").where("id","==",user.uid).get()
   if(f.size==0)
   console.log("I'm the user ",user);
    await db.collection("users").add({
      email:user.email,
      id:user.uid,
      displayName:user.displayName
    })
   return {success:true}
  } catch (error) {
     return {error:error.message}
  }
   
  


}