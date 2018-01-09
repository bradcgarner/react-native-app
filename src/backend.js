import firebase from 'firebase';

class Backend {
  uid = '';
  messagesRef = null;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyCcXNBRbE3fD3zd2-22QBAmO76P4hlR0Z4",
      authDomain: "test1-3c5ce.firebaseapp.com",
      databaseURL: "https://test1-3c5ce.firebaseio.com",
      projectId: "test1-3c5ce",
      storageBucket: "",
      messagingSenderId: "894986444203"
    });
    firebase.auth().onAuthStateChanged(user=> {
      if(user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch(error=> {
          alert(error.message);
        });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid(value) {
    return this.uid;
  }
  // get messages from back end
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = data => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  // send message to back end
  sendMessage(message) {
    for (let i=0; i<message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close connection to back end
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();