const textInput = document.getElementById('text-input')
const coontainer = document.getElementById('meme-image-container')
const memeTextImage = document.getElementById('meme-text')
const memeImage = document.getElementById('meme-image');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');


function textMeme(){
        let textInserido = textInput.value
        memeTextImage.innerText = textInserido
        
}
textMeme()
textInput.addEventListener('keyup', textMeme)

let loadFile = function(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // referência à https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    }
}

function changeFire(){
    fire.addEventListener('click', function(){
        coontainer.style.border='3px dashed rgb(255, 0, 0)'
    })
}
changeFire()

function changeWater(){
    water.addEventListener('click', function(){
        coontainer.style.border='5px double rgb(0, 0, 255)'
    })
}
changeWater()

function changeEarth(){
    earth.addEventListener('click', function(){
        coontainer.style.border='6px groove rgb(0, 128, 0)'
    })
}
changeEarth()
