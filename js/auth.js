import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.11/firebase-auth.min.js";
import { changeName } from './functions.js'

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const startLoginWithGoogle = async() => {
    try {
        const { user } = await signInWithPopup(auth, provider);
        await changeName(user.displayName);
    } catch (err) {
        console.log(err);
    }
};