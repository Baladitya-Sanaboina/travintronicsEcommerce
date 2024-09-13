import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwvpX82Q6USp4GtsuL_jCaRab2aKWn_A4",
  authDomain: "travintronics2.firebaseapp.com",
  projectId: "travintronics2",
  storageBucket: "travintronics2.appspot.com",
  messagingSenderId: "535102832992",
  appId: "1:535102832992:web:026ed4bd213cd932dede05",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
