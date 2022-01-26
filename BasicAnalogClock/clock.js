/**  ======================================================
*** A Simple Password Genarator from Hacker TESLA       ***
*** By ECMAScript [ JS ]                                ***
*** Follow of Develop this code on github               ***
*** Github : https://github.com/hacker-tesla            ***
*** Portfolio : http://hpcscienceclub.cf/profile.html   ***
======================================================= **/


/* select or hold the hand of second, minutes and hour */
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    //working with date
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ( ( seconds / 60 ) * 360 ) + 90;  //move second's hand with current second
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log('second:', seconds);

    //working with minutes
    const mins = now.getMinutes();
    const minsDegrees = ( ( mins / 60 ) * 360 ) + 90;  //move minute's hand with current minute
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log('minutes:', mins);

    //working with hours
    const hour = now.getHours();
    const hourDegrees = ( ( hour / 12 ) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log('hour:', hour);
}

setInterval(setDate, 1000);