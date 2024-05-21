import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDnuQntoOhzS8KifdMCTzjZDrtcA_FoCp4",
    authDomain: "codebuddy-4f58c.firebaseapp.com",
    projectId: "codebuddy-4f58c",
    storageBucket: "codebuddy-4f58c.appspot.com",
    messagingSenderId: "737471357174",
    appId: "1:737471357174:web:32b854502d6a4923b08cd7",
    measurementId: "G-XFN7ZKBZ7V"

};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();



let btns = document.getElementsByClassName("btn");
let btn1 = btns[0];
let btn2 = btns[1];
btn1.addEventListener("click", () => { signup() });
btn2.addEventListener("click", () => { onsignout() });


async function signup(){
    signInWithPopup(auth,provider).then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
    
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
    });
}

async function onsignout(){
    signOut(auth).then(() => {
        console.log("Signed out");
      }).catch((error) => {
        console.log(error.message);
      });
}

