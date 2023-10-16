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

    const sumar = (num1,num2) => {
        num1 = parseInt(props.numero1);
        num2 = parseInt(props.numero2);
        var suma = num1 + num2;
        console.log(suma);
    }

    return(<div>

        <h1 style={estilo}>Sumar números</h1>

        <img src={imagen} style={estiloFoto}/>

        <hr/>

        <button onClick={ () => sumar()}>Sumar 2</button>
        <button  onClick={ () => sumar()}>Sumar 3</button>

    </div>)
}

export default SumarNumeros;