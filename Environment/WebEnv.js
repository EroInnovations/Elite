import { CLOUDSTART } from "../Connection/Cloud.js";
import { NOVA } from "../Connection/CloudStart.js";

export const WEBENV=(PATH)=>{

    fetch(PATH)
    .then(res =>res.text())
    .then(data =>{

        localStorage.setItem('PROJECT',data);

        NOVA();

        CLOUDSTART();

        return;


    })
    .catch(error=>{console.log(error)}
    );

};