function SaludoHijo(props) {
    //capturamos en una variable de método
    //el props que viene del padre

    var ejecutarPadre = props.metodoPadre;
    return(<div>
        <h1 style={{color:"blue"}}>Saludo HIJO</h1>
    </div>)
}

export default SaludoHijo;