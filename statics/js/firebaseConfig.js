var firebaseConfig = {
    apiKey: "AIzaSyDQt5JQjT624NdUN8gHdB5RYV1FrL8zKf0",
    authDomain: "attic-11.firebaseapp.com",
    databaseURL: "https://attic-11-default-rtdb.firebaseio.com",
    projectId: "attic-11",
    storageBucket: "attic-11.appspot.com",
    messagingSenderId: "835456075255",
    appId: "1:835456075255:web:b61765d3c7044b89fc1af2",
    measurementId: "G-5K3XQNB0TC"
  };
  firebase.initializeApp(firebaseConfig);
  
  // https://console.firebase.google.com/u/0/project/attic-11/database/attic-11-default-rtdb/data
  
  // Get a reference to the database service
  var database = firebase.database();