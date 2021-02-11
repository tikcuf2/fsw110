var title = document.getElementById('title');
    title.textContent = 'Big and Tall, or Thin and Small... We Have It All !'

    title.classList.add("title");

  



    var button = document.getElementById("click");


    function submitForm(){
        document.getElementById('form')[0];
        form.click();
        form.reset();
        return false;
        
    }
    
    const form = document.form;
form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert
    (`
    Shirt Size: ${form.Shirt.value} 
    Shoe Size: ${form.Shoes.value}
    Pant Size: ${form.Pants.value}
   `);
    })
       
 


    