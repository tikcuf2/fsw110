for (var i = 0; i < 5 ; i++){
    var h1 = document.createElement("h1");

    h1.textContent = "HelloWorld";  //inline java style?//
    document.body.append(h1);
    document.getElementsByTagName(h1);
    h1.style.fontSize = ("20px");
    h1.style.fontWeight = ("lighter");
    h1.style.fontFamily = ("sans-serif");
    h1.style.color = ("cornflowerblue");
  
}
    var classList = getComputedStyle(".border");

    
