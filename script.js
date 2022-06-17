const img = document.querySelector('.img');
const percentage = document.querySelector('.percentage');
let counter = 0;

const counterTimer = setInterval(updateCounter, 50);

counterTimer();
function updateCounter(){
    counter++;

    if (counter > 99){
        clearInterval(counterTimer);
        percentage.classList.add('percentage--hidden');
    } 

    img.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`;
    percentage.textContent =`${counter} %`;
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}




document.addEventListener('load',()=>{
    counter= 100;
    
    percentage.textContent= `${counter}%`;
    overlay.classList.add('overlay--hidden');



});

//console.log(PerformanceEntry.duration);