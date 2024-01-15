
const firebaseConfig = {
    apiKey: "AIzaSyCxu8ueChSS4CkdDA4v1sdSvcCTVezvIIo",
    authDomain: "hotellogin-983f3.firebaseapp.com",
    databaseURL: "https://hotellogin-983f3-default-rtdb.firebaseio.com",
    projectId: "hotellogin-983f3",
    storageBucket: "hotellogin-983f3.appspot.com",
    messagingSenderId: "1094941440883",
    appId: "1:1094941440883:web:b39aa414868bcf37146306"
};

firebase.initializeApp(firebaseConfig);

const hotelLoginDB = firebase.database().ref('hotelLogin');
document.getElementById('hotelLogin').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var password = getElementVal('password');
    saveMesages(fname, lname, email, password);

    document.querySelector('.alert').style.display = "block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("hotelLogin").reset();
    window.location.href="index.html";

}

const saveMesages = (fname, lname, email, pass) => {
    var newHotalForm = hotelLoginDB.push();

    newHotalForm.set({
        firstName : fname,
        userName : lname,
        emailId : email,
        password : pass,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}