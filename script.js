const textInput = document.getElementById('text-input')
const coontainer = document.getElementById('meme-image-container')
const memeTextImage = document.getElementById('meme-text')
const memeImage = document.getElementById('meme-image');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');


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

function meme1Img(){
    meme1.addEventListener('click', function(){
        memeImage.src = 'imgs/meme1.png'

    })
}
meme1Img()

function meme2Img(){
    meme2.addEventListener('click', function(){
        memeImage.src = 'imgs/meme2.png'

    })
}
meme2Img()

function meme3Img(){
    meme3.addEventListener('click', function(){
        memeImage.src = 'imgs/meme3.png'

    })
}
meme3Img()

function meme4Img(){
    meme4.addEventListener('click', function(){
        memeImage.src = 'imgs/meme4.png'

    })
}
meme4Img()
