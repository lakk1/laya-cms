import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export const generateKey = (key = "media") =>
  firestore.collection(key).doc().id;

export const createProduct = async (product) =>
  await firestore.collection("products").doc().set(product);
