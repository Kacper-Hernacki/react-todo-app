/*const firebaseConfig = {
    apiKey: "AIzaSyBrpXuusK5BpKenfLYEiBFLpJYOg4ubGPk",
    authDomain: "todo-app-2ccc5.firebaseapp.com",
    databaseURL: "https://todo-app-2ccc5.firebaseio.com",
    projectId: "todo-app-2ccc5",
    storageBucket: "todo-app-2ccc5.appspot.com",
    messagingSenderId: "738131768504",
    appId: "1:738131768504:web:99db0efac04b3d799d304d",
    measurementId: "G-M5F5M3NTH6"
  };*/

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrpXuusK5BpKenfLYEiBFLpJYOg4ubGPk",
    authDomain: "todo-app-2ccc5.firebaseapp.com",
    databaseURL: "https://todo-app-2ccc5.firebaseio.com",
    projectId: "todo-app-2ccc5",
    storageBucket: "todo-app-2ccc5.appspot.com",
    messagingSenderId: "738131768504",
    appId: "1:738131768504:web:99db0efac04b3d799d304d",
    measurementId: "G-M5F5M3NTH6"
  });

  const db = firebaseApp.firestore();

  export default db;
 