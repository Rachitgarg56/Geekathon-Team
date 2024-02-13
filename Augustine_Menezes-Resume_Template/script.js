const selectResume = document.getElementById('resumeType');

selectResume.addEventListener('change', function() {
  // Get the value of the selected option
  const selectedOption = selectResume.value;

  // Get references to the div elements
  const div1 = document.getElementById('two_container');
  const div2 = document.getElementById('minimalist_container');
  const button1 = document.getElementById('twoResumeDownload');
  const button2 = document.getElementById('minimalistDownload');

  // Show or hide divs based on selected option
  if (selectedOption === 'Two Column') {
      div1.style.display = 'block';
      div2.style.display = 'none';
      button1.style.display = 'flex';
      button2.style.display = 'none';
  } else if (selectedOption === 'Minimalist') {
      div1.style.display = 'none';
      div2.style.display = 'block';
      button2.style.display = 'flex';
      button1.style.display = 'none';
  }
});


//Download
function downloadDivAsPdf(divId) {
  // Get the div element
  const divElement = document.getElementById(divId);

  html2pdf().from(divElement).save();
  
}

// // Add click event listener for button 1
const btn1 = document.getElementById('twoResumeDownload')
const btn2 = document.getElementById('minimalistDownload')
btn1.addEventListener('click', ()=>downloadDivAsPdf("two_container"));
btn2.addEventListener('click', ()=>downloadDivAsPdf("minimalist_container"));


//input tags
const backgroundColor = document.getElementById("backColor");
const textColor = document.getElementById("textColor");
const inputName = document.getElementById("fname");
const inputEmail = document.getElementById("email");
const inputNumber = document.getElementById("number");
const inputCountry= document.getElementById("country");
const inputJob = document.getElementById("jobTitle");
const inputSummary = document.getElementById("summary");
const skills = document.getElementById("skills");

//Event Listeners added to input tags
backgroundColor.addEventListener("input",updateDetails);
textColor.addEventListener("input",updateDetails);
inputName.addEventListener("input",updateDetails);
inputEmail.addEventListener("input",updateDetails);
inputNumber.addEventListener("input",updateDetails);
inputCountry.addEventListener("input",updateDetails);
inputJob.addEventListener("input",updateDetails);
inputSummary.addEventListener("input",updateDetails);
skills.addEventListener("input",updateDetails);


//Minimilist and two column tags
const twoHeader = document.getElementById("two_header");
const miniHeader = document.getElementById("minimalist_header");
const twoName = document.getElementById("twoName");
const minimalistName = document.getElementById("minimalistName");
const twoJob = document.getElementById("twoJob");
const minimalistJob = document.getElementById("minimalistJob");
const twoSkills = document.getElementById("twoSkills");
const twoContactNumber = document.getElementById("spanNum");
const miniSpanNum = document.getElementById("miniSpanNum");
const twoContactEmail = document.getElementById("spanEmail");
const miniSpanEmail = document.getElementById("miniSpanEmail");
const twoContactCountry = document.getElementById("spanLoc");
const miniSpanLoc = document.getElementById("miniSpanLoc");
const twoSummary = document.getElementById("twoSummary");
const miniSummary = document.getElementById("miniSummary");

const rightSection = document.getElementById("miniRight");


const outputDiv1 = document.getElementById('twoSkills');
const outputDiv2 = document.getElementById('miniSkills');


function updateDetails(){
    const backColor = backgroundColor.value;
    const colorText = textColor.value;
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputNumber.value;
    const country = inputCountry.value;
    const job = inputJob.value;
    const summary = inputSummary.value;


    //Updating
    twoHeader.style.backgroundColor = backColor;
    miniHeader.style.backgroundColor = backColor;
    twoName.style.color = colorText;
    minimalistName.style.color = colorText;
    rightSection.style.color = colorText;
    twoJob.style.color = colorText;
    minimalistJob.style.color = colorText;
    twoName.innerText = name;
    minimalistName.innerText = name;
    twoContactEmail.innerText = email;
    miniSpanEmail.innerText = email;
    twoContactNumber.innerText = phone;
    miniSpanNum.innerText = phone;
    twoSummary.innerText = summary;
    miniSummary.innerText = summary;
    twoContactCountry.innerText = country;
    miniSpanLoc.innerText = country;
    twoJob.innerText = job;
    minimalistJob.innerText = job;

    
const items = skills.value.split(',').map(item => item.trim());
outputDiv1.textContent="";
outputDiv2.textContent="";
items.forEach(item => {
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span1.textContent = item;
  span2.textContent = item;
  outputDiv1.appendChild(span1);
  outputDiv2.appendChild(span2);
})
}

let profCounter = 0;

