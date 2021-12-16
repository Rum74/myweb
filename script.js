const btn = document.querySelector('.btn-content button')
const form = document.querySelector('.form')
const overlay = document.querySelector('.overlay')
const closed = document.querySelector('.fa-times')
btn.addEventListener("click",()=>{
    form.classList.add('active');
    overlay.classList.add('active');
});
overlay.addEventListener("click",()=>{
    form.classList.remove('active');
    overlay.classList.remove('active');
});
closed.addEventListener("click",()=>{
    form.classList.remove('active');
    overlay.classList.remove('active');
});

const btnOne = document.querySelector('.btn-content-one button')
btnOne.addEventListener("click",()=>{
    form.classList.add('active');
    overlay.classList.add('active');
});
overlay.addEventListener("click",()=>{
    form.classList.remove('active');
    overlay.classList.remove('active');
});
closed.addEventListener("click",()=>{
    form.classList.remove('active');
    overlay.classList.remove('active');
});


const click = document.querySelector('.footer__click strong')
const mapouter = document.querySelector('.mapouter')
const closeMap = document.querySelector('.close-map p')
click.addEventListener("click",()=>{
    mapouter.classList.add('active');
    // display.classList.add('active');
});
closeMap.addEventListener("click",()=>{
    mapouter.classList.remove('active');
    // display.classList.remove('active');
});