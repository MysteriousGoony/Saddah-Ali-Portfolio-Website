//all elements 
const openMenuIcon = document.getElementById('open-menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');
const SideNavigation = document.querySelector('.rsp-side-navigation');

//End of element list 

SideNavigation.style.transition = "opacity 0.5s ease, transform 0.1s ease";

//Closing the menu icon and Side Nav when the page loads
closeMenuIcon.style.display = "none";
SideNavigation.style.opacity = "0";
SideNavigation.style.visibility = "hidden";
SideNavigation.style.transform = "translateY(25%)";

//Now we are going to open the menu using an function based type
let isMenuOpen = false;

function openmenu () {
    isMenuOpen = true;
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
    SideNavigation.style.opacity = "1";
    SideNavigation.style.visibility = "visible";
    SideNavigation.style.transform = "translateY(0%)";
}

//Another function to close the menu and display none from the side nav and close icon
function closemenu () {
    isMenuOpen = false;
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
    SideNavigation.style.visibility = "hidden";
    SideNavigation.style.opacity = "0";
    SideNavigation.style.transform = "translateY(15%)";
}

openMenuIcon.addEventListener('click',openmenu);
closeMenuIcon.addEventListener('click',closemenu);

function reset() {
   if (window.innerWidth > 768) {
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "none";
   } else {
    if (isMenuOpen) {
        openMenuIcon.style.display = "none";
        closeMenuIcon.style.display = "block";
        
    }
    else {
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
    
    }

   }
}

window.addEventListener('resize', reset);
reset();

//End of Icons and Side Nav interactivity// 


//Fixing side nav not closing when clicking links 

const NavigationLinks = SideNavigation.querySelectorAll('a');

NavigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            closemenu();
        }
        else {
            openmenu();
        }
    });
})

//Fixed//
//End//



//Doing all the javascripts on the form - email,date, and submit message
            document
  .getElementById("contactForm")
  .addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll("input");
  const textarea = form.querySelector("textarea");

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const confirmEmail = inputs[2].value.trim();
  const dateValue = inputs[3].value;
  const duration = inputs[4].value;
  const subject = inputs[5].value.trim();
  const message = textarea.value.trim();

  const contactMethod = form.querySelector(
    'input[name="contact_method"]:checked'
  )?.value;

  if (!checkEmails(email, confirmEmail)) return;
  if (!checkDate(dateValue)) return;


  //pop up message when pressing the submitting button
   const summary = `
   Please confirm your enquiry:

   Name: ${name}
    Email: ${email}
   Preferred Contact Method: ${contactMethod}
    Start Date: ${dateValue}
   Project Duration: ${duration} days
   Subject: ${subject}

    Message:
    ${message}

     This enquiry will be sent to:
    250138100@aston.ac.uk`;

  const confirmed = confirm(summary);

  if (confirmed) {
    alert("Thank you! Your enquiry has been recorded. (No email was sent)");
    form.reset();
  }
}

//end of pop up message when pressing the submitting button


//Check email if they match 
function checkEmails(email, confirmEmail) {
  if (email !== confirmEmail) {
    alert("Emails do not match.");
    return false;
  }
  return true;
}

//Check Date, if correctly
function checkDate(dateValue) {
  const selectedDate = new Date(dateValue);
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (selectedDate < tomorrow) {
    alert("Please select a date at least 1 day in the future.");
    return false;
  }
  return true;
}

//End//


