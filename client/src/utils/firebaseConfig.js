import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    
const firebaseConfig = {
    apiKey: "AIzaSyBhGRORa4RogA0mkBwL3DKmMvh_zvZXOag", 
    authDomain: "chatapp-b87ee.firebaseapp.com",
    projectId: "chatapp-b87ee",
    storageBucket: "chatapp-b87ee.firebasestorage.app",
    messagingSenderId: "341081251250",
    appId: "1:341081251250:web:42eb2aa6a82efd80f3d8ab",
    measurementId: "G-6ZFDBDGJ36"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
  