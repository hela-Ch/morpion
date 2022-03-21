
const addMark = (e) =>{
    e.target.textContent = 'X'   
}

document.addEventListener('DOMContentLoaded', function () {
    const cells =document.getElementsByClassName('cell');
    Array.from(cells).forEach(element => {
        element.addEventListener('click',addMark)   
    })
})