import { initializeApp, getApps } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp({
    apiKey: "AIzaSyAiulkmcH55jV3kATETvOOv2_VRxL8e0qU",
    authDomain: "ecommerce-db499.firebaseapp.com",
    projectId: "ecommerce-db499",
    storageBucket: "ecommerce-db499.appspot.com",
    messagingSenderId: "157639509951",
    appId: "1:157639509951:web:4a2434313d2652e999c30a",
    measurementId: "G-LZ3H92PN79"
    });

const provider = new GoogleAuthProvider();

export { provider };
export default firebaseApp;