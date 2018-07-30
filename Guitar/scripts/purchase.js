var currentGuitarCount = parseInt(localStorage.currentGuitar);

var myJSON =  JSON.parse(localStorage.getItem("myJSON"));

function loadCurrentGuitar() {
    var myGuitar = myJSON.dict[currentGuitarCount];

    document.getElementById('prodImage').src = 'images/' + myGuitar['imgsrc'];
    document.getElementById('prodTitle').innerHTML = myGuitar['name'];
    document.getElementById('prodPrice').innerHTML = "$"+myGuitar['price'];
    document.getElementById('prodColor').innerHTML = myGuitar['color'];
    document.getElementById('prodWeight').innerHTML =  myGuitar['weight'];
    document.getElementById('prodDesc').innerHTML = myGuitar['desc'];
}

loadCurrentGuitar();


// Form Validation:
function validateMe() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cardname = document.getElementById('cname').value;
    var cnumber = document.getElementById('cnumber').value;
    var cexpiry = document.getElementById('cexpiry').value;
    var ccv = document.getElementById('ccv').value;

    if(fname.length < 1) {
        alert('First name must be filled out.');
        document.getElementById('fname').focus();
        return false;
    }
    if(!isNaN(document.getElementById('fname').value)) {
        document.getElementById('fname').value = '';
        alert('Please enter valid first name.');
        return false;
    }
    if(lname.length < 1) {
        alert('Last name must be filled out.');
        document.getElementById('lname').focus();
        return false;
    }
    if(!isNaN(document.getElementById('lname').value)) {
        document.getElementById('lname').value = '';
        alert('Please enter valid last name.');
        return false;
    }
    if(!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert('You have entered invalid email address.');
        document.getElementById('email').focus();
        return false;
    }
    if(isNaN(phone) || phone.length != 10) {
        alert('Please enter valid number of 10 digits.');
        document.getElementById('phone').focus();
        return false;
    }
    if(cardname.length < 1) {
        alert('Please enter valid name shown on your card.');
        document.getElementById('cname').focus();
        return false;
    }
    if(!isNaN(document.getElementById('cname').value)) {
        document.getElementById('cname').value = '';
        alert('Please enter valid holder name.');
        return false;
    }
    if(isNaN(cnumber) || cnumber.length != 16) {
        alert('Please enter valid 16 digit card number.');
        document.getElementById('cnumber').focus();
        return false;
    }
    if(cexpiry.length < 1) {
        alert('Please select expiry month and a year.');
        document.getElementById('cexpiry').focus();
        return false;
    }
    if(isNaN(ccv) || ccv.length != 3) {
        alert("Please enter the 3 digit security or CVV code.");
        document.getElementById('ccv').focus();
        return false;
    }
    // alert(typeof cnumber);
    toogleToReview();
    return true;
}




// Reviewing the filled Form information

function toogleToReview() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cardname = document.getElementById('cname').value;
    var cnumber = document.getElementById('cnumber').value;

    document.getElementById('fname-span').innerHTML = fname;
    document.getElementById('lname-span').innerHTML = lname;
    document.getElementById('email-span').innerHTML = email;
    document.getElementById('phone-span').innerHTML = phone;
    document.getElementById('cname-span').innerHTML = cardname;
    var cardnum = cnumber.split("");
    var lastFour = "";
    for (var i =cardnum.length-1 ; i>(cardnum.length -1)-4; i--) {
        lastFour = cardnum[i] +lastFour;
    }

    document.getElementById('cnumber-span').innerHTML = "***" +lastFour;

    document.getElementById('purchase-form-block').style.display = 'none';
    document.getElementById('purchase-review-block').style.display = 'block';
}

function changeToEdit() {
    document.getElementById('purchase-form-block').style.display = 'block';
    document.getElementById('purchase-review-block').style.display = 'none';

}