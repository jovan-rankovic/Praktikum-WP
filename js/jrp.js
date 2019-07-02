// Responsive meni
document.querySelector(".ikonica").addEventListener("click", function(){
    var x = document.getElementById("navigacijaResponsive");
    if(x.className === "navigacija"){
        x.className += " responsive";
    } 
    else{
        x.className = "navigacija";
    }
});
// JSON+AJAX
$.ajax({
    type: "GET",
    url: "json/footer.json",
    success: function(footer){
            var sadrzaj = `<div id="`+footer.id1.naziv+`">
                                <a href="`+footer.id1.href+`"><button>`+footer.id1.dugmeNaziv+`</button></a>
                            </div>

                            <div id=`+footer.id2.naziv+`>
                                <strong><a href="`+footer.id2.href1+`">`+footer.id2.href1Tekst+`</a> | <a href=`+footer.id2.href2+`>`+footer.id2.href2Tekst+`</a></strong>
                            </div>

                            <div id=`+footer.id3.naziv+`>
                                 <strong>`+footer.id3.tekst+`</strong>
                            </div>

                            <div id=`+footer.id4.naziv+`>
                                <li><a href="`+footer.id4.href1+`"><img src="`+footer.id4.href1ImgSrc+`" title="`+footer.id4.href1ImgTekst+`"/></a></li>
                                <li><a href="`+footer.id4.href2+`"><img src="`+footer.id4.href2ImgSrc+`" title="`+footer.id4.href2ImgTekst+`"/></a></li>
                            </div>`;
                $("footer").hide().html(sadrzaj).fadeIn(3000);
    }
});