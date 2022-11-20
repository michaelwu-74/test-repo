const firebaseConfig = {
  apiKey: "AIzaSyC4mMpsojdgtr_S9zJT1wtzaR_Ha_YF3do",
  authDomain: "sustainable-cities-project.firebaseapp.com",
  databaseURL: "https://sustainable-cities-project-default-rtdb.firebaseio.com",
  projectId: "sustainable-cities-project",
  storageBucket: "sustainable-cities-project.appspot.com",
  messagingSenderId: "805402742329",
  appId: "1:805402742329:web:95093290f1ce63047f87e8",
  measurementId: "G-BDJTN1458R"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
