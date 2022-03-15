// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAa6Bgu0OospF11k8TaD59jwnJpMX1FluQ',
  authDomain: 'todo-para-vos-4fa81.firebaseapp.com',
  projectId: 'todo-para-vos-4fa81',
  storageBucket: 'todo-para-vos-4fa81.appspot.com',
  messagingSenderId: '736476649383',
  appId: '1:736476649383:web:f94d06ff789cbb6feb0882',
  measurementId: 'G-THCXZC12C5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
