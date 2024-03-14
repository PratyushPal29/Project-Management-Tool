const { collection, addDoc, setDoc, getDocs, updateDoc,doc } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const { getFirestore } =require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAX2ie_dX3BRDgwgM2XJw6ArOUlPwhFLTc",
    authDomain: "project-management-tool-a29cc.firebaseapp.com",
    projectId: "project-management-tool-a29cc",
    storageBucket: "project-management-tool-a29cc.appspot.com",
    messagingSenderId: "327806706710",
    appId: "1:327806706710:web:533e11922a2b5696ff4137",
    measurementId: "G-EFNSJS3XJ6"
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