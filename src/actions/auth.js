import {firebase,googleAuthProvider} from "../firebase/firebase";

export const login=(uid)=>(
    {
        type:'LOGIN',
        uid
    }
);

export const startLogin=()=>{
    return()=>{
        //pokreni login sa popup a taj popup nek bude od google-a
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const logout=()=>({
    type:'LOGOUT'
});

export const startLogout=()=>{
    return()=>{
        return firebase.auth().signOut();
    }
}