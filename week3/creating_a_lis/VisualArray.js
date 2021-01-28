/*

1. Create a new directory with an html and js file, then link them together.
2. Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website)
3. Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.
4. Add some style to the H1's in Step 3.
5. Create a new array using the following information:

 

const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”]


6. Create a for loop that iterates through the array in Step 5.

*/




for (var i = 0; i < 10; i++ ){
    var h1 = document.createElement("h1");

    h1.textContent = "HelloWorld";
    document.body.append(h1);
    document.getElementsByTagName(h1);
    h1.style.color = ('green')
    

    
}

   



    var namesFsw = [
        "steve",
        "larry",
        "joe",
        "shirley",
        "steph",
        "nate",
        "rick",
        "emily",
    ]

    var namesList = document.getElementById("names")

    for (var i = 0; i < namesFsw.length; i++) {
        namesList.innerHTML += "<li>" + namesFsw[i] + "</li>"
    }

    




















0