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
    
    form.addEventListener("click", (event) => {
        event.preventDefault()
        alert
        (`
            Your Shirt Size is : ${form.Shirt.value}
            Your Pant Size is : ${form.pants.value}
            Your Shoe Size is : ${form.Shoe.value}`);
       
    })


    