import cookie from "js-cookie";
import Router from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createUser, getCartProducts } from "./db";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userID = user?.uid;
  const handleUser = async (rawUser) => {
    if (rawUser) {
      const userData = await formatUser(rawUser);
      const { token, ...userWithoutToken } = userData;
      const user = await createUser(userData.uid, userWithoutToken);
      setUser(user);

      cookie.set("app-auth", true, {
        expires: 1,
      });

      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove("app-auth");

      setLoading(false);
      return false;
    }
  };

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push("/sites");
      });
  };

  const signinWithGitHub = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const addToCart = async (pid) => {
    return await firebase
      .firestore()
      .collection(`users`)
      .doc(userID)
      .update({
        cart: firebase.firestore.FieldValue.arrayUnion({ pid, quantity: 1 }),
      })
      .then((x) => {
        setUser({
          ...user,
          cart: [...(user.cart || []), { pid, quantity: 1 }],
        });
      });
  };
  const removeFromCart = async (cartItem) => {
    console.log({ cartItem, c: user?.cart, user });
    return await firebase
      .firestore()
      .collection(`users`)
      .doc(userID)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          pid: cartItem.id,
          quantity: 1,
        }),
      })
      .then((x) => {
        setUser({
          ...user,
          cart: user.cart.filter((item) => item.id !== cartItem.id),
        });
      });
  };

  const getUserCart = async () => {
    let cartIDs = [];
    if (user && user.cart) {
      cartIDs = user.cart.map((x) => x.pid);
      const items = cartIDs.length ? await getCartProducts(cartIDs) : [];
      console.log(items);
      return items;
    }
    return cartIDs;
  };

  const signout = () => {
    Router.push("/");

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGitHub,
    signinWithGoogle,
    signout,
    getUserCart,
    addToCart,
    removeFromCart,
  };
}

const formatUser = async (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    role: user.role || "user",
  };
};
