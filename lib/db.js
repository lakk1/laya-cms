import firebase from "./firebase";

const firestore = firebase.firestore();

export const createUser = async (uid, data) => {
  const snapshot = await firestore.collection("users").doc(uid).get();

  if (snapshot.exists) {
    const userD = snapshot.data();
    return {
      id: uid,
      ...userD,
    };
  }
  const userData = { uid, ...data };

  firestore
    .collection("users")
    .doc(uid)
    .set({ ...userData }, { merge: true });
  return userData;
};

export const generateKey = (key = "media") =>
  firestore.collection(key).doc().id;

export const createProduct = async (product, id = generateKey("products")) => {
  return await firestore
    .collection("products")
    .doc(id)
    .set({ id, ...product }, { merge: true });
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
};

export const getProductBySlug = async (slug) => {
  const snapshot = await firestore
    .collection("products")
    .where("slug", "==", slug);
  const data = (await snapshot.get()).docs.map((doc) => ({
    ...doc.data(),
  }));
  if (!data || data.length < 1) {
    return null;
  }
  return {
    ...data[0],
  };
};

export const getCartProducts = async (pids) => {
  const snapshot = firestore
    .collection("products")
    .where("id", "in", [...pids]);
  const cartData = (await snapshot.get()).docs.map((doc) => ({
    ...doc.data(),
  }));
  return [...cartData];
};
