import { useEffect } from "react";

const TempMaxMin = ({valor, setTempMax, setTempMin}) => {
    const tempMaxMin = () => {

    const nuevoArrayTemperaturas = [];

    for(let i = 0; i < 23; i++){
      nuevoArrayTemperaturas[i] = valor[i];
    }

    setTempMax(Math.max(...nuevoArrayTemperaturas));
    setTempMin(Math.min(...nuevoArrayTemperaturas));

  }

  useEffect(() => {
    tempMaxMin(); 
  }, [valor]);

}

  export default TempMaxMin;