const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebase");
import { useAuth } from '../contexts'
const getProject = async ({ projName, projdesc }) => {
    const { currentUser } = useAuth()
    try {
        const docRef = await addDoc(collection(db, "user-projects"), {
            user: currentUser,
            projName: projName,
            projdesc: projdesc
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};


