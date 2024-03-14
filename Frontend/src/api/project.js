const { collection, addDoc, setDoc, getDoc, updateDoc,doc } = require("firebase/firestore");
const { db } = require("../firebase/firebase");

export const addProject = async ({username, projName, projdesc }) => {
    
    try {
        const docRef = await addDoc(collection(db, "user-projects"), {
            user: username,
            projName: projName,
            projdesc: projdesc
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    //await setDoc(doc(db, "user-projects"), docRef);
};

export const getProject = async () => {
    const docRef = doc(db, "user-projects");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export const updateProject = async ({username, projName, projdesc }) => {
    
    try {
        const docRef = await updateDoc(collection(db, "user-projects"), {
            user: username,
            projName: projName,
            projdesc: projdesc
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    //await setDoc(doc(db, "user-projects"), docRef);
};