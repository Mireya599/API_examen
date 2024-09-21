document.getElementById('municipios').addEventListener('change', function () {
    const municipioId = this.value;

    const datosMunicipios = {
        999: {
            nombre: "El Progreso",
            totalMunicipios: 8,
            cabecera: "Guastatoya",
            poblacion: "176,632",
            viviendas: "54,109",
            hogares: "44,213",
            promedioHogar: "4.00",
            jefasHogar: "25.26%",
            masculinidad: "97.44",
            edadPromedio: "28.38",
            dependencia: "59.99",
            estudio: "6.62",
            alfabetismo: "86.56%",
            maya: "2,627",
            garifuna: "184",
            xinka: "46",
            afrodescendiente: "86",
            ladino: "173,441",
            extranjero: "248"
        },
        201: {
            nombre: "Guastatoya",
            totalMunicipios: 1,
            cabecera: "Guastatoya",
            poblacion: "45,123",
            viviendas: "12,300",
            hogares: "10,150",
            promedioHogar: "3.8",
            jefasHogar: "30.00%",
            masculinidad: "98.00",
            edadPromedio: "27.50",
            dependencia: "60.10",
            estudio: "7.00",
            alfabetismo: "88.56%",
            maya: "627",
            garifuna: "84",
            xinka: "12",
            afrodescendiente: "16",
            ladino: "44,030",
            extranjero: "254"
        },
        202: {
            nombre: "Sanarate",
            totalMunicipios: 1,
            cabecera: "Sanarate",
            poblacion: "35,234",
            viviendas: "10,045",
            hogares: "8,675",
            promedioHogar: "4.1",
            jefasHogar: "22.50%",
            masculinidad: "95.12",
            edadPromedio: "29.20",
            dependencia: "61.00",
            estudio: "5.80",
            alfabetismo: "82.33%",
            maya: "1,300",
            garifuna: "50",
            xinka: "30",
            afrodescendiente: "40",
            ladino: "33,714",
            extranjero: "100"
        },
        203: {
            nombre: "Sansare",
            totalMunicipios: 1,
            cabecera: "Sansare",
            poblacion: "23,876",
            viviendas: "8,000",
            hogares: "7,000",
            promedioHogar: "3.5",
            jefasHogar: "20.00%",
            masculinidad: "96.44",
            edadPromedio: "28.50",
            dependencia: "58.50",
            estudio: "6.00",
            alfabetismo: "85.00%",
            maya: "300",
            garifuna: "20",
            xinka: "10",
            afrodescendiente: "30",
            ladino: "23,400",
            extranjero: "100"
        },
        204: {
            nombre: "Morazán",
            totalMunicipios: 1,
            cabecera: "Morazán",
            poblacion: "22,500",
            viviendas: "7,500",
            hogares: "6,800",
            promedioHogar: "3.7",
            jefasHogar: "26.50%",
            masculinidad: "98.00",
            edadPromedio: "29.10",
            dependencia: "60.20",
            estudio: "6.10",
            alfabetismo: "84.50%",
            maya: "400",
            garifuna: "30",
            xinka: "5",
            afrodescendiente: "10",
            ladino: "21,855",
            extranjero: "200"
        }
    };

    const municipioData = datosMunicipios[municipioId];

    // Actualizar los datos en el HTML
    document.getElementById('nombre').textContent = municipioData.nombre;
    document.getElementById('totalMunicipios').textContent = municipioData.totalMunicipios;
    document.getElementById('cabecera').textContent = municipioData.cabecera;
    document.getElementById('poblacion').textContent = municipioData.poblacion;
    document.getElementById('viviendas').textContent = municipioData.viviendas;
    document.getElementById('hogares').textContent = municipioData.hogares;
    document.getElementById('promedioHogar').textContent = municipioData.promedioHogar;
    document.getElementById('jefasHogar').textContent = municipioData.jefasHogar;
    document.getElementById('masculinidad').textContent = municipioData.masculinidad;
    document.getElementById('edadPromedio').textContent = municipioData.edadPromedio;
    document.getElementById('dependencia').textContent = municipioData.dependencia;
    document.getElementById('estudio').textContent = municipioData.estudio;
    document.getElementById('alfabetismo').textContent = municipioData.alfabetismo;
    document.getElementById('maya').textContent = municipioData.maya;
    document.getElementById('garifuna').textContent = municipioData.garifuna;
    document.getElementById('xinka').textContent = municipioData.xinka;
    document.getElementById('afrodescendiente').textContent = municipioData.afrodescendiente;
    document.getElementById('ladino').textContent = municipioData.ladino;
    document.getElementById('extranjero').textContent = municipioData.extranjero;
});
