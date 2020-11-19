import React from 'react';
import ReactDOM from 'react-dom';
import {NumberComponent} from './numberComponent';
import imgLogo1 from "./content/logo1.jpg"; 
import classes from "./mystyles.scss";

const name: string = "Webpack";
const greeting: string = `Hello ${name}`;

ReactDOM.render(
    <div>
        <h1 className={classes.greeting}>{greeting}</h1>
        <NumberComponent />
    </div>,
    document.getElementById("root")

);

const logo: HTMLElement = document.createElement("img");
logo["src"] = imgLogo1;
logo["height"] = 200;
document.getElementById("image-container").appendChild(logo);

