var currentGuitarCount = parseInt(localStorage.currentGuitar);

var myJSON = JSON.parse(localStorage.getItem("myJSON"));

function initialLoad() {
    var myGuitar = myJSON.dict[currentGuitarCount];

    document.getElementById('prodName').innerHTML = myGuitar['name'];
    document.getElementById('prodPrice').innerHTML = '$'+ myGuitar['price'];
    document.getElementById('confProdImg').src = 'images/'+myGuitar['imgsrc'];
    document.getElementById('prodNumber').innerHTML = myGuitar['itemno'] + 123456;
    var dt = new Date();
    document.getElementById('prodShipDate').innerHTML = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();

}