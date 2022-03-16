const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer =document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('.countdown')

// Pegando sempre o próximo ano
const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const getTimeUnit = unit => {
    return unit < 10 ? '0' + unit : unit;
}

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysContainer.textContent = getTimeUnit(days);
    hoursContainer.textContent = getTimeUnit(hours);
    minutesContainer.textContent = getTimeUnit(minutes);
    secondsContainer.textContent = getTimeUnit(seconds);
}

const updateCountdown = () => {
    // Hora atual
    const currentTime = new Date();
    // Diferença entre o próximo ano menos o dia atual
    const difference = newYearTime - currentTime;
    // Arredondando o calculo de segundos para dias, horas, minutos e segundos, para o próximo ano.
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;
    // console.log(`Dias: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds}`);

    insertCountdownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(() => {
   handleCountdownDisplay(); 
}, 1000)


setInterval(() => {
    updateCountdown();
}, 1000)


const button = document.querySelector('.btn')
button.addEventListener('click', () => {
    alert('cliquei!')
})