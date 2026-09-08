/* ========================================
   SCROLL ANIMATIONS
======================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


/* ========================================
   HERO JOIN BUTTON
======================================== */

const joinButton = document.getElementById("joinButton");

joinButton.addEventListener("click", () => {

    document.getElementById("plans").scrollIntoView({
        behavior: "smooth"
    });

});


/* ========================================
   GET MEMBERSHIP BUTTONS
======================================== */

const basicButton = document.getElementById("basicStart");
const standardButton = document.getElementById("standardStart");
const premiumButton = document.getElementById("premiumStart");

const planSelect = document.getElementById("selectedPlan");


/* ========================================
   CONTACT FORM
======================================== */

const messageButton = document.getElementById("messageButton");
const contactForm = document.getElementById("contactForm");


function openContactForm() {

    contactForm.classList.add("show-form");

    messageButton.textContent = "Close Form";

}


/* ========================================
   SELECT MEMBERSHIP PLAN
======================================== */

function choosePlan(planName) {

    // Automatically select chosen plan
    planSelect.value = planName;

    // Open contact form
    openContactForm();

    // Scroll to contact section
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}


basicButton.addEventListener("click", () => {
    choosePlan("Basic");
});


standardButton.addEventListener("click", () => {
    choosePlan("Standard");
});


premiumButton.addEventListener("click", () => {
    choosePlan("Premium");
});


/* ========================================
   OPEN / CLOSE CONTACT FORM
======================================== */

messageButton.addEventListener("click", () => {

    contactForm.classList.toggle("show-form");


    if (contactForm.classList.contains("show-form")) {

        messageButton.textContent = "Close Form";

    } else {

        messageButton.textContent = "Send a Message";

    }

});


/* ========================================
   WHATSAPP FORM SUBMISSION
======================================== */

contactForm.addEventListener("submit", (event) => {

    // Prevent normal form submission
    event.preventDefault();


    // Get values entered by customer

    const name = document.getElementById("nameInput").value.trim();

    const email = document.getElementById("emailInput").value.trim();

    const phone = document.getElementById("phoneInput").value.trim();

    const plan = document.getElementById("selectedPlan").value;

    const message = document.getElementById("messageInput").value.trim();


    /* ====================================
       OWNER WHATSAPP NUMBER
       
       Replace this with real owner's number.
       
       Indian number format:
       91 + 10 digit number
       
       NO + sign
       NO spaces
       NO dashes
    ==================================== */

    const ownerNumber = "919555438889";


    /* ====================================
       CREATE WHATSAPP MESSAGE
    ==================================== */

    const whatsappMessage =
`Hello IronCore Fitness!

I am interested in joining the gym.

Name: ${name}
Email: ${email}
Phone: ${phone}
Membership Plan: ${plan || "Not selected"}

Message:
${message}`;


    /* ====================================
       CREATE WHATSAPP LINK
    ==================================== */

    const whatsappURL =
        `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    /* ====================================
       OPEN WHATSAPP
    ==================================== */

    window.location.href = whatsappURL;

});