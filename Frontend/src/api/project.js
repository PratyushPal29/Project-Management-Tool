const { collection, addDoc,setDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebase");
import { useAuth } from '../contexts'
const getProject = async ({ projName, projdesc }) => {
    const { currentUser } = useAuth();
    try {
        const docRef = await addDoc(collection(db, "user-projects"), {
            user: currentUser.displayName,
            projName: projName,
            projdesc: projdesc
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    //await setDoc(doc(db, "user-projects"), docRef);
};


