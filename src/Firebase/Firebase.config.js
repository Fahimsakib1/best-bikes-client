// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: "AIzaSyBLfl8KpVa47lxxLqT1iOwIKcfBr2s_A1g",
    // authDomain: "best-bikes-client.firebaseapp.com",
    // projectId: "best-bikes-client",
    // storageBucket: "best-bikes-client.appspot.com",
    // messagingSenderId: "597948030760",
    // appId: "1:597948030760:web:af417ab827662cb58bfa1d"
    
    
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket ,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;