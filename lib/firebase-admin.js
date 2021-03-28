import * as admin from "firebase-admin";

const serviceAccount = require("../serviceAccountKey.json");

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://laya-studio-default-rtdb.firebaseio.com",
    });
  }
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error("Firebase admin initialization error", error.stack);
  }
}

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };
