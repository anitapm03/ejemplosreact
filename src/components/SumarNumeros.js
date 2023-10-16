import imagen from 'C:/Users/Alumnos MCSD Mañana/Desktop/FRONT/react/ejemplosreact/src/assets/images/img4.jpg';

function SumarNumeros(){
    var suma = 0;

    var estilo = {
        color: "green",
        backgroundColor: "purple"
    }
    var estiloFoto = {
        width: "150px",
        height: "150px"
    }

    const sumar = (numero) => {
        suma = suma + numero;
        console.log(suma);
    }

    return(<div>

        <h1 style={estilo}>Sumar números</h1>

        <img src={imagen} style={estiloFoto}/>

        <hr/>

        <button onClick={ () => sumar(2)}>Sumar 2</button>
        <button  onClick={ () => sumar(3)}>Sumar 3</button>

    </div>)
}

export default SumarNumeros;