const makeBoard = document.querySelector("#make-board");
const addNote = document.querySelector("#add-note");
const anotherBox = document.querySelector(".anotherBox");
const xColor = document.querySelector(".x-color");
const addBoard = document.querySelector("#add-brd");
const form = document.querySelector("#form");
const allData = document.querySelector(".all-data");


let addCard;
let cross;


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
    <button class="add-cards">+ Add card</button>
    <form class="show-hide">
    <input id="title-name" placeholder="add a new title">
                <div id="most-inner-box">
                <button id="add-brd">Add note</button>
                <i class="fa-solid fa-x x-color cross"></i>
                </div>
    </form>
    `

    allData.appendChild(boardContainer);

    addCard = document.querySelectorAll(".add-cards")   
    // console.log(addCard);
    cross = document.querySelectorAll(".cross");
    // console.log(cross);

    addNewBoard()           //adding the new board to the screen
    addNewCards()           //adding the new cards to the indevidual board
    }

}


function addNewBoard () {    //function called above are made here
    addCard.forEach(element => {
        element.addEventListener("click", ()=>{
            // console.log(element.parentElement.children);
            element.parentElement.children[2].style.display = "block";
        })
    });
}

function addNewCards () {     //functionscalled above are made here
    cross.forEach(ele => {
        ele.addEventListener("click", ()=>{
            // console.log(ele.parentNode.parentNode)
            ele.parentNode.parentNode.style.display = "none";
           
        })
    })
}



