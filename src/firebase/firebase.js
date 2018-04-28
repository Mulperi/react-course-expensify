import firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };

// Subscribe to removing child node
// db.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// db.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// db.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// Subscribe to see all get all data if something changes
// db.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// db
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// db.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 1040,
//   createdAt: 2183762187
// });

// Objektien pushaaminen, synnyttää uuden uniikin id:n
// db.ref('notes').push({
//   title: 'Merkintä',
//   description: 'Paljon tavaraa mahtuu tähän tekstiä'
// })

// ON VALUE CHANGES, DO CALLBACK FUNCTION (SUBSCRIPTION)
// const onValueChange = db.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log(e)
// });

// // UNSUBSCRIBE
// db.ref().off('value', onValueChange);

// GET DATA SINGLE TIME
// db.ref()
// .once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val());
// })
// .catch((e) => {
//   console.log(e)
// })

// SET DATA
// db.ref().set({
//       name: 'Mika',
//       age: 33,
//       cool: true,
//       osoite: {
//           kaupunki: "jkl",
//           osoite: "sinkki"
//       },
//       leffat: ["temrinator", "bloodgood"]
//   }).then(() => {console.log("Saved");}).catch(e => console.log(e));

//   db.ref("cool").set(false);
//   db.ref("osoite/osoite").set("kakka");
//   db.ref("leffat/1").set("kakka");

// REMOVE DATA
// db.ref("cool")
// .remove()
// .then(()=>{console.log("deleted")})
// .catch(e=>console.log(e));

// UPDATE DATA
// db.ref().update({
//     name: "Teppo",
//     age: 93,
//     uusproperty: "toimii",
//     leffat: null  // DELETES PROPERTY
// })
// db.ref().update({
//     "osoite/kaupunki": "hesa"
// })
