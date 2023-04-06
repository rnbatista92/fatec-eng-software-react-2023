import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import letreiro from "./aula2/letreiro";
import relogio from "./aula2/relogio";

const Rotas = () => {
   return(
       <BrowserRouter>
           <Route component = { letreiro }  path="/aula2/letreiro" />
           <Route component = { relogio }  path="/aula2/relogio" />
       </BrowserRouter>
   )
}

export default Rotas;