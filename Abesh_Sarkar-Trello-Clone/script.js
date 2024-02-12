const makeBoard = document.querySelector("#make-board");
const addNote = document.querySelector("#add-note");      //1st click in the page
const anotherBox = document.querySelector(".anotherBox");
const xColor = document.querySelector(".x-color");
const addBoard = document.querySelector("#add-board-btn");   //2nd click here, to add the board
const form = document.querySelector("#form");
const allData = document.querySelector(".all-data");

let addCard;
let cross;
let clickAddNote;
let noteDescrip;
let deleteNote;
let deleteBoard;

addNote.addEventListener("click", ()=>{
    anotherBox.style.display = "block";
    addNote.style.display = "none";
    makeBoard.style.height = "auto"
})
xColor.addEventListener("click", ()=>{
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    // makeBoard.style.height = "50px"
})
// <!----------FOR CREATING BOARDS--------->
addBoard.addEventListener("click", abc)

function abc (e) {
    e.preventDefault();

    //Get the input value from the 2nd click, which is Board-title
    let data = form.children[0].value;     
   
    form.children[0].value = "";
    anotherBox.style.display = "none";
    addNote.style.display = "block";
    // makeBoard.style.height = "50px"
    if(data === "") {
        alert("ADD A TITLE FIRST")
    } else {

    let boardContainer = document.createElement("div");   //boardContainer DIV WILL APPAND WITH ALLDATA div
    boardContainer.classList.add("containerStyle");
    boardContainer.innerHTML = `
    <div class="board-head">
    <p class="title-name">${data}</p>
    <i class="fa-solid fa-trash delete-brd"></i></div>
    <div class='all-note'>

    </div>
    <button class="add-cards">+ Add note</button>
    <form class="show-hide"> 
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
    deleteBoard = document.querySelectorAll(".delete-brd");   //To delete one entire board
    deleteBoardFun();

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
            ele.parentNode.parentNode.parentElement.children[2].style.display = "block";
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
            // noteDescripElement.style.display = "none";
            // Create a div to display the note
            let noteBox = document.createElement("div");
            noteBox.innerHTML = `
            <button class="delete-note"><i class="fa-solid fa-delete-left"></i></button>
            <span>${noteDescripValue}</p>
            `
            noteBox.classList.add("giveColor")
            // noteBox.textContent = noteDescripValue;
            // noteBox.classList.add("note-box");
            // Append the note div to the board container
            ele.parentElement.parentElement.parentElement.children[1].appendChild(noteBox);
            // console.log(ele.parentElement.parentElement.parentElement)
            // Hide the "Add note" button
            ele.parentElement.parentElement.style.display = "none";
            // console.log(ele.parentElement.parentElement.parentElement.children[1]);
            ele.parentElement.parentElement.parentElement.children[2].style.display = "block";
            ele.parentElement.parentElement.children[0].value = "";


            deleteNote = document.querySelectorAll(".delete-note");
            deleteEachNote();

            let containerStyle = document.querySelectorAll(".containerStyle")
            // console.log(containerStyle);
            containerStyle.forEach((ele) =>{
                // console.log(ele.clientHeight);

                if(ele.clientHeight > 420){
                    ele.style.height = "80vh";
                    ele.style.overflowY = "scroll";
                }
            })

        });
    });
}


function deleteEachNote () {
    deleteNote.forEach((element)=>{
        // console.log(element);
        element.addEventListener("click", ()=>{
            element.parentElement.remove();
        }) 
        let containerStyle = document.querySelectorAll(".containerStyle")
        // console.log(containerStyle);
        containerStyle.forEach((ele) =>{
            // console.log(ele.clientHeight);
    
            if (ele && ele.classList.contains("window")) {
                // Check if the client height of the element is less than or equal to 419 pixels
                if (ele.clientHeight <= 419) {
                    // Remove the "window" class
                    ele.style.height = "fit-content";
                    ele.style.overflowY = "hidden";                
                }
            } 
        })

    })
    
}

function deleteBoardFun() {
    deleteBoard.forEach((element)=>{
        element.addEventListener("click", ()=>{
            console.log(element.parentElement.parentElement);
            element.parentElement.parentElement.remove();
        })
    })
}

// allData.addEventListener("click", function (event) {
//     if (event.target.classList.contains("add-cards")) {
//         let addCardBtn = event.target;
//         let parentDiv = addCardBtn.closest(".containerStyle");
//         let noteForm = parentDiv.querySelector(".show-hide");
//         addCardBtn.style.display = "none";
//         noteForm.style.display = "block";
//     }

//     if (event.target.classList.contains("cross")) {
//         let crossBtn = event.target;
//         let parentDiv = crossBtn.closest(".containerStyle");
//         let noteForm = parentDiv.querySelector(".show-hide");
//         crossBtn.style.display = "none";
//         noteForm.style.display = "none";
//         parentDiv.querySelector(".add-cards").style.display = "block";
//     }

//     if (event.target.classList.contains("add-brd")) {
//         event.preventDefault();
//         let addNoteBtn = event.target;
//         let parentDiv = addNoteBtn.closest(".containerStyle");
//         let noteDescripElement = parentDiv.querySelector(".note-des");
//         let noteDescripValue = noteDescripElement.value;

//         console.log(noteDescripElement);

//         noteDescripElement.style.display = "none";

//         let noteBox = document.createElement("div");
//         noteBox.classList.add("giveColor");
//         noteBox.textContent = noteDescripValue;
//         noteBox.classList.add("note-box");

//         parentDiv.querySelector(".all-note").appendChild(noteBox);

//         addNoteBtn.style.display = "none";
//         parentDiv.querySelector(".add-cards").style.display = "block";
//     }
// });



