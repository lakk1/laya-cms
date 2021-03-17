import { generateKey } from "./db";
import firebase from "./firebase";

const storage = firebase.storage();

export const uploadImage = async (file) => {
  const id = generateKey();
  const imageSnap = await storage.ref("media").child(id).put(file);
  const imageURL = await imageSnap.ref.getDownloadURL();
  return { id, imageURL };
};

export const uploadImages = async (files) => {
  const imageCollection = files.map((file) => {
    return uploadImage(file);
  });
  return Promise.all(imageCollection);
};