// Function to create form and details for professional section
function createProfessional() {
    const formId = `profForm_${profCounter}`;
    const divId = `profDetails_${profCounter}`;

    const form = document.createElement('form');
      form.id = formId;
    
    // Create the form
    form.innerHTML = `
      <label for="profStart_${profCounter}">Start</label>
      <input type="month" id="profStart_${profCounter}" name="startDate">
       
       <label for="profend_${profCounter}">End</label>
      <input type="month" id="profend_${profCounter}" name="endDate">
      
      <input type="text" id="profJob_${profCounter}" name="jobTitle" placeholder="Job Title">
      
      <input type="text" id="profEmployer_${profCounter}" name="employer" placeholder="Employer">
      
      <input type="text" id="profDesc_${profCounter}" name="description" placeholder="Description">
      
    `;
    
    // Append the form to the container
    document.getElementById('employForms').appendChild(form)

    //Create details section
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
      div1.id = divId;
      div2.id = divId;
      div1.classList.add("employContainer");
     div1.innerHTML = `
    <div class="employLeft">
        <div id="employJob-${profCounter}"></div>
        
        <div id="employer-${profCounter}"></div>
        
        <div id="employDesc-${profCounter}"></div>
        
    </div>
    <div class="employRight">
        <div id="employDate-${profCounter}"></div>
    </div>
    `;

    div2.classList.add("employContainer");
     div2.innerHTML = `
    <div class="employLeft">
        <div id="miniemployJob-${profCounter}"></div>
        
        <div id="miniemployer-${profCounter}"></div>
        
        <div id="miniemployDesc-${profCounter}"></div>
        
    </div>
    <div class="employRight">
        <div id="miniemployDate-${profCounter}"></div>
    </div>
    `;

    document.getElementById('employerList').appendChild(div1)
    document.getElementById('miniEmployerList').appendChild(div2)

    // Increment the form counter
    profCounter++;
  }

  function handleProfInput(event){
    const targetId = event.target.id;
    const id = parseInt(targetId.split('_')[1]);
    // console.log(id);
    const start = document.getElementById(`profStart_${id}`).value;
    const end = document.getElementById(`profend_${id}`).value;
    const job = document.getElementById(`profJob_${id}`).value;
    const employer = document.getElementById(`profEmployer_${id}`).value;
    const desc = document.getElementById(`profDesc_${id}`).value;

    const formattedStart = start === "" ? "" : new Date(start).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');
    const formattedEnd = end === "" ? "" : new Date(end).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');

    document.getElementById(`employJob-${id}`).innerText = "• "+job;
    document.getElementById(`miniemployJob-${id}`).innerText = "• "+job;
    document.getElementById(`employer-${id}`).innerText = employer;
    document.getElementById(`miniemployer-${id}`).innerText = employer;
    document.getElementById(`employDesc-${id}`).innerText = desc;
    document.getElementById(`miniemployDesc-${id}`).innerText = desc;
    document.getElementById(`employDate-${id}`).innerText = formattedStart+" - "+formattedEnd;
    document.getElementById(`miniemployDate-${id}`).innerText = formattedStart+" - "+formattedEnd;

  }

  let projCounter = 0;

// Function to create form and details for prokect section
function createProject() {
    const formId = `projForm_${projCounter}`;
    const divId = `projDetails_${projCounter}`;

    const form = document.createElement('form');
      form.id = formId;
    
    // Create the form
    form.innerHTML = `
      <label for="projStart_${projCounter}">Start</label>
      <input type="month" id="projStart_${projCounter}" name="startDate">
       
       <label for="projend_${projCounter}">End</label>
      <input type="month" id="projend_${projCounter}" name="endDate">
      
      <input type="text" id="projTitle_${projCounter}" name="projTitle" placeholder="Project Title">
      
      <input type="text" id="projDesc_${projCounter}" name="description" placeholder="Description">
      
    `;
    
    // Append the form to the container
    document.getElementById('projectForms').appendChild(form)

    //Create details section
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
      div1.id = divId;
      div2.id = divId;
      div1.classList.add("projectContainer");
      div1.innerHTML = `
    <div class="projectLeft">
        <div id="projectTitle-${projCounter}"></div>
        
        <div id="projectDesc-${projCounter}"></div>
        
    </div>
    <div class="projectRight">
        <div id="projectDate-${projCounter}"></div>
    </div>
    `;

    div2.classList.add("projectContainer");
      div2.innerHTML = `
    <div class="projectLeft">
        <div id="miniprojectTitle-${projCounter}"></div>
        
        <div id="miniprojectDesc-${projCounter}"></div>
        
    </div>
    <div class="projectRight">
        <div id="miniprojectDate-${projCounter}"></div>
    </div>
    `;

    document.getElementById('projectList').appendChild(div1)
    document.getElementById('miniProjectList').appendChild(div2)

    // Increment the form counter
    projCounter++;
  }

  function handleProjInput(event){
    const targetId = event.target.id;
    const id = parseInt(targetId.split('_')[1]);
    console.log(id);
    const start = document.getElementById(`projStart_${id}`).value;
    const end = document.getElementById(`projend_${id}`).value;
    const title = document.getElementById(`projTitle_${id}`).value;
    const desc = document.getElementById(`projDesc_${id}`).value;

    const formattedStart = start === "" ? "" : new Date(start).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');
    const formattedEnd = end === "" ? "" : new Date(end).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');

    document.getElementById(`projectTitle-${id}`).innerText = "• "+title;
    document.getElementById(`miniprojectTitle-${id}`).innerText = "• "+title;
    document.getElementById(`projectDesc-${id}`).innerText = desc;
    document.getElementById(`miniprojectDesc-${id}`).innerText = desc;
    document.getElementById(`projectDate-${id}`).innerText = formattedStart+" - "+formattedEnd;
    document.getElementById(`miniprojectDate-${id}`).innerText = formattedStart+" - "+formattedEnd;

  }

  let edCounter = 0;

