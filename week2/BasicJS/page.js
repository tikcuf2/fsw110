var a = document.createElement('a');  
var link = document.createTextNode("Home");
a.appendChild(link);  
a.href = "";  
document.body.appendChild(a);


var a = document.createElement('a');  
var link = document.createTextNode("mobile");
a.appendChild(link);  
a.href = "";  
document.body.appendChild(a);
a.style.padding = '20px'; 

var a = document.createElement('a');  
var link = document.createTextNode("contact");
a.appendChild(link);  
a.href = "";  
document.body.appendChild(a);




var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
document.body.append(newh1)


var newP = document.createElement("P")
newP. textContent = "All this was created with Javascript"
document.body.append(newP)



var newOl = document.createElement("ol")
newOl.textContent = "JS list"
document.body.append(newOl)

var lId = document.createElement("li")
lId.textContent = "Li One"
newOl.append(lId)


var lId = document.createElement("li")
lId.textContent = "Li two"
newOl.append(lId)

var lId = document.createElement("li")
lId.textContent = "Li Three"
newOl.append(lId)

var footer = document.createElement("footer")
footer.textContent = "© footer "
document.body.append(footer)