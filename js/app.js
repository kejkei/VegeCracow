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
    
    
    //console.log($veganBtn, $header, $slideshow, $fixedDiv);
    
    $veganBtn.on("click", function(){
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000);
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
        
    });
    
    $vegetarianBtn.on("click", function(){
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000);
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
       
    });
    
     $friendlyBtn.on("click", function(){
        $slideshow.slideUp(2000);
        $fixedDiv.slideUp(2000);
        $menu.addClass('changeDisplay').delay(3000);
        $section.addClass('changeDisplay').delay(3000);
    });
    
      



    
});