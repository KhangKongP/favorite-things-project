 $(document).ready(function () {
    
    //remove stuff out body
    $("body p").remove();
    var imgbool = "false";
    
    let headingDiv = "<div class='heading'><h1>Favorite Things</h1></div>";
    $("body").append(headingDiv);
    
      $.getJSON("data/FavoriteThings.json", function(data) {
      let myData = data.FavoriteThings;
      createPage(myData);
      console.log(imgbool);
        $("#menu h3").on("click", function() {
          console.log(imgbool);
          if (imgbool == "false"){
            clickedType = $(this).contents().filter(function() {
                return this.nodeType == 3
              }).text();
              $(this).siblings().toggle();
              imgbool = createImage(imgbool, myData);
              $("img").on("click", function(){
                $(this).siblings("p").toggle();
              })
            }
          else {
           console.log("clicked");
           $(this).siblings().toggle();
           $(".col-4").remove();
           imgbool = "false";
         }
       })
    })
    
});
    function createPage(favArrays){
        htmlCode = "<div id='menu', class='col-3 menu'>";
        previous = "";
        $.each(favArrays, function(index){
            let type = favArrays[index].type;
            let favType = type;
           if (favType != previous){
            htmlCode += "<h3>" + favType + "</h3>";
           }
          previous = favType;
            
        })
        
        htmlCode +="</div>";
        $("body").append(htmlCode);
    }
    
    function createImage(imgbool, favArrays){
        imgbool = "true";
        htmlCode = "<div class='col-4'>";
        
        $.each(favArrays, function(index){
            let favType = favArrays[index].type;
            let type = clickedType;
           if (favType == type){
            let nameText = favArrays[index].text;
            let favName = favArrays[index].name;
            let imgSrc = favArrays[index].image;
            htmlCode += "<h2>" + favName + "</h2>" + "<img src='" + imgSrc + "'/img>" + "<p>" + nameText + "</p>";
            $("body").append(htmlCode);
            $("p").hide();
            htmlCode = "<div class='col-4'>";
            }
        })
        
         return imgbool;
    }
    
