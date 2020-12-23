import React from 'react';

const Button = () => {
    const click = () => { 
         const clickButton = document.querySelector(".textButton");
         clickButton.innerHTML = "Hello";
    };
    return <button class="textButton" onClick={click}></button>;
};

export default Button;