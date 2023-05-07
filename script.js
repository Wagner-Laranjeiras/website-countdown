console.log(`I'm glad you're here! The website will be launch in `);

const countdown = () => {
    //function time variables
    const countDate = new Date('May 10, 2023 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeGap = countDate - currentTime;

    //fixed time variables
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculations
    const daysLeft = Math.floor(timeGap / day);
    const hoursLeft = Math.floor((timeGap % day) / hour);
    const minutesLeft = Math.floor((timeGap % hour) / minute);
    const secondsLeft = Math.floor((timeGap % minute) / second);

    //apply in HTML
    document.querySelector('.day').innerText = daysLeft;
    document.querySelector('.hour').innerText = hoursLeft;
    document.querySelector('.minute').innerText = minutesLeft;
    document.querySelector('.second').innerText = secondsLeft;
};

setInterval(countdown, 1000);