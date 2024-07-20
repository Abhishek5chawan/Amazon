const button1 = document.querySelector('.top-left')
const button2 = document.querySelector('.top-right')
const imgs = document.querySelectorAll('.large-img img')

let n = 0

function changeSlide(){
    for (let i = 0;i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block'
}

button1.addEventListener('click',(e) => {
    if(n > 0){
        n--
    }else{
        n = imgs.length -1;
    }
    changeSlide()
})

button2.addEventListener('click',(e) => {
    if(n < imgs.length -1){
        n++
    }else{
        n = 0
    }
    changeSlide()
})

