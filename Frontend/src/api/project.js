const { collection, addDoc, setDoc, getDocs, updateDoc,doc } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const { getFirestore } =require("firebase/firestore");
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
    const projectCollectionRef = collection(db, "user-projects");
    const querySnapshot = await getDocs(projectCollectionRef);
    const projects = [];
    
    querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
    });

    return projects;
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