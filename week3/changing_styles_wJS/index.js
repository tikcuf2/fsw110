for (var i = 0; i < 5 ; i++){
    var al = document.createElement("h1");

    al.textContent = "HelloWorld"; 
    al.style.fontSize = "20px";
    al.style.fontWeight = "lighter";
    al.style.fontFamily = "sans-serif";
    al.style.color = "cornflowerblue";
    al.classList.add("border");
    document.body.appendChild(al);
}
    
