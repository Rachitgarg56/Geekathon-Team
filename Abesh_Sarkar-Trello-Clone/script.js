const makeBoard = document.querySelector("#make-board");
const addNote = document.querySelector("#add-note");
const anotherBox = document.querySelector(".anotherBox");
const xColor = document.querySelector(".x-color");
const addBoard = document.querySelector("#add-board-btn");
const form = document.querySelector("#form");
const allData = document.querySelector(".all-data");


let addCard;
let cross;
let clickAddNote;
let noteDescrip;


addNote.addEventListener("click", ()=>{
    anotherBox.style.display = "block";
    addNote.style.display = "none";
    makeBoard.style.height = "auto"
})

xColor.addEventListener("click", ()=>{
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    makeBoard.style.height = "50px"
})


// <!----------FOR CREATING BOARDS--------->
addBoard.addEventListener("click", abc)

function abc (e) {
    e.preventDefault();
    let data = form.children[0].value;
    // data.innerHTML = "";
    form.children[0].value = "";
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    makeBoard.style.height = "50px"

    if(data === "") {
        alert("ADD A TITLE FIRST")
    } else {
        let boardContainer = document.createElement("div");
    boardContainer.classList.add("containerStyle");
    boardContainer.innerHTML = `
    <p>${data}</p>
    <div class="all-note">
        
        </div>
    <button class="add-cards">+ Add note</button>
    <form class="show-hide">
    <textarea class="note-des" placeholder="Write a note you want to add"></textarea>
                <div id="most-inner-box">
                <button class="add-brd">Add note</button>   
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


    addNewBoard()           //adding the new board to the screen
    addNewCards()           //adding the new cards to the indevidual board
    addingNotes()

    }
}


function addNewBoard () {    //function called above are made here
    addCard.forEach(element => {
        element.addEventListener("click", ()=>{
            // console.log(element.parentElement.children);
            element.parentElement.children[3].style.display = "block";
            element.style.display = "none";
        })
    });
}

function addNewCards () {     //functionscalled above are made here
    cross.forEach(ele => {
        ele.addEventListener("click", ()=>{
            // console.log(ele.parentNode.parentNode.parentElement)
            ele.parentElement.parentElement.style.display = "none";
            ele.parentNode.parentNode.parentElement.children[1].style.display = "block";
        })
    })
}

function addingNotes() {
    clickAddNote.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            let noteDescripElement = ele.parentElement.parentElement.querySelector(".note-des");
            let noteDescripValue = noteDescripElement.value;

            // Hide the textarea
            noteDescripElement.style.display = "none";

            // Create a div to display the note
            let noteBox = document.createElement("div");
            noteBox.classList.add("giveColor")
            noteBox.textContent = noteDescripValue;
            noteBox.classList.add("note-box");

            // Append the note div to the board container
            ele.parentElement.parentElement.parentElement.children[1].appendChild(noteBox);
            console.log(ele.parentElement.parentElement.parentElement)


            // Hide the "Add note" button
            ele.parentElement.style.display = "none";
            // console.log(ele.parentElement.parentElement.parentElement.children[1]);
            ele.parentElement.parentElement.parentElement.children[2].style.display = "block";
        });
    });
}






