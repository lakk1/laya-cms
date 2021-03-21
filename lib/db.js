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

export const createProduct = async (product) => {
  const id = generateKey("products");
  return await firestore
    .collection("products")
    .doc(id)
    .set({ id, ...product });
};

export const productsRef = firestore.collection("products");

export const getProducts = async () => {
  const snapshot = firestore.collection("products");

  const res = (await snapshot.get()).docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return res;
};
export const getProduct = async (id) => {
  const snapshot = await firestore.collection("products").doc(id).get();
  return {
    id,
    ...snapshot.data(),
  };

  // const res = (await snapshot.get(id)).docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data(),
  // }));
  // return res;
};
