$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1350:{
            items:6
        },
        1500:{
            items:7
        },
        1800:{
            items:8
        },
        2000:{
            items: 10
        }
    }
})


const iconSearched = document.querySelector('.icon-input')
const input = document.querySelector('input[name="input"]')

const iconUser = document.querySelector('.user')
const divContent = document.querySelector('.accont')


iconSearched.onclick = () => {
    input.classList.toggle('input-search')
    input.style.marginLeft = '10px';
    input.style.outline = 'none';
    input.style.border = 'none';
    input.style.borderRadius = '3px';
    input.style.padding = '3px';
}

iconUser.onclick = () => {
    divContent.classList.toggle('accont')? divContent.style.display = 'block' : divContent.style.display = 'none' 
}