<template>

<button @click="deleteUsersDocument">Удалить юзеров</button>
</template>


<script setup>
import {getStorage,  getMetadata, listAll, deleteObject, getDownloadURL, ref, uploadBytes,  uploadString} from "firebase/storage";
import { db, storage, auth } from "@/firebase/firebase";
import {updateDoc,  getFirestore,  doc, getDocs, getDoc, collection, writeBatch,  setDoc, deleteDoc    } from "firebase/firestore";
import { getAuth, EmailAuthProvider, updateEmail, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, reauthenticateWithCredential  } from "firebase/auth";

async function deleteUsersDocument() {
    const querySnapshot = await getDocs(collection(db, "publicTeachers"));
    const batch = writeBatch(db);

    querySnapshot.forEach((doc) => {
        const docRef = doc.ref;
        batch.delete(docRef);
    });

    try {
        await batch.commit();
        console.log("All documents deleted successfully.");
    } catch (error) {
        console.error("Error deleting documents:", error);
    }
}

</script>