// Function to create form and details for professional section
function createEducation() {
    const formId = `edForm_${edCounter}`;
    const divId = `edDetails_${edCounter}`;

    const form = document.createElement('form');
      form.id = formId;
    
    // Create the form
    form.innerHTML = `
      <label for="edStart_${edCounter}">Start</label>
      <input type="month" id="edStart_${edCounter}" name="startDate">
       
       <label for="edend_${edCounter}">Start</label>
      <input type="month" id="edend_${edCounter}" name="endDate">
      
      <input type="text" id="edQual_${edCounter}" name="QualTitle" placeholder="Qualification">
      
      <input type="text" id="edschool_${edCounter}" name="school" placeholder="School/College">
      
      <input type="text" id="edDesc_${edCounter}" name="description" placeholder="Description">
      
    `;
    
    // Append the form to the container
    document.getElementById('educationForms').appendChild(form)

    //Create details section
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
      div1.id = divId;
      div2.id = divId;
      div1.classList.add("qualificationContainer");
     div1.innerHTML = `
    <div class="qualificationLeft">
        <div id="qualificationTitle-${edCounter}"></div>
        
        <div id="qualificationSchool-${edCounter}"></div>
        
        <div id="qualificationDesc-${edCounter}"></div>
        
    </div>
    <div class="qualificationRight">
        <div id="qualificationDate-${edCounter}"></div>
    </div>
    `;

    div2.classList.add("qualificationContainer");
    div2.innerHTML = `
   <div class="qualificationLeft">
       <div id="miniqualificationTitle-${edCounter}"></div>
       
       <div id="miniqualificationSchool-${edCounter}"></div>
       
       <div id="miniqualificationDesc-${edCounter}"></div>
       
   </div>
   <div class="qualificationRight">
       <div id="miniqualificationDate-${edCounter}"></div>
   </div>
   `;

    document.getElementById('qualificationerList').appendChild(div1)
    document.getElementById('miniQualificationerList').appendChild(div2)

    // Increment the form counter
    edCounter++;
  }

  function handleEdInput(event){
    const targetId = event.target.id;
    const id = parseInt(targetId.split('_')[1]);
    console.log(id);
    const start = document.getElementById(`edStart_${id}`).value;
    const end = document.getElementById(`edend_${id}`).value;
    const qual = document.getElementById(`edQual_${id}`).value;
    const school = document.getElementById(`edschool_${id}`).value;
    const desc = document.getElementById(`edDesc_${id}`).value;

    const formattedStart = start === "" ? "" : new Date(start).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');
    const formattedEnd = end === "" ? "" : new Date(end).toLocaleString('en', { year: 'numeric', month: '2-digit' }).replace(/\//g, '-');

    document.getElementById(`qualificationTitle-${id}`).innerText = "• "+qual;
    document.getElementById(`miniqualificationTitle-${id}`).innerText = "• "+qual;
    document.getElementById(`qualificationSchool-${id}`).innerText = school;
    document.getElementById(`miniqualificationSchool-${id}`).innerText = school;
    document.getElementById(`qualificationDesc-${id}`).innerText = desc;
    document.getElementById(`miniqualificationDesc-${id}`).innerText = desc;
    document.getElementById(`qualificationDate-${id}`).innerText = formattedStart+" - "+formattedEnd;
    document.getElementById(`miniqualificationDate-${id}`).innerText = formattedStart+" - "+formattedEnd;

  }


  document.getElementById('addEmployment').addEventListener('click', createProfessional);

  document.getElementById('employForms').addEventListener('input', handleProfInput);

  document.getElementById('addProject').addEventListener('click', createProject);

  document.getElementById('projectForms').addEventListener('input', handleProjInput);

  document.getElementById('addEducation').addEventListener('click', createEducation);

  document.getElementById('educationForms').addEventListener('input', handleEdInput);