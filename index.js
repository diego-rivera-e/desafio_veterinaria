const { leer , registrar} = require('./operaciones');

const [operation, ...params] = process.argv.slice(2);
let resp = '';

if(operation == 'leer'){
    const content =  leer();

    for(data of content){
        resp +=  `
            Nombre : ${data.nombre}
            Edad : ${data.edad}
            Diagnostico: ${data.enfermedad}
            ---
            `;
        }
console.log('Listado de citas'); 
    } else if(operation == 'registrar'){
    if(URLSearchParams.length =! 5){
        resp ='Todos los paramatros son requeridos ()'
    }else{
        const[nombre, edad, animal, color, enfermedad] = params;
        let nCita ={
            nombre: nombre,
            edad: edad,
            animal,
            color,
            enfermedad,
        };
        resp = registrar(nCita)
    }
}else{
    resp = 'Solo tenemos 2 metodos: \n- leer\n- registrar';
}
console.log(resp);

    module.exports = {
    leer,
    };