import * as firebase from 'firebase';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAG6CvaFAD9mgfySxdPn09wjQdp_3oaD6Q",
    authDomain: "expensify-ee435.firebaseapp.com",
    databaseURL: "https://expensify-ee435-default-rtdb.firebaseio.com",
    projectId: "expensify-ee435",
    storageBucket: "expensify-ee435.appspot.com",
    messagingSenderId: "749912350514"
   
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database();

  export{firebase,database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snap)=>{
//   console.log(snap.key,snap.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snap)=>{
//   console.log(snap.key,snap.val());
// });
// //child_added
// database.ref('expenses').on('child_added', (snap)=>{
//   console.log(snap.key,snap.val());
// });


//  const onExpenseChange= database.ref('expenses').on('value', (snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnap)=>{
//       expenses.push({
//         id:childSnap.key,
//         ...childSnap.val()
//       })
//     });
//     console.log(expenses)
//   });



  // database.ref('expenses').push({
  //   description:'office rent',
  //   note:'',
  //   amount:13000,
  //   createdAt:0
  // })


// database.ref('notes/-NDgiYymnx5zCR30Gqmv').update({
//   body:'Buy food'
// });
   

// database.ref('notes').push({
//   title:'AJdeee bre',
//   body:'Goooo'
// });


//   //niz za firebase jer firebase ne podrzava nizove vec samo objekte
//   const firebaseNotes={
//     notes:{
//       id1:{
//         title:'First note',
//         body:'Noteeeee'
//       },
//       id2:{
//         title:'Second note',
//         body:'Nottteeeee'
//       }
//     }
//   };
 

// database.ref().set(firebaseNotes);

  
  // const onValueChange=database.ref().on('value',(snapshot)=>{
  //   console.log(snapshot.val());
  // });

  // setTimeout(()=>{
  //   database.ref('age').set(22);
  // },3500);


  // //kada se u off proslijedi f-ja znaci da ce se prekinuti pracenje samo za tu f-ju
  // setTimeout(()=>{
  //   database.ref().off('value',onValueChange);
  // },7000);

  // setTimeout(()=>{
  //   database.ref('age').set(30);
  // },10500)

  // //this is way to get data single time(once)
  // 
  // database.ref('location').once('value').then((snapshot)=>{
  //   const val=snapshot.val();
  //   console.log(val);
  // }).catch((e)=>{
  //   console.log("Error");
  // })



  // database.ref().set({
  //   name:"Djordje Cvijanovic",
  //   age:23,
  //   isSingle:false,
  //   location:{
  //     city:'Doboj',
  //     country:'BiH'
  //   }
  // }).then(()=>{ 
  //   console.log("data is saved")
  // });
 
  // database.ref().update({
  //   name:'Djole',
  //   age:29,
  //   job:'student',
  //   isSingle:null
  // });
  
  // database.ref().remove().then(()=>{
  //   console.log("data is removed");
  // }).catch(()=>{
  //   console.log("data is not removed");
  // });