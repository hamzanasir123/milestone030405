// import { jsPDF } from "jspdf";
var form = document.getElementById("form");
var resume = document.getElementById("resume");
var skillsSection = document.getElementById('skills-section');
var img = document.getElementById("userimg");
var userImg = document.getElementById("img");
var myName = document.getElementById('fName');
var userName = document.getElementById('firstName');
var lastName = document.getElementById('lName');
var userLastName = document.getElementById('lastName');
var userDesignation = document.getElementById('userDesignation');
var designation = document.getElementById('designation');
var userAboutMe = document.getElementById('useraboutme');
var aboutMe = document.getElementById('aboutme');
var userAddress = document.getElementById('useraddress');
var address = document.getElementById('address');
var userMobileNo = document.getElementById('usermobileno');
var mobileNo = document.getElementById('mobileno');
var userHomeNo = document.getElementById('userhomeno');
var homeNo = document.getElementById('homeno');
var userEmail = document.getElementById('useremail');
var email = document.getElementById('email');
var userGraduate = document.getElementById('usergraduation');
var graduate = document.getElementById('graduation');
var userIntermadiate = document.getElementById('userintermadiate');
var intermadiate = document.getElementById('intermadiate');
var userMatric = document.getElementById('usermatric');
var matric = document.getElementById('matric');
var userExperience = document.getElementById('userexperience');
var experience = document.getElementById('experience');
var editButton = document.getElementById("editResume");
var saveButton = document.getElementById("saveResume");
var downloadButton = document.getElementById("downloadResume");
var generateLinkButton = document.getElementById("generateLink");
var shareLinkDiv = document.getElementById("shareLink");
var resumeLink = document.getElementById("resumeLink");
var skillsDisplay = document.getElementById("skillsDisplay");
var skillCheckboxes = [
    document.getElementById("skills1"),
    document.getElementById("skills2"),
    document.getElementById("skills3"),
    document.getElementById("skills4"),
    document.getElementById("skills5"),
    document.getElementById("skills6")
];
form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.style.display = 'none';
    resume.style.display = "block";
    skillsSection.style.display = 'none';
    var enteredName = userName.value;
    myName.textContent = enteredName;
    var enteredLastName = userLastName.value;
    lastName.textContent = enteredLastName;
    var enteredDesignation = userDesignation.value;
    designation.textContent = enteredDesignation;
    var enteredAboutMe = userAboutMe.value;
    aboutMe.textContent = enteredAboutMe;
    var enteredAddress = userAddress.value;
    address.textContent = enteredAddress;
    var enteredMobileNo = userMobileNo.value;
    mobileNo.textContent = enteredMobileNo;
    var enteredHomeNo = userHomeNo.value;
    homeNo.textContent = enteredHomeNo;
    var enterdEmail = userEmail.value;
    email.textContent = enterdEmail;
    var enteredGraduated = userGraduate.value;
    graduate.textContent = enteredGraduated;
    var enterdIntermadiate = userIntermadiate.value;
    intermadiate.textContent = enterdIntermadiate;
    var enteredMatric = userMatric.value;
    matric.textContent = enteredMatric;
    var enteredExperience = userExperience.value;
    experience.textContent = enteredExperience.length > 0 ? enteredExperience : "No Experience Provided";
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
        var uniqueID = Date.now();
        var url = "https://username.vercel.app/resume?id=".concat(uniqueID);
        shareLinkDiv.classList.remove("hidden");
        resumeLink.href = url;
        resumeLink.textContent = url;
    });
    var file = img.files ? img.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            userImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
    skillCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            var skillLine = document.createElement('p');
            skillLine.textContent = checkbox.value;
            skillsDisplay.appendChild(skillLine);
        }
    });
    if (skillsDisplay.innerHTML === '') {
        skillsDisplay.textContent = 'No Skills Selected';
    }
    // downloadButton.addEventListener("click", function () {
    //     const doc = new jsPDF();
    //     doc.setFontSize(22);
    //     doc.text("Resume", 20, 20);
    //     doc.setFontSize(16);
    //     doc.text("Name: " + myName.textContent, 20, 40);
    //     doc.text("Experience: " + experience.textContent, 20, 60);
    //     doc.save("resume.pdf");
    // });
});
