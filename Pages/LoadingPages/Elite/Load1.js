import { FUNCTIONS } from "../../../Connection/Functions.js";
import { ELITEPAGETWO } from "./Load2.js";


export const ELITEPAGE=(HOLDERS)=>{

    FUNCTIONS();

    const style = document.createElement('style');

    style.textContent = `
    
        .Updates{
            font-size:20px;
            text-align:center;
            margin-top:50%;
        }
    
    `;

    document.head.appendChild(style);

    HOLDERS.innerHTML=`

        <h1 class="Updates">Downloading Updates<h1>
    
    `;

    setTimeout(() => {

       ELITEPAGETWO(HOLDERS);
        
    }, 500);

};