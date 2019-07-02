// Web Storage

window.onload = function(){
    document.querySelector("#ime").value = localStorage.getItem("imeLS");
    document.querySelector("#email").value = localStorage.getItem("emailLS");
    document.querySelector("#poruka").value = localStorage.getItem("porukaLS");
}

// Forma

var minDuzina = 3;
var maxDuzina = 3000;

document.querySelector("#ime").addEventListener("blur", function(){
    var ime = document.querySelector("#ime").value;
    localStorage.setItem("imeLS", ime);
	var regIme = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
	
	if(ime.length == 0){
		document.querySelector("#ime").style.borderColor = "";
		document.querySelector("#pIme").style.display = "none";
	}
	else if(!regIme.test(ime)){
		document.querySelector("#ime").style.borderColor = "red";
		document.querySelector("#pIme").style.display = "block";
		document.querySelector("#pIme").style.color = "red";
	}
	else{
		document.querySelector("#ime").style.borderColor = "";
		document.querySelector("#pIme").style.display = "none";
	}
});

document.querySelector("#email").addEventListener("blur", function(){
    var email = document.querySelector("#email").value;
    localStorage.setItem("emailLS", email);
	var regEmail = /^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/;
	
	if(email.length == 0){
		document.querySelector("#email").style.borderColor = "";
		document.querySelector("#pEmail").style.display = "none";
	}
	else if(!regEmail.test(email)){
		document.querySelector("#email").style.borderColor = "red";
		document.querySelector("#pEmail").style.display = "block";
		document.querySelector("#pEmail").style.color = "red";
	}
	else{
		document.querySelector("#email").style.borderColor = "";
		document.querySelector("#pEmail").style.display = "none";
	}
});

document.querySelector("#poruka").addEventListener("blur", function(){
    var poruka = document.querySelector("#poruka").value;
    localStorage.setItem("porukaLS", poruka);
	if(poruka.length == 0){
		document.querySelector("#poruka").style.borderColor = "";
		document.querySelector("#pKratka").style.display = "none";
		document.querySelector("#pDugacka").style.display = "none";
	}
	else if(poruka.length > maxDuzina){ 
		document.querySelector("#poruka").style.borderColor = "red";
		document.querySelector("#pDugacka").style.display = "block";
		document.querySelector("#pDugacka").style.color = "red";
		document.querySelector("#pKratka").style.display = "none";
	}
	else if(poruka.length < minDuzina){ 
	    document.querySelector("#poruka").style.borderColor = "red";
	    document.querySelector("#pKratka").style.display = "block";
		document.querySelector("#pKratka").style.color = "red";
		document.querySelector("#pDugacka").style.display = "none";
	}
	else{
		document.querySelector("#poruka").style.borderColor = "";
		document.querySelector("#pKratka").style.display = "none";
		document.querySelector("#pDugacka").style.display = "none";
	}
});

function provera(){
	var ime = document.querySelector("#ime").value;
	var email = document.querySelector("#email").value;
	var poruka = document.querySelector("#poruka").value;
	
	var regIme = /^[A-Z][A-z]{2,}\s[A-Z][A-z]{2,}$/;
	var regEmail = /^[\w\.]+[\d]*@[\w]+\.\w{2,3}(\.[\w]{2})?$/;
	
	var greske = 0;
	
	if(!regIme.test(ime)){
		document.querySelector("#ime").style.borderColor = "red";
		document.querySelector("#pIme").style.display = "block";
		document.querySelector("#pIme").style.color = "red";
		greske++;
	}
	else{
		document.querySelector("#ime").style.borderColor = "";
		document.querySelector("#pIme").style.display = "none";
	}
	
	if(!regEmail.test(email)){
		document.querySelector("#email").style.borderColor = "red";
		document.querySelector("#pEmail").style.display = "block";
		document.querySelector("#pEmail").style.color = "red";
		greske++;
	}
	else{
		document.querySelector("#email").style.borderColor = "";
		document.querySelector("#pEmail").style.display = "none";
	}
	
	if(poruka.length > maxDuzina){ 
		document.querySelector("#poruka").style.borderColor = "red";
		document.querySelector("#pDugacka").style.display = "block";
		document.querySelector("#pDugacka").style.color = "red";
		document.querySelector("#pKratka").style.display = "none";
		greske++;
	}
	else if(poruka.length < minDuzina){ 
	    document.querySelector("#poruka").style.borderColor = "red";
	    document.querySelector("#pKratka").style.display = "block";
		document.querySelector("#pKratka").style.color = "red";
		document.querySelector("#pDugacka").style.display = "none";
		greske++;
	}
	else{
		document.querySelector("#poruka").style.borderColor = "";
		document.querySelector("#pKratka").style.display = "none";
		document.querySelector("#pDugacka").style.display = "none";
	}
	
	if(greske != 0){
		return false;
	}
    else{
		return true;
	}
}

// Google Maps API

function initMap() {

    var uluru = {lat: 44.784020, lng: 20.52220};
    var map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 15,
        scrollwheel: false,
        center: uluru,
        styles: [
            {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "lightness": -8 },
        { "gamma": 1.18 }
      ]
  }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 },
        { "gamma": 1 },
        { "lightness": -24 }
      ]
  }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "transit",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "road",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "administrative",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "landscape",
      "stylers": [
        { "saturation": -100 }
      ]
  }, {
      "featureType": "poi",
      "stylers": [
        { "saturation": -100 }
      ]
  }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}