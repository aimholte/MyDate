import {initializeApp} from 'firebase'


const app = initializeApp({
  apiKey: "AIzaSyCya_MlbHlQhlkqtmKyVlFjJ-mE64xGqrU",
  authDomain: "fir-vue-beced.firebaseapp.com",
  databaseURL: "https://fir-vue-beced.firebaseio.com",
  projectId: "fir-vue-beced",
  storageBucket: "",
  messagingSenderId: "693761474289"
});


export  const db = app.database();
export  const namesRef = db.ref('names');
