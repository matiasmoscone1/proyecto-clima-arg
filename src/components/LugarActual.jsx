

const LugarActual = ({lugar, diaTextoActual, diaActual, mesActual}) => {

    const extraerDia = () => {
        switch(diaTextoActual){
          case 0:
            return("Domingo");
          case 1:
           return("Lunes");
          case 2:
            return("Martes");
          case 3:
            return("Miercoles");
          case 4:
            return("Jueves");
          case 5:
            return("Viernes");
          case 6:
            return("Sabado");
        }
      }

    return(
    <div className='place-container'>
        <div className='place-titulo'>
          <h3>Clima {lugar}</h3>
        </div>
        <div className='place-dia-actual'>
          <p>{`${extraerDia()},`} <span>{`${diaActual}/${mesActual}`}</span></p>
        </div>
       </div>
    )
}

export default LugarActual;
