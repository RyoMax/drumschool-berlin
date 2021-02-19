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
    
/*      This one will make the down-pointing arrow in 
        the main page disappear
 */    
    function fadeScroll(){
        $("header .arrow-down").addClass("scroll");
    }
        
/*      This one will make the down-pointing arrow in 
        the main page appear
 */   
    function fadeScrollOut(){
        $("header .arrow-down").removeClass("scroll");
    }

    
/*      This one will make the  arrow in welcome section
        hover
 */       
    function welcomeHover(){ 
        $(".welcome .arr").toggleClass("hover"); 
    }
       
    
// ALL FUNCTIONS WITH 'Reziser' ARE FOR ELEMTS WHICH POSITIONS ARE SET
// TO ABSOLUTE AND THUS HAVE NO HEIGHT/WIDTH
// RESIZER FUNCTIONS ARE MY SOLUTION TO GIVE THEM A SPECIFIED
// HEIGHT/WIDTH DEPENDING ON ANOTHER ELEMENT THEY REFER TO

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
            $(".get-started .content").height(imgHeight + contactHeight);
            $
        }/*else if (imgHeight > contactHeight){
            $(".content").height(imgHeight);
        }*/
        else {
            $(".get-started .content").height(contactHeight);
        }
        console.log("the picture is " + imgHeight + "pixels big");
        console.log("the contact is " + contactHeight + "pixels big");

    }

    function newsResizer(){
        var img = $(".news .soon img").height();
        //console.log("The height of the headline section is: " + hHeight);
        $(".news .soon").height(img);
    }

    function lessslonResizer(){
        var parent = $(".lesslons .fullscreen");
        var nav = $("header").height();
        var diff = parent.height() - nav;
        var child = $(".lesslons .contain .shadow-box");
        if (parent.height() != null){
            parent.height(diff)
            child.height(diff + 128);
            console.log("the whole section is: " + diff + ", height, while the nav is: " + nav)
        }else{
            parent = $(".welcome .content-box").height();
            child = $(".welcome .contain .shadow-box");
            child.height(parent + 128);
        }
    }
    function cardResizer(){
        var cardW = $(".service .circ").width();
        $(".service .circ").height(cardW);
    }

    /* this one manages the collapses in the location section
    to allow only one collapsed description at a time */
    function locationToggle(e){
        var current = e.target.id;
        var collapsables = [
            "#collapse1", "#collapse2", 
            "#collapse3", "#collapse4", 
            "#collapse5", "#collapse6", 
        ];
        collapsables.forEach(i => {
            if(
                //checks, if collapse is active on an element
                $('.locations .mloc ' + i).hasClass("collapse show") && 
                i != current){
                    //if so, it will remove this 'collapse' class
                    $('.locations .mloc ' + i).collapse('toggle');
            }
        });         
    }

    /* Generates the links for the next and previous page depending on the current page
    the links are embed to the arrow buttons. 
    works for the unterricht pages*/
    function generateLesslonLink(){
        if ($("section").hasClass("lesslons")) {
            var pages = ["konzept", "anfaenger", "fortgeschritten", "kinder"];
            var partLink = "/unterricht_";
            var lesslonsId = $(".lesslons").attr("id");
            var linkBack = $(".lesslons .arr-l");
            var linkForeword = $(".lesslons .arr-r");
        } else {
            var pages = [
                "johanfink", "michaeldau", "dimitrischristides", 
                "berndoezsevim", "felixastor", "jantuerk", 
                "mesutguersoy", "emanuelhauptmann", "giancarlomura", 
                "hannesstickel", "hansschlotter", "michamaass", 
                "tomassvensson", "derekscherzer", "chrisheiny"
            ];
            var partLink = "/lehrkraefte/";
            var lesslonsId = $(".teacher").attr("id");
            var linkBack = $(".teacher .arr-l");
            var linkForeword = $(".teacher .arr-r");
        }
        var index = pages.indexOf(lesslonsId);
        var length = pages.length;

        if (index == 0){
            linkBack.attr("href", partLink + pages[length - 1]);
            linkForeword.attr("href", partLink + pages[index + 1]);
        }else if (index == length - 1) {
            linkBack.attr("href", partLink + pages[index - 1]);
            linkForeword.attr("href", partLink + pages[0]);
        } else {
            linkBack.attr("href", partLink + pages[index - 1]);
            linkForeword.attr("href", partLink + pages[index + 1]);
        }
        
    }

    jQuery.expr.filters.offscreen = function(el) {
        var rect = el.getBoundingClientRect();
        return (
                 (rect.x + rect.width) < 0 ||
                    (rect.y + rect.height) < 0 || 
                    (rect.x > window.innerWidth ||
                    rect.y > window.innerHeight)
               );
      };

    var sections = [".service", ".locations", ".teacher", ".news"];
    var timer;

    //welcomeResizer();
    $(".locations .mloc").click(locationToggle);
    cardResizer();
    lesslonResizer();
    getStartedResizer();
    mapResizer();
    sections.forEach(function(e) {
        console.log("Beim Laden der Seite wurde die Höhe angepasst");
        headerResizer(e);
    });
    generateLesslonLink();

    $(".welcome .more").hover(welcomeHover);
    if($("section").hasClass("teacher")){
        console.log("this is a teacher page!")
        $("section").toggleClass("full-height");
    };

    $( window ).on("load", function(){
        sections.forEach(function(e) {
            console.log("Beim Laden der Seite wurde die Höhe angepasst");
            headerResizer(e);
        });
        mapResizer();
        getStartedResizer();
        newsResizer();
        lesslonResizer();
        cardResizer();
        
        
    })

    $( window ).resize(function() {
        //console.log("Bildschirm Größe hat sich verändert!");
        //welcomeResizer();
        mapResizer();
        getStartedResizer();
        newsResizer();
        lesslonResizer();
        cardResizer();
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