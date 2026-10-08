let homeScore = document.getElementById('homeScore')
let guestScore = document.getElementById('guestScore')
let count = 0
let count2 = 0
// Home Board
function add1h(){
    count +=1
    homeScore.textContent = count
}

function add2h(){
    count +=2
    homeScore.textContent = count
}

function add3h(){
    count +=3
    homeScore.textContent = count
}

// Guest Board 
function add1g(){
     count2 +=1
    guestScore.textContent = count2
}

function add2g(){
    count2 +=2
    guestScore.textContent = count2
}

function add3g(){
    count2 +=3
    guestScore.textContent = count2
}