import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  db,
  googleProvider,
  githubProvider,
} from "../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const getUserUsingUid = async (uid) => {
  const userDocRef = doc(db, "Users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data();
  }
};

// Email and password
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

// Google
export const handleSignUpWithGoogle = createAsyncThunk(
  "authentication/handleSignUpWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.error("Error in user Credential");
        return rejectWithValue("Error in user Credential");
      }

      const user = result.user;

      const uid = user.uid;

      if (user) {
        await setDoc(doc(db, "Users", uid), {
          email: user.email,
          name: user.displayName,
        });
      }
      return {
        email: user.email,
        name: user.displayName,
      };
    } catch (e) {
      console.log("Error while sign up with google", e);
    }
  }
);

export const handleSignInWithGoogle = createAsyncThunk(
  "authentication/handleSignInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      if (user) {
        const uid = user.uid;
        const userData = await getUserUsingUid(uid);
        return userData;
      } else {
        return rejectWithValue("No user available");
      }
    } catch (e) {
      console.log("error while login using google", e);
    }
  }
);

// Github Login
export const handleSignUpWithGithub = createAsyncThunk(
  "authentication/handleSignUpWithGithub",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      const credential = GithubAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.error("Error in user Credential");
        return rejectWithValue("Error in user Credential");
      }

      const user = result.user;

      const uid = user.uid;

      if (user) {
        await setDoc(doc(db, "Users", uid), {
          email: user.email,
          name: user.displayName,
        });
      }
      return {
        email: user.email,
        name: user.displayName,
      };
    } catch (e) {
      console.log("Error while singup with github", e);
    }
  }
);

export const handleSignInWithGithub = createAsyncThunk(
  "authentication/handleSignInWithGithub",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, githubProvider);

      const user = result.user;

      if (user) {
        const uid = user.uid;
        const userData = await getUserUsingUid(uid);
        return userData;
      } else {
        return rejectWithValue("No user available");
      }
    } catch (e) {
      console.log("error while login using google", e);
    }
  }
);
