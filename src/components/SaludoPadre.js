import SaludoHijo from "./SaludoHijo";
function SaludoPadre() {
    //necesitamos un metodo para poder ejecutar la accion
    //cuando el hijo lo necesite
    const metodoPadre = () => {
        console.log("Ejecutando parent");
    }

    return(<div>

        <h1 style={{color:"red"}}>Saludo PADRE</h1>
        {/* el metodo lo llamamos desde el hijo por 
        lo que debemos enviar mediante props el 
        metodo al hijo en su dibujo*/}

        <SaludoHijo metodoPadre={metodoPadre}/>

    </div>)
}

export default SaludoPadre;