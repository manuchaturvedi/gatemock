import firebase from 'firebase';
import 'firebase/auth';  

var firebaseConfig = {
    apiKey: "AIzaSyDRbnaDtpbUsXTlG5VeMYXiwSYdUYaXEU4",
    authDomain: "gatemock.firebaseapp.com",
    databaseURL: "https://gatemock.firebaseio.com",
    projectId: "gatemock",
    storageBucket: "gatemock.appspot.com",
    messagingSenderId: "199901158065",
    appId: "1:199901158065:web:b6f3adeaa7cc19ec2c2090",
    measurementId: "G-MRTG03FWT6"
  };

  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;