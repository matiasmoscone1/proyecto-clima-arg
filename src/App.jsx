import { useEffect, useState } from 'react';
import Ciudades from './components/Ciudades';
import TempMaxMin from './components/TempMaxMin';
import TemperaturaDia from './components/TemperaturaDia';
import LineaHora from './components/LineaHora';
import LugarActual from './components/LugarActual';
import "./index.css";

function App() {

  {/* MENCIONAR API OPEN-MATEO - API OPEN SOURCE*/}

  //Declaracion de variables del tiempo en dias meses y horas actuales.
  const horaActual = new Date().getHours();

  const diaActual = new Date().getDate();
  const mesActual = new Date().getMonth() + 1;
  const diaTextoActual = new Date().getDay();

  //Declaracion de estados de toda la applicacion.
  const [info, setInfo] = useState({});
  const [valor, setValor] = useState([]);
  const [horaTempDia, setHoraTempDia] = useState(horaActual);
  const [inputValue, setInputValue] = useState(horaActual);
  const [latitude, setLatitude] = useState(-31.423736);
  const [longitude, setLongitude] = useState(-64.191271);
  const [humedad, setHumedad] = useState([]);
  const [viento, setViento] = useState([]);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [lugar, setLugar] = useState("Córdoba, Córdoba");

  // Llamada a API con fetch, pasando como parametros la latitud y la longitud de cada lugar donde se requiera.
  const callAPI = (latitude, longitude) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m`)
    .then((response) => response.json())
    .then((data) => setInfo(data))
  }

  //Renderizando los datos cada vez que cambie la longitud y la latitud.
  useEffect(() => {
    callAPI(latitude, longitude);
    console.log(info);
  }, [latitude, longitude]);



// Tomando la informacion especifica de la API (las temperaturas)
  const TemperaturaActual = () => {
    //Recorriendo el objeto de datos, y actualizando el valor de la temperatura, humedad y viento.
    for(const i in info){
      const temperaturas = info[i].temperature_2m;
      useEffect(() => {
        setValor(temperaturas);
        setHumedad(info[i].relativehumidity_2m);
        setViento(info[i].windspeed_10m);
      }, []);
    }
    return(
      <div className='actual-container'>
        {/* Renderizando la temperatura actual, maxima y minima. */} 
        <div className='temperatura-actual'>
          <p>{`${Math.round(valor[horaActual])}°`}</p>
        </div>
        <div className='temp-max-min'>
          <p>{`Max:`} <span>{Math.round(tempMax)}{`°`}</span> </p>
          <p>{`Min:`} <span>{Math.round(tempMin)}{`°`}</span> </p>
        
        </div>
        {/* Renderizando la humedad y el viento actual.*/}
        <div className='humedad-viento-actual'> 
          <p>{`Humedad:`} <span>{humedad[horaActual]}{`%`}</span></p>
          <p>{`Viento:`} <span>{viento[horaActual]}{`km/h`}</span></p>
        </div>        
      </div>
    )
  }


  const handleHourTempDia = (e) => {
      setHoraTempDia(e.target.value);
      setInputValue(e.target.value);
    }


  return (
    <div className='main-container'>
      
      <h2 className='title-container'> Provincias Argentinas </h2>

      <Ciudades setLatitude={setLatitude} setLongitude={setLongitude} setLugar={setLugar}/>
      
      <LugarActual lugar={lugar} diaTextoActual={diaTextoActual} diaActual={diaActual} mesActual={mesActual}/>

      <TempMaxMin valor={valor} setTempMax={setTempMax} setTempMin={setTempMin}/>
       
      <TemperaturaActual/>
      
      <div className='input-hora-container'>
        <input type="range" min="0" max="23" value={inputValue} onChange={handleHourTempDia}/>
        <LineaHora/>
      </div>

      <TemperaturaDia horaTempDia={horaTempDia} valor={valor} humedad={humedad} viento={viento}/>

    </div>
  )
}

export default App;
