$( document ).ready(function() {
    /*function timeout() {
        setTimeout(function () {
            // Do Something Here
            // Then recall the parent function to
            // create a recursive loop.
            $(  )
            timeout();
        }, 3000);
    }*/
    function welcomeHover(){ 
        $(".welcome .arr").toggleClass("hover"); 
    }

    function welcomeResizer(){
        var h1Height = $(".welcome h1").height();
        var h2Height = $(".welcome h2").height();
        var divHeight = h1Height + h2Height;
        $(".welcome .header-fix").height(divHeight);
        //console.log(divHeight);
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
        if (imgHeight >= contactHeight){
            $(".get-started").height(imgHeight);
        }else{
            $(".get-started").height(contactHeight);
        }
        console.log("the picture is " + imgHeight + "pixels big");
        console.log("the contact is " + contactHeight + "pixels big");

    }
    var sections = [".service", ".locations", ".teacher", ".news"]

    sections.forEach(function(e) {
        //console.log(e);
        headerResizer(e);
    });
    welcomeResizer();
    getStartedResizer();

    $(window).resize(function() {
        //console.log("Bildschirm Größe hat sich verändert!");
        welcomeResizer();
        getStartedResizer();
        sections.forEach(function(e) {
            //console.log(e);
            headerResizer(e);
        });
    });
    $(".welcome .more").hover(welcomeHover);
});
