// =======================================
// ACTIVE NAVIGATION LINK
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =======================================
// NAVBAR BACKGROUND ON SCROLL
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(11,17,32,0.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(15,23,42,.65)";
        header.style.boxShadow = "none";

    }

});

// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// =======================================
// TYPING EFFECT
// =======================================

const roles = [

    "Frontend Developer",
    "Java Developer",
    "AI Enthusiast",
    "IoT Developer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const roleElement = document.querySelector(".content h3");

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        roleElement.textContent =
        currentRole.substring(0,charIndex++);

        if(charIndex > currentRole.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        roleElement.textContent =
        currentRole.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:100);

}

typeEffect();

// =======================================
// CONTACT FORM VALIDATION
// =======================================

const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if(name==="" || email==="" ||
       phone==="" || subject==="" ||
       message===""){

        alert("Please fill all fields.");

        return;

    }

    const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Enter a valid email.");

        return;

    }

    if(phone.length!=10){

        alert("Phone number should contain 10 digits.");

        return;

    }

    alert("Form validated successfully!");

    // Google Apps Script code comes here

});

// =======================================
// SCROLL REVEAL ANIMATION
// =======================================

const revealElements =
document.querySelectorAll(

".about-container,.card,.project-card,#contactForm"

);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            el.style.opacity="1";

            el.style.transform="translateY(0px)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

// =======================================
// SCROLL TO TOP BUTTON
// =======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#3b82f6";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 20px rgba(59,130,246,.5)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =======================================
// CONSOLE MESSAGE
// =======================================

console.log("Portfolio Loaded Successfully 🚀");
function doPost(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.subject,
    data.message,
    new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({
      result: "success"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}