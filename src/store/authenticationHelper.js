import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getUserUsingUid = async (uid) => {
  const userDocRef = doc(db, "Users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data();
  }
};

export const handleSignInWithEmailAndPassword = createAsyncThunk(
  "authentication/handleSignIn",
  async ({ email, password, setSubmitting }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const uid = user.uid;

      const userData = await getUserUsingUid(uid);
      setSubmitting(false);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const handleSingUpWithEmailAndPassword = createAsyncThunk(
  "authentication/handleSingUpWithEmailAndPassword",
  async ({ email, password, name, setSubmitting }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      const uid = user.uid;

      if (user) {
        await setDoc(doc(db, "Users", uid), {
          email: user.email,
          name: name,
        });
      }

      setSubmitting(false);
      return {
        email: user.email,
        name: name,
      };
    } catch (error) {
      console.log("Error while login", error);
      return rejectWithValue(error.message);
    }
  }
);
