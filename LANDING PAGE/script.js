const scriptURL = "https://script.google.com/macros/s/AKfycbyzLy3bLZHHukNf74rD5jWwZUm3BvfG1OO_3nqbmqeRpgJpNoRXnjQY1FsN7HI1vsxL/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        if(response.ok){

            alert("Thank you! Your details have been submitted.");

            form.reset();

        }else{

            alert("Submission Failed.");

        }

    } catch(error){

        alert("Error : " + error);

    }

});
