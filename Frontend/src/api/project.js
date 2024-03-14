const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebase");

const getProject = async () => {
  try {
    const docRef = await addDoc(collection(db, "user-projects"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


