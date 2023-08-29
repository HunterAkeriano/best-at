import {getStorage,  getMetadata, listAll, deleteObject, getDownloadURL, ref, uploadBytes,  uploadString} from "firebase/storage";
import { db, storage, auth } from "@/firebase/firebase";
import {updateDoc,  getFirestore,  doc, getDocs, getDoc, collection, writeBatch, setDoc, deleteDoc    } from "firebase/firestore";
import { getAuth, EmailAuthProvider, updateEmail, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, reauthenticateWithCredential  } from "firebase/auth";

export default{
  async sendDocumentStorage(documentList, folder) {
    try {
      const uploadPromises = documentList.map(async (document) => {
          const bannersRef = ref(storage, `${folder}/${document.name}`);
          await uploadBytes(bannersRef, document.obj);
          const downloadURL = await getDownloadURL(bannersRef);
          document.url = downloadURL;
          document.obj = null;
      });
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Error while uploading photos:', error);
      throw error;
    }
  },

  async sendDocumentDataBase(selectCollection, nameDocument, obj){
    await setDoc(doc(db, selectCollection, `${nameDocument}`), obj);
  },

  async registerUser(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error while registering user:', error);
      throw error;
    }
  },

}