import { Autocomplete, TextField } from "@mui/material";

function Ciudades({ setLatitude, setLongitude, setLugar}){

const ciudades = [ {
    "id": 1,
    "nombre": "Buenos Aires",
    "latitud": -34.587781, 
    "longitud": -58.396446
},
{
    "id": 2,
    "nombre": "Catamarca",
    "latitud": -28.463132, 
    "longitud": -65.779009
},
{
    "id": 3,
    "nombre": "Chaco",
    "latitud": -27.455486, 
    "longitud": -58.991832
},
{
    "id": 4,
    "nombre": "Chubut",
    "latitud": -43.300737, 
    "longitud": -65.100213
},
{
    "id": 5,
    "nombre": "Córdoba",
    "latitud": -31.423736, 
    "longitud": -64.191271
},
{
    "id": 6,
    "nombre": "Corrientes",
    "latitud": -27.484775, 
    "longitud": -58.811444
},
{
    "id": 7,
    "nombre": "Entre Ríos",
    "latitud": -31.743752, 
    "longitud": -60.511268
},
{
    "id": 8,
    "nombre": "Formosa",
    "latitud": -26.184694, 
    "longitud": -58.181544
},
{
    "id": 9,
    "nombre": "Jujuy",
    "latitud": -24.187937, 
    "longitud": -65.298694
},
{
    "id": 10,
    "nombre": "La Pampa",
    "latitud": -36.624340, 
    "longitud": -64.283702
},
{
    "id": 11,
    "nombre": "La Rioja",
    "latitud": -29.419728, 
    "longitud": -66.852994
},
{
    "id": 12,
    "nombre": "Mendoza",
    "latitud": -32.887453, 
    "longitud": -68.849747
},
{
    "id": 13,
    "nombre": "Misiones",
    "latitud": -27.391011, 
    "longitud": -55.918331
},
{
    "id": 14,
    "nombre": "Neuquén",
    "latitud": -38.955519, 
    "longitud": -68.069389
},
{
    "id": 15,
    "nombre": "Río Negro",
    "latitud": -40.817975, 
    "longitud": -62.994807
},
{
    "id": 16,
    "nombre": "Salta",
    "latitud": -24.808265, 
    "longitud": -65.411996
},
{
    "id": 17,
    "nombre": "San Juan",
    "latitud": -31.538195, 
    "longitud": -68.530193
},
{
    "id": 18,
    "nombre": "San Luis",
    "latitud": -33.301428, 
    "longitud": -66.333393
},
{
    "id": 19,
    "nombre": "Santa Cruz",
    "latitud": -51.623516, 
    "longitud": -69.232910
},
{
    "id": 20,
    "nombre": "Santa Fe",
    "latitud": -31.613324, 
    "longitud": -60.698251
},
{
    "id": 21,
    "nombre": "Santiago del Estero",
    "latitud": -27.797719, 
    "longitud": -64.264151
},
{
    "id": 22,
    "nombre": "Tierra del Fuego",
    "latitud": -54.811001, 
    "longitud": -68.320120
},
{
    "id": 23,
    "nombre": "Tucumán",
    "latitud": -26.829755, 
    "longitud": -65.212423
}];

const handleCity = (e) => {

    if(e.target.textContent.toLowerCase() === ciudades[0].nombre.toLowerCase()){
      setLatitude(ciudades[0].latitud);
      setLongitude(ciudades[0].longitud);
      setLugar(` ${ciudades[0].nombre}, C.A.B.A`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[1].nombre.toLowerCase()){
      setLatitude(ciudades[1].latitud);
      setLongitude(ciudades[1].longitud);
      setLugar(` ${ciudades[1].nombre}, San Fernando del Valle de Catamarca`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[2].nombre.toLowerCase()){
      setLatitude(ciudades[2].latitud);
      setLongitude(ciudades[2].longitud);
      setLugar(` ${ciudades[2].nombre}, Resistencia`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[3].nombre.toLowerCase()){
      setLatitude(ciudades[3].latitud);
      setLongitude(ciudades[3].longitud);
      setLugar(` ${ciudades[3].nombre}, Rawson`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[4].nombre.toLowerCase() || e.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === ciudades[4].nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
      setLatitude(ciudades[4].latitud);
      setLongitude(ciudades[4].longitud);
      setLugar(` ${ciudades[4].nombre}, Córdoba`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[5].nombre.toLowerCase()){
      setLatitude(ciudades[5].latitud);
      setLongitude(ciudades[5].longitud);
      setLugar(` ${ciudades[5].nombre}, Corrientes`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[6].nombre.toLowerCase() || e.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === ciudades[6].nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
      setLatitude(ciudades[6].latitud);
      setLongitude(ciudades[6].longitud);
      setLugar(` ${ciudades[6].nombre}, Paraná`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[7].nombre.toLowerCase()){
      setLatitude(ciudades[7].latitud);
      setLongitude(ciudades[7].longitud);
      setLugar(` ${ciudades[7].nombre}, Formosa`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[8].nombre.toLowerCase()){
      setLatitude(ciudades[8].latitud);
      setLongitude(ciudades[8].longitud);
      setLugar(` ${ciudades[8].nombre}, San Salvador de Jujuy`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[9].nombre.toLowerCase()){
      setLatitude(ciudades[9].latitud);
      setLongitude(ciudades[9].longitud);
      setLugar(` ${ciudades[9].nombre}, Santa Rosa`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[10].nombre.toLowerCase()){
      setLatitude(ciudades[10].latitud);
      setLongitude(ciudades[10].longitud);
      setLugar(` ${ciudades[10].nombre}, La Rioja`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[11].nombre.toLowerCase()){
      setLatitude(ciudades[11].latitud);
      setLongitude(ciudades[11].longitud);
      setLugar(` ${ciudades[11].nombre}, Mendoza`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[12].nombre.toLowerCase()){
      setLatitude(ciudades[12].latitud);
      setLongitude(ciudades[12].longitud);
      setLugar(` ${ciudades[12].nombre}, Posadas`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[13].nombre.toLowerCase() || e.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === ciudades[13].nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
      setLatitude(ciudades[13].latitud);
      setLongitude(ciudades[13].longitud);
      setLugar(` ${ciudades[13].nombre}, 	Neuquén`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[14].nombre.toLowerCase() || e.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === ciudades[14].nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
      setLatitude(ciudades[14].latitud);
      setLongitude(ciudades[14].longitud);
      setLugar(` ${ciudades[14].nombre}, Viedma`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[15].nombre.toLowerCase()){
      setLatitude(ciudades[15].latitud);
      setLongitude(ciudades[15].longitud);
      setLugar(` ${ciudades[15].nombre}, Salta`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[16].nombre.toLowerCase()){
      setLatitude(ciudades[16].latitud);
      setLongitude(ciudades[16].longitud);
      setLugar(` ${ciudades[16].nombre}, San Juan`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[17].nombre.toLowerCase()){
      setLatitude(ciudades[17].latitud);
      setLongitude(ciudades[17].longitud);
      setLugar(` ${ciudades[17].nombre}, San Luis`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[18].nombre.toLowerCase()){
      setLatitude(ciudades[18].latitud);
      setLongitude(ciudades[18].longitud);
      setLugar(` ${ciudades[18].nombre}, Río Gallegos`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[19].nombre.toLowerCase()){
      setLatitude(ciudades[19].latitud);
      setLongitude(ciudades[19].longitud);
      setLugar(` ${ciudades[19].nombre}, Santa Fe`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[20].nombre.toLowerCase()){
      setLatitude(ciudades[20].latitud);
      setLongitude(ciudades[20].longitud);
      setLugar(` ${ciudades[20].nombre}, Santiago del Estero`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[21].nombre.toLowerCase()){
      setLatitude(ciudades[21].latitud);
      setLongitude(ciudades[21].longitud);
      setLugar(` ${ciudades[21].nombre}, Ushuaia`);
    }
    else if(e.target.textContent.toLowerCase() === ciudades[22].nombre.toLowerCase() || e.target.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") === ciudades[22].nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"")){
      setLatitude(ciudades[22].latitud);
      setLongitude(ciudades[22].longitud);
      setLugar(` ${ciudades[22].nombre}, San Miguel de Tucumán`);
    }
    else{
      return;
    }
    
    console.log(e.target.textContent);
    console.log(e.target.value);

}

{/*<div className="input-container">
      <input type="text" placeholder="Buscar provincia" onChange={handleCity}/>
</div>*/}


return(
  
  <div className="input-container">

  <Autocomplete options={ciudades} getOptionLabel={(options) => options.nombre}
    renderInput={(params) => <TextField {...params} label="Buscar Provincia" />}
    onChange={handleCity}
    
    style={{width: "80%"}}
  />

  </div>
  
)

}

export default Ciudades;
