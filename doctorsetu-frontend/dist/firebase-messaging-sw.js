importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    // apiKey: "AIzaSyBuJmvWdVG64V9zlwJ_GEQ9xo3ZmOcZLd4",
    // authDomain: "doctorsetu-aae3e.firebaseapp.com",
    // databaseURL: "https://doctorsetu-aae3e.firebaseio.com",
    // projectId: "doctorsetu-aae3e",
    // storageBucket: "doctorsetu-aae3e.appspot.com",
    // messagingSenderId: "1079953303234",
    // appId: "1:1079953303234:web:46c72f63e77b08be6e7d5b",
    // measurementId: "G-T5N17EM419"
    apiKey: "AIzaSyAa0p8g_cfzEFG6qmhO3RF-bXDTytGOM-g",
    authDomain: "notifications-94da1.firebaseapp.com",
    databaseURL: "https://notifications-94da1.firebaseio.com",
    projectId: "notifications-94da1",
    storageBucket: "notifications-94da1.appspot.com",
    messagingSenderId: "153708463632",
    appId: "1:153708463632:web:89e365b35ab8d1c4c76c95",
    measurementId: "G-EPREB4BQL5"
});
const messaging = firebase.messaging();  

// messaging.setBackgroundMessageHandler(function(payload) {
//   const sender = JSON.parse(payload.data.message);

//   console.log("calling")
//   const notificationTitle = 'New CometChat message';
//   const notificationOptions = {
//     body: payload.data.alert,
//     icon: sender.data.entities.sender.entity.avatar,
//   };
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions,
//   );
// });
// self.addEventListener('notificationclick', function(event) {
//     event.notification.close();
//     event.waitUntil(self.clients.openWindow(event.notification.data.url));
// });
// firebase.initializeApp(firebaseConfig);

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//     .then(function(registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     }).catch(function(err) {
//       console.log('Service worker registration failed, error:', err);
//     });
//   }