// Fetch data using Ajax

fetchJSONData();
var current = 0;

function fetchJSONData() {

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET',"sources/data.json", true)

    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
           var parsedJSON = JSON.parse(xhttp.responseText);
           var stringifiedJSON = JSON.stringify(parsedJSON);
           jsonText= xhttp.responseText;
           localStorage.setItem("myJSON", stringifiedJSON);
        }
    };
    xhttp.send();
}

var myJSON = JSON.parse(localStorage.getItem("myJSON"));

// managing visibility of index page/information div
var flags = true; //for shipping block
var flagr = true; //for review block

function expandIndexInfoDiv(block) {

    if (block== 'ship'){
        // alert("Clicked shipping");
        if (!flags){
            document.getElementById('ship-info-inner').style.display ='none';
        }else {
            document.getElementById('ship-info-inner').style.display = 'block';
        }
        flags = !flags;
    } else if (block == 'review'){
        // alert("Clicked Reviews");
        if (!flagr){
            document.getElementById('cust-review-inner').style.display ='none';
        }else {
            document.getElementById('cust-review-inner').style.display ='block';
        }

        flagr = !flagr;
    }
}

loadProdDetails(current);

// Loading current product details..
function loadProdDetails(count) {
    count = parseInt(count);
    var num = JSON.stringify(count);
    localStorage.setItem("currentGuitar", num);
    console.log('images/'+myJSON.dict[count].imgsrc);

    document.getElementById('prod-img').src = 'images/' + myJSON.dict[count].imgsrc;
    document.getElementById('product-name-span').innerHTML = myJSON.dict[count].name;
    document.getElementById('price-lbl-span').innerHTML =  "<b>$" + myJSON.dict[count].price+"</b>";
    document.getElementById('color-lbl-span').innerHTML =  "<b>" + myJSON.dict[count].color+"</b>";
    document.getElementById('weight-lbl-span').innerHTML =  "<b>" + myJSON.dict[count].weight+"</b>";
    document.getElementById('desc-lbl-span').innerHTML = myJSON.dict[count].desc;
    document.getElementById('seller-lbl-span').innerHTML =  "<b>" + myJSON.dict[count].seller+"</b>";
    document.getElementById('item-id-span').innerHTML =  "<b>$" + myJSON.dict[count].itemno+"</b>";
    //document.getElementById('musicbox').src = '.../sources/music/' + (count+1) + '.mp3';
    // document.getElementById('audiobox').load();
    // console.log('Music '+'../sources/music/'+(count+1)+'.mp3');

    var commentCount = myJSON.dict[count].reviews.length;
    var reviewString = "";
    for (var i = 0 ; i< commentCount ; i++){
        reviewString = reviewString + "<p>" + myJSON.dict[count].reviews[i].name + ": <span id=\"price-lbl-span\">"
            + myJSON.dict[count].reviews[i].comment +"</span></p>";
    }
    document.getElementById('review-block').innerHTML = reviewString;
}

// Next and Previous buttons operations..

function changeProd(side) {
    if (side == 'left') {
        current == 0 ? current = 4 : current = current - 1;
        loadProdDetails(current)
    }else if (side == 'right'){
        current == 4 ?current = 0 : current = current + 1;
        loadProdDetails(current);
    }

}

function setCurrentGuitar() {
    var currentSelectedGuitar = parseInt(localStorage.getItem('currentGuitar'));
    localStorage.setItem("currentSelectedGuitar", currentSelectedGuitar);
    console.log(currentSelectedGuitar);
}