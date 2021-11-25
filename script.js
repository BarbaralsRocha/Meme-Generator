const textInput = document.getElementById('text-input')
const coontainer = document.getElementById('meme-image-container')
const memeTextImage = document.getElementById('meme-text')
const memeImage = document.getElementById('meme-image');


function textMeme(){
        let textInserido = textInput.value
        memeTextImage.innerText = textInserido
        
}
textMeme()
textInput.addEventListener('keyup', textMeme)

let loadFile = function(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // free memory
    }
}


