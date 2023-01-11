import React from "react";
import HowManyParks from "./parks/HowManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife, elevation} from "./parks/RockyMountain"

function ColoradoStateParks() {
  HowManyParks(); // => "42 parks!"

  return (
    <> 
     <h1>Colorado State Parks!</h1>
     <MesaVerde />
     {trees}

    </>

  )

}

export default ColoradoStateParks
