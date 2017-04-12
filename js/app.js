$(function(){
    console.log("dom");
    
 
//adding a 'on click' to the vegan/vegetarian/friendly buttons
    
    
    var $slideshow = $(".cb-slideshow");
    var $fixedDiv = $(".fixed");
    var $menu = $("section").find(".menu");
    
    var $veganBtn = $(".vegan").find("img");
    var $vegetarianBtn = $('.vegetarian').find("img");
    var $friendlyBtn = $('.friendly').find("img");
    var $section = $("section");
    var $map = $("#map");
    
    
    //console.log($veganBtn, $header, $slideshow, $fixedDiv);
    
    $veganBtn.on("click", function(){
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000, function(){
            $map.removeClass("no-display");
            initMap();
        });
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
        
    });
    
    $vegetarianBtn.on("click", function(){
        $map.removeClass("no-display").delay(2000);
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000, function(){
            initMap();
        });
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
       
    });
    
     $friendlyBtn.on("click", function(){
        $map.removeClass("no-display").delay(2000);
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000, function(){
            initMap();
        });
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
    });
    
      

var placesUrl = "data.json";
var itemsLoading = $(".loading");

    function insertContent(places){
        $.each(places, function(index, content){    
        
        
        
        var $div = $("<div>").addClass("item");
        var $title = $("<h3>").text(content.name);
        var $address = $("<h4>").text(content.address);
        var $image = $("<img>").attr("src", "img/" + content.image);
        var $desc = $("<p>").text(content.desc);
            
        $div.append($title).append($address).append($image).append($desc);
       
        itemsLoading.append($div);
 
            
        });
        
    }

function loading(){  
    $.ajax({
        url: placesUrl,
        type: "GET",
        dataType: "json",
        }).done(function(response){ 
        console.log(response.places);
        insertContent(response.places);
        }).fail(function(error){ 
        console.log(error)
    });  
    
 }
loading();


    
});