let emptyNote = document.getElementById("empty-note");
let userInput = document.getElementById("user-input");
let allNotes = document.getElementById("all-notes");
let colorArray = ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF", "#06D6A0"];
let rotateArray = ["rotate(-5deg)","rotate(5deg)","rotate(3deg)","rotate(-4deg)","rotate(3deg)","rotate(0deg)","rotate(-10deg)","rotate(5deg)",];
let colorIndex = 0;
let rotateIndex = 0;

// CREATE NOTE
function createNote(){
    emptyNote.style.display="flex";
}

//CLOSE NOTE
function closeNote(){
    emptyNote.style.display="none";
    userInput.value = '';
}

//SAVE NOTE
function saveNote(){
    let singleNote = document.createElement("div");
    singleNote.className = "single-note";
    allNotes.appendChild(singleNote);

    let singleNoteNav = document.createElement("div");
    singleNoteNav.className = "single-note-nav"
    singleNote.appendChild(singleNoteNav);

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-light fa-circle-xmark delete-note";
    singleNoteNav.appendChild(deleteIcon);

    let userNote = document.createElement("div");
    userNote.className = "user-note";
    singleNote.appendChild(userNote);

    userNote.innerHTML = userInput.value;

    //Assigning color to each notes according to colorArray order
    singleNote.style.background = colorArray[colorIndex];
    colorIndex++;
    if(colorIndex > colorArray.length - 1){
        colorIndex = 0;
    };
    console.log(colorIndex);
    

    //Assigning rotation to each note according to rotateArray order
    singleNote.style.transform = rotateArray[rotateIndex];
    rotateIndex++;
    if(rotateIndex > rotateArray.length - 1){
        rotateIndex = 0;
    };
    

    //DELETE SINGLE NOTE
    deleteIcon.addEventListener("click", function(){
        singleNote.remove();
    })
    

    //HIDE THE EMPTY NOTE AND CLEAR THE INPUT
    userInput.value = '';
    emptyNote.style.display = "none";

    console.log(singleNote);
}


