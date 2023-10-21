// stopwatch - maybe do something after one second has passed

let counter = document.getElementById("counter");
let counterNum = 0;
// console.log(counter);
// add pauser
let isPaused = false;

// increment counter by one every second
setInterval(() => {
    // reset like number
    likeCount = 0;

    if (!isPaused) {
    // incremement counter
    counterNum++;
    counter.textContent = counterNum;
    } 

}, 1000)

// add minus button to decrement counter
let minusBtn = document.getElementById("minus");
minusBtn.addEventListener("click", () => {
    counterNum--;
    counter.textContent = counterNum;
})

// add plus button to decrement counter
let plusBtn = document.getElementById("plus");
plusBtn.addEventListener("click", () => {
    counterNum++;
    counter.textContent = counterNum;
})

// Add like button 
let likeBtn = document.getElementById("heart");
let likeCount = 0;
likeBtn.addEventListener("click", () => {
    // increase like count every time the button is clicked
    likeCount++;
    // console.log(likeCount);


    // check to see if object already exists
    if (document.getElementById(`${counterNum}`)) {
        // console.log("an element was found!");
        document.getElementById(`${counterNum}`).innerText = `${counterNum} has been liked ${likeCount} times`;
    }
    else { // create object
        // add like to list
        let likeLi = document.createElement("li");
        likeLi.id = counterNum;
        document.querySelector(".likes").appendChild(likeLi);
        // add span to track number
        let likeNum = document.createElement("span");
        likeLi.appendChild(likeNum);
        likeNum.textContent = likeCount;

        likeLi.innerText = `${counterNum} has been liked ${likeCount} time`;
    }

})

// Add pause button
let pauseBtn = document.getElementById("pause");
pauseBtn.textContent = "pause";
pauseBtn.addEventListener("click", () => {
    console.log(pauseBtn.textContent);
    if (pauseBtn.textContent === "pause") {
        pauseBtn.textContent = "resume";
        likeBtn.disabled = true;
        plusBtn.disabled = true;
        minusBtn.disabled = true;  
        submit.disabled = true; 
        isPaused = true;   
    }
    else {
        pauseBtn.textContent = "pause";
        likeBtn.disabled = false;
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        submit.disabled = false;
        isPaused = false;
    }
    console.log(pauseBtn.textContent);
})

// Add comment functionality
let comment = document.querySelector("#comment-form");
console.log(comment);
let submit = document.querySelector("#submit");
comment.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(document.querySelector("#comment-input").value);
    comment.reset();
})

// process user input
function addComment(comment) {
    // add comment to list
    let p = document.createElement("p");
    p.textContent = comment;
    // console.log(liItem);
    console.log(document.querySelector("#list"));
    document.querySelector("#list").appendChild(p);
}