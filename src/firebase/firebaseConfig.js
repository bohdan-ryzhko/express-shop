import { initializeApp } from "firebase/app";
import "firebase/database";
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

const app = initializeApp({
	apiKey: "AIzaSyBE_lGGttSVFWXSyELhw8ZdGJAxTeR8Zj0",
	authDomain: "things-shop-9e86a.firebaseapp.com",
	databaseURL: "https://things-shop-9e86a-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "things-shop-9e86a",
	storageBucket: "things-shop-9e86a.appspot.com",
	messagingSenderId: "791667726748",
	appId: "1:791667726748:web:c9dea23afbdf1da6a51059"
});

export const db = getFirestore(app);
const collectionThings = collection(db, "things-shop");

export const snapShoot = getDocs(collectionThings);