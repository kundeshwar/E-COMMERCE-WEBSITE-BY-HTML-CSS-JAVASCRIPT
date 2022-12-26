const bar = document.getElementById('bar')
const nav = document.getElementById("navbar")
const close_1 = document.getElementById('close_1')
if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if (close_1) {
    close_1.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}