import { ADD } from "../DataBase/Add/Add.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { CLEAR } from "../DataBase/Clear/Clear.js";
import { DISPLAY } from "../DataBase/Display/Display.js";
import { GETDATA } from "../DataBase/GetData/GetData.js";
import { INSERTDATA } from "../DataBase/InsertData/InsertData.js";
import { LOCALSTORE } from "../DataBase/LocalStore/LocalStore.js";
import { REDUX } from "../DataBase/Redux/Redux.js";
import { ROUTE } from "../DataBase/Route/Route.js";
import { SESSIONSTORE } from "../DataBase/SessionStore/SessionStore.js";
import { UPDATEDATA } from "../DataBase/UpdateData/UpdateData.js";

export const CONNECTIONFUNCTIONS=()=>{
const DATA=`const ADD=${ADD};
const DISPLAY=${DISPLAY};
const AUTORUN=${AUTORUN};
const REDUX=${REDUX};
const LOCALSTORE=${LOCALSTORE};
const SESSIONSTORE=${SESSIONSTORE};
const CLEAR=${CLEAR};
const GETDATA=${GETDATA};
const INSERTDATA=${INSERTDATA};
const UPDATEDATA=${UPDATEDATA};
const ROUTE=${ROUTE};
`;

    localStorage.setItem('FUNCTIONS',DATA)
};

`
const ROUTE=${ROUTE};

`
