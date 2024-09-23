import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
 
  const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_APIKEY,
    authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN,
    projectId: process.env.EXPO_PUBLIC_PROJECTID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERId,
    appId: process.env.EXPO_PUBLIC_APPID
  };
const app = initializeApp(firebaseConfig);
 
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
 
});