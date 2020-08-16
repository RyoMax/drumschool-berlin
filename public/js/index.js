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

    var sections = [".service", ".locations", ".teacher", ".news"];
    var timer;

    //welcomeResizer();
    
    getStartedResizer();
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
        getStartedResizer();
        newsResizer();
    })

    $( window ).resize(function() {
        //console.log("Bildschirm Größe hat sich verändert!");
        //welcomeResizer();
        getStartedResizer();
        newsResizer();
        sections.forEach(function(e) {
            //console.log(e);
            headerResizer(e);
        });
    });

    $( window ).scroll(function(){
        window.clearTimeout(timer);
        fadeScroll();
        timer = window.setTimeout(function(){ fadeScrollOut(); }, 500);
    })
    
    
});
