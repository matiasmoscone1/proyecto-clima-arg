const TemperaturaDia = ({horaTempDia, valor, humedad, viento}) => {
    
  if(horaTempDia < 10){
    return(
            <div className="data-hora-container">
              <div className="hora-actual-title">
                <p>{`Hora: `}{<span>{`0${horaTempDia}:00`}</span>}</p>
              </div>
              <div className="hora-actual-temperatura">
                <p>{`${Math.round(valor[horaTempDia])}°`}</p>
              </div>
              <div className="hora-actual-humedad-viento">  
                <p>{`Humedad:`} <span>{humedad[horaTempDia]}{`%`}</span></p>
                <p>{`Viento:`} <span>{viento[horaTempDia]}{`km/h`}</span></p>
               </div>
            </div>
          )
    
  }else{
    return(
      <div className="data-hora-container">
        <div className="hora-actual-title">
          <p>{`Hora: `}{<span>{`${horaTempDia}:00`}</span>}</p>
        </div>
        <div className="hora-actual-temperatura">
          <p>{`${Math.round(valor[horaTempDia])}°`}</p>
        </div>
        <div className="hora-actual-humedad-viento">  
          <p>{`Humedad:`} <span>{humedad[horaTempDia]}{`%`}</span></p>
          <p>{`Viento:`} <span>{viento[horaTempDia]}{`km/h`}</span></p>
         </div>
      </div>
    )
  }
}
  
export default TemperaturaDia;