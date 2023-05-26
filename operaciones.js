const fs = require('fs');
const rutaJson= './citas.json';


const leer = () => {
    const allDates = fs.readFileSync(rutaJson, 'utf-8');
    const allDatesJson = allDates;
    return allDatesJson;
    };

const registrar = (nCita) => {
    fs.access(rutaJson, fs.constants.F_OK,(err) => {
        if(err) fs.writeFileSync(rutaJson, '');

        let contenidoJson = fs.readFileSync(rutaJson, 'utf-8');
        let objetoJson = JSON.parse(contenidoJson);

        objetoJson.push(nCita);
        contenidoJson = JSON.stringify(objetoJson);
        fs.writeFileSync('citas.json', contenidoJson);
    });
    return 'Cita agregada exitosamente';
};

    module.exports = {
    leer,
    registrar,
    }