import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNPRMp7iNSNeDY87_ilTmmpC4ig26D2aY",
    authDomain: "react-9c072.firebaseapp.com",
    projectId: "react-9c072",
    storageBucket: "react-9c072.appspot.com",
    messagingSenderId: "745868484540",
    appId: "1:745868484540:web:a82e5df93f69906c4195b9",
    measurementId: "G-EZWYRTRQDM"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, signInWithGoogle };
export default firebase;