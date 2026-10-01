let input = document.getElementById('input-el')
let btn = document.getElementById('convert-btn')
let len = document.getElementById('length-el')
let volumn = document.getElementById('volumn-el')
let mass = document.getElementById('mass-el')
 
btn.addEventListener('click',function(){    
let figure = input.value
const metreToFeet = (figure * 3.28084).toFixed(3)
const feetToMetre = (figure * 0.3048).toFixed(3)
const literToGallon = (figure * 0.264172).toFixed(3)
const gallonToLiter = (figure * 3.78641).toFixed(3)
const kiloToPound = (figure * 2.20462).toFixed(3)
const poundToKilo = (figure * 0.453592).toFixed(3)


len.textContent = `${figure} Metre To Feet = ${metreToFeet} Feets | ${figure} Feet To Metre = ${feetToMetre} Metres `
mass.textContent = `${figure} KiloGram To Pound = ${kiloToPound} Pounds | ${figure} Pound To KiloGrams = ${poundToKilo} KiloGrams `
volumn.textContent = `${figure} Liter To Gallon  = ${literToGallon} Gallons | ${figure} Gallon To Liter = ${gallonToLiter} Liters `
})