$( document ).ready(function() {
    /*function timeout() {
        setTimeout(function () {
            // Do Something Here
            // Then recall the parent function to
            // create a recursive loop.
            $(  )
            timeout();
        }, 3000);
        
    }
    function welcomeResizer(){
        var h1Height = $(".welcome h1").height();
        var h2Height = $(".welcome h2").height();
        var divHeight = h1Height + h2Height;
        $(".welcome .header-fix").height(divHeight);
        //console.log(divHeight);
    }
    */
    

    function fadeScroll(){
        $("header .arrow-down").addClass("scroll");
    }

    function fadeScrollOut(){
        $("header .arrow-down").removeClass("scroll");
    }

    function welcomeHover(){ 
        $(".welcome .arr").toggleClass("hover"); 
    }

    function headerResizer(section){
        var hLine = $(section + " .section-line").height();
        var dLine = $(section + " .down-line").height();
        var hHeight = hLine + dLine;
        //console.log("The height of the headline section is: " + hHeight);
        $(section + " .headliner").height(hHeight);
    }

    function mapResizer(){
        var mapWidth = $(".locations #map").width();
        $(".locations #map").height(mapWidth);
    }

    function getStartedResizer(){
        var imgHeight = $(".get-started img").height();
        var contactHeight = $(".get-started .get-contact").height();
        var screen = $( window ).width();
        if ( screen <= 750){
            console.log("window width equals: " + screen);
            $(".get-started").height(imgHeight + contactHeight);
        }else if (imgHeight > contactHeight){
            $(".get-started").height(imgHeight);
        }else if (imgHeight < contactHeight){
            $(".get-started").height(contactHeight);
        }
        console.log("the picture is " + imgHeight + "pixels big");
        console.log("the contact is " + contactHeight + "pixels big");

    }

    function newsResizer(){
        var img = $(".news .soon img").height();
        //console.log("The height of the headline section is: " + hHeight);
        $(".news .soon").height(img);
    }

    function lesslonResizer(){
        $(".lesslons .img-fit").height(100);
        var content = $(".lesslons .content").height();
        console.log("The temp heihgt is: " + content);
        $(".lesslons .img-fit").height(content + 128); //128 is the sum of the padding(top&bottom)
    }

    jQuery.expr.filters.offscreen = function(el) {
        var rect = el.getBoundingClientRect();
        return (
                 (rect.x + rect.width) < 0 
                   || (rect.y + rect.height) < 0
                   || (rect.x > window.innerWidth || rect.y > window.innerHeight)
               );
      };

    var sections = [".service", ".locations", ".teacher", ".news"];
    var timer;

    //welcomeResizer();
    lesslonResizer();
    getStartedResizer();
    mapResizer();
    sections.forEach(function(e) {
        console.log("Beim Laden der Seite wurde die Höhe angepasst");
        headerResizer(e);
    });

    $(".welcome .more").hover(welcomeHover);

    $( window ).on("load", function(){
        sections.forEach(function(e) {
            console.log("Beim Laden der Seite wurde die Höhe angepasst");
            headerResizer(e);
        });
        mapResizer();
        getStartedResizer();
        newsResizer();
        lesslonResizer();
    })

    $( window ).resize(function() {
        //console.log("Bildschirm Größe hat sich verändert!");
        //welcomeResizer();
        mapResizer();
        getStartedResizer();
        newsResizer();
        lesslonResizer();
        sections.forEach(function(e) {
            //console.log(e);
            headerResizer(e);
        });
    });

    $( window ).scroll(function(){
        window.clearTimeout(timer);
        fadeScroll();
        var offScreen = $("footer").is(":offscreen");
        if(offScreen == true){
            timer = window.setTimeout(function(){ fadeScrollOut(); }, 500);
        }
    })
    
    
});
//google maps api
function initMap() {
    // The location of Friedrichshain/Lichtenberg location
    var defaultLoc = {lat: 52.5095829, lng: 13.4902017};
    // The map, centered at Friedrichshain/Lichtenberg
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 13, center: defaultLoc});
    // The marker, positioned at Friedrichshain/Lichtenberg
    var marker = new google.maps.Marker({position: defaultLoc, map: map});
    
    //changes the position of the marker depending on the clients choice
    function changeMarkerPosition(marker, location) {
        var latlng = new google.maps.LatLng(location.lat, location.lng);
        //console.log("the new set latitude is " + location.lat);
        marker.setPosition(latlng);
        //marker.setLabel("Adresse")
    }

    function changeMapPosition(map, location) {
        var latlng = new google.maps.LatLng(location.lat, location.lng);
        map.setCenter(latlng);
    }

    /*function tempelhof(marker) {
        var latlng = new google.maps.LatLng(52.466949, 13.392963);
        marker.setPosition(latlng);
    }*/

    var locations = [ 
        //These are the Coordinates for the locations in the districts:

        //Friedrichshain/Lichtenberg 
        {
            loc: "fLichtenberg",
            lat: 52.5095829, 
            lng: 13.4902017
        },
        //Tempelhof
        { 
            loc: "tempelhof",
            lat: 52.466949, 
            lng: 13.392963
        },
        //Friedrichshain/Kreuzberg
        {
            loc: "fKreuzberg",
            lat: 52.5046279,
            lng: 13.4511253
        },
        //Mitte
        {
            loc: "mitte",
            lat: 52.53611,
            lng: 13.39728
        },
        //Wedding
        {
            loc: "wedding",
            lat: 52.555476,
            lng: 13.374834
        },
        //Pankow
        {
            loc: "pankow",
            lat: 52.5634979,
            lng: 13.409052
        }
    ];
    //By clicking on the district names beneath/under the Map,
    //The marker will change its position to the choosen location
    $(".locations .location ").click(function(e){
        console.log(e);
        //console.log(e.target.id);
        var currentLoc = ""
        var newLoc = e.target.id;
        //checks the choosen district/location
        for (var i = 0; i < locations.length; i++) {
            currentLoc = locations[i].loc;
            //console.log(currentLoc)
            if (currentLoc == newLoc){
                newLoc = locations[i];
            };
            
        };
        //console.log("loop is over and the newLoc.lat  equals: " + newLoc.lat);
        
        
        changeMarkerPosition(marker, newLoc);
        changeMapPosition(map, newLoc)
    });
}
/*document.querySelector(".locations .location").addEventListener("click", function(){
    //changeMarkerPosition(marker);
    console.log("CLICK!");
})
$(".locations .location").click(function(){
    console.log("CLICK!!");
});

var fLichtenberg ={
    lat: 52.5095829,
    lng: 13.4902017
};
var tempelhof ={
    lat: 52.466949,
    lng: 13.392963
};
var fKreuzberg ={
    lat: 52.5046279,
    lng: 13.4511253
};
var mitte ={
    lat: 52.53611,
    lng: 13.39728
};
var wedding ={
    lat: 52.555476,
    lng: 13.374834
};
var pankow ={
    lat: 52.5634979,
    lng: 13.409052
};*/


//Maps API key:AIzaSyBfXJ_TeZHWtDMEpGuz3mMwuDcfXcRAXAM