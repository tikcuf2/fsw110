var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
document.body.prepend(newh1)


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
