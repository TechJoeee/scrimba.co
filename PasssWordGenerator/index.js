let randoms = ['A','B','C','D','E','F','G','H','I','J','K',1,2,3,4,5,6,7,8,9,0]
let specialChars =['.','/','!','@',"#","%"] 
let btn = document.getElementById('btn')
let pass1 = document.getElementById('pass1')
let chars = document.getElementById('chars')
let pass2 = document.getElementById('pass2')
let special = chars.checked

function randomp(){

    if(chars.checked){
    for(let i = 0; i < specialChars.length; i++){
        randoms.push(specialChars[i])
    }
    
}
    else{
        randoms = ['A','B','C','D','E','F','G','H','I','J','K',1,2,3,4,5,6,7,8,9,0]
    }

        pass1.textContent = ''
    pass2.textContent = ''
    
    for(let i = 0; i < 8; i ++){
        let rand = Math.floor(Math.random() * randoms.length )
        pass1.textContent += randoms[rand]

        let rand2 = Math.floor(Math.random() * randoms.length)
        pass2.textContent += randoms[rand2]
    }
}



