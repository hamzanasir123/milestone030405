// import { jsPDF } from "jspdf";
const form = document.getElementById("form") as HTMLFormElement;
const resume = document.getElementById("resume") as HTMLDivElement;

const skillsSection = document.getElementById('skills-section') as HTMLElement;

const img = document.getElementById("userimg") as HTMLInputElement;
const userImg = document.getElementById("img") as HTMLImageElement;

const myName = document.getElementById('fName') as HTMLSpanElement;
const userName = document.getElementById('firstName') as HTMLInputElement;

const lastName = document.getElementById('lName') as HTMLSpanElement;
const userLastName = document.getElementById('lastName') as HTMLInputElement;

const userDesignation = document.getElementById('userDesignation') as HTMLInputElement;
const designation = document.getElementById('designation') as HTMLSpanElement;

const userAboutMe = document.getElementById('useraboutme') as HTMLInputElement;
const aboutMe = document.getElementById('aboutme') as HTMLSpanElement;

const userAddress = document.getElementById('useraddress') as HTMLInputElement;
const address = document.getElementById('address') as HTMLSpanElement;

const userMobileNo = document.getElementById('usermobileno') as HTMLInputElement;
const mobileNo = document.getElementById('mobileno') as HTMLSpanElement;

const userHomeNo = document.getElementById('userhomeno') as HTMLInputElement;
const homeNo = document.getElementById('homeno') as HTMLSpanElement;

const userEmail = document.getElementById('useremail') as HTMLInputElement;
const email = document.getElementById('email') as HTMLSpanElement;

const userGraduate = document.getElementById('usergraduation') as HTMLInputElement;
const graduate = document.getElementById('graduation') as HTMLSpanElement;

const userIntermadiate = document.getElementById('userintermadiate') as HTMLInputElement;
const intermadiate = document.getElementById('intermadiate') as HTMLSpanElement;

const userMatric = document.getElementById('usermatric') as HTMLInputElement;
const matric = document.getElementById('matric') as HTMLSpanElement;

const userExperience = document.getElementById('userexperience') as HTMLInputElement;
const experience = document.getElementById('experience') as HTMLSpanElement;

const editButton = document.getElementById("editResume") as HTMLButtonElement;
const saveButton = document.getElementById("saveResume") as HTMLButtonElement;

const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
const generateLinkButton = document.getElementById("generateLink") as HTMLButtonElement;
    const shareLinkDiv = document.getElementById("shareLink") as HTMLDivElement;
    const resumeLink = document.getElementById("resumeLink") as HTMLAnchorElement;
    
    const skillsDisplay = document.getElementById("skillsDisplay") as HTMLSpanElement;

const skillCheckboxes = [
    document.getElementById("skills1") as HTMLInputElement,
    document.getElementById("skills2") as HTMLInputElement,
    document.getElementById("skills3") as HTMLInputElement,
    document.getElementById("skills4") as HTMLInputElement,
    document.getElementById("skills5") as HTMLInputElement,
    document.getElementById("skills6") as HTMLInputElement
];

form.addEventListener("submit", function (event: Event) {
    event.preventDefault();

form.style.display = 'none';
resume.style.display = "block";
skillsSection.style.display = 'none';

const enteredName = userName.value;
myName.textContent = enteredName;

const enteredLastName = userLastName.value;
lastName.textContent = enteredLastName;

const enteredDesignation = userDesignation.value;
designation.textContent = enteredDesignation;

const enteredAboutMe = userAboutMe.value;
aboutMe.textContent = enteredAboutMe;

const enteredAddress = userAddress.value;
address.textContent = enteredAddress;

const enteredMobileNo = userMobileNo.value;
mobileNo.textContent = enteredMobileNo;

const enteredHomeNo = userHomeNo.value;
homeNo.textContent = enteredHomeNo;

const enterdEmail = userEmail.value;
email.textContent = enterdEmail;

const enteredGraduated = userGraduate.value;
graduate.textContent = enteredGraduated;

const enterdIntermadiate = userIntermadiate.value;
intermadiate.textContent = enterdIntermadiate;

const enteredMatric = userMatric.value;
matric.textContent = enteredMatric;

const enteredExperience = userExperience.value;
experience.textContent = enteredExperience.length > 0 ? enteredExperience : "No Experience Provided";

const file = img.files ? img.files[0] : null;

if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        userImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
}

skillCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        const skillLine = document.createElement('p');
        skillLine.textContent = checkbox.value;
        skillsDisplay.appendChild(skillLine);
    }
});

if (skillsDisplay.innerHTML === '') {
    skillsDisplay.textContent = 'No Skills Selected';
}

editButton.addEventListener("click", function () {
    
    aboutMe.contentEditable = "true";
    address.contentEditable = "true";
    experience.contentEditable = "true";
    email.contentEditable = "true";
    homeNo.contentEditable = "true";
    mobileNo.contentEditable = "true";

   
    editButton.classList.add("hidden");
    saveButton.classList.remove("hidden");
});

saveButton.addEventListener("click", function () {
    aboutMe.contentEditable = "false";
    address.contentEditable = "false";
    experience.contentEditable = "false";
    email.contentEditable = "false";
    homeNo.contentEditable = "false";
    mobileNo.contentEditable = "fasle";

   
    saveButton.classList.add("hidden");
    editButton.classList.remove("hidden");

   
    alert("Resume changes saved!");
});

generateLinkButton.addEventListener("click", function () {
    
    const uniqueID = Date.now(); 
    const url = `https://username.vercel.app/resume?id=${uniqueID}`;
    shareLinkDiv.classList.remove("hidden");
    resumeLink.href = url;
    resumeLink.textContent = url;
});

})

// downloadButton.addEventListener("click", function () {
//     const doc = new jsPDF();

    
//     doc.setFontSize(22);
//     doc.text("Resume", 20, 20);
//     doc.setFontSize(16);
//     doc.text("Name: " + myName.textContent, 20, 40);
//     doc.text("Experience: " + experience.textContent, 20, 60);
//     doc.save("resume.pdf");
// });
