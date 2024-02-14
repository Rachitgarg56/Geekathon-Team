const makeBoard = document.querySelector("#make-board");
const addNote = document.querySelector("#add-note");      //1st click in the page
const anotherBox = document.querySelector(".anotherBox");
const xColor = document.querySelector(".x-color");
const addBoard = document.querySelector("#add-board-btn");   //2nd click here, to add the board
const form = document.querySelector("#form");
const allData = document.querySelector(".all-data");

const alertBox = document.querySelector(".alert-box");


let addCard;
let cross;
let clickAddNote;
let noteDescrip;
let deleteNote;
let deleteBoard;

let giveColor;   //for fetching the each and every note, class  name is little irrelivant

addNote.addEventListener("click", () => {
    anotherBox.style.display = "block";
    addNote.style.display = "none";
    makeBoard.style.height = "auto"
})
xColor.addEventListener("click", () => {
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    // makeBoard.style.height = "50px"
})
// <!----------FOR CREATING BOARDS--------->
addBoard.addEventListener("click", abc)

function abc(e) {
    e.preventDefault();

    //Get the input value from the 2nd click, which is Board-title
    let data = form.children[0].value;

    form.children[0].value = "";
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    // makeBoard.style.height = "50px"
    if (data === "") {
        alertBox.style.top = "1.5%";
    } else {

        let boardContainer = document.createElement("div");   //boardContainer DIV WILL APPAND WITH ALLDATA div
        boardContainer.classList.add("containerStyle");
        boardContainer.classList.add("container");
        boardContainer.innerHTML = `
    <div class="board-head">
    <p class="get-title">${data}</p>
    <i class="fa-solid fa-trash delete-brd"></i></div>
    <div class='all-note'>

    </div>
    <button class="add-cards">+ Add note</button>
    <form class="show-hide container"> 
    <textarea class="note-des" placeholder="Write a note you want to add"></textarea>
                <div id="most-inner-box">
                <button class="add-brd">Add text</button>
                <i class="fa-solid fa-x x-color cross"></i>
                </div>
    </form>
    `
        allData.appendChild(boardContainer);
        addCard = document.querySelectorAll(".add-cards")
        // console.log(addCard);
        cross = document.querySelectorAll(".cross");
        // console.log(cross);
        clickAddNote = document.querySelectorAll(".add-brd"); //Click Here to Show Note You Are Trying To Add
        noteDescrip = document.querySelectorAll(".note-des");
        // deleteBoard = document.querySelectorAll(".delete-brd");   //To delete one entire board
    }
}


allData.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-cards")) {
        let addCardBtn = event.target;
        let parentDiv = addCardBtn.closest(".containerStyle");
        let noteForm = parentDiv.querySelector(".show-hide");
        addCardBtn.style.display = "none";
        noteForm.style.display = "block";
    }

    if (event.target.classList.contains("cross")) {
        let crossBtn = event.target;
        let parentDiv = crossBtn.closest(".containerStyle");
        let noteForm = parentDiv.querySelector(".show-hide");
        // crossBtn.style.display = "none";
        noteForm.style.display = "none";
        parentDiv.querySelector(".add-cards").style.display = "block";
    }

    if (event.target.classList.contains("add-brd")) {
        event.preventDefault();
      
        let noteDescripElement = event.target.parentElement.previousElementSibling;
       
        let noteDescripValue = noteDescripElement.value;
        
        let noteBox = document.createElement("div");
        noteBox.innerHTML = `
            <button class="delete-note"><i class="fa-solid fa-delete-left"></i></button>
            <span>${noteDescripValue}</p>
            `
        noteBox.classList.add("giveColor")
        noteBox.classList.add("draggable")
        noteBox.setAttribute("draggable", "true");

        event.target.parentElement.parentElement.parentElement.children[1].appendChild(noteBox);
        
        event.target.parentElement.parentElement.style.display = "none";
       
        event.target.parentElement.parentElement.parentElement.children[2].style.display = "block";
        event.target.parentElement.parentElement.children[0].value = "";


        noteBox.addEventListener('dragstart', () => {
            noteBox.classList.add('dragging');
        });
        noteBox.addEventListener('dragend', () => {
            noteBox.classList.remove('dragging');
        });
    }


    if (event.target.classList.contains("fa-delete-left")) {

        event.target.parentElement.parentElement.remove();
    };


    if (event.target.classList.contains("delete-brd")) {
        event.target.parentElement.parentElement.remove();
    }
})




let dragged;

const dragStartHandler = (e) => {
    if(e.target.classList.contains("draggable")){
        console.log("dragging")
        dragged = e.target;
    }
}

const dropHandler = (e) => {
    e.preventDefault();
    if(e.target.classList.contains("all-note")){
        // console.log("drop")
        e.target.appendChild(dragged);
    }
}

const dragOverHandler = (e) => {
    e.preventDefault();
}

allData.addEventListener("dragstart",dragStartHandler);

allData.addEventListener("drop",dropHandler);

allData.addEventListener("dragover",dragOverHandler);



window.addEventListener("click", (e)=>{
    console.log(e);
    if(!e.target.classList.contains("alert-box") && e.target.id !== "add-board-btn"){
        alertBox.style.top = "-50rem";
    }
})



