const DatosCanalesMartin = [
    {
        nombre: "canalB",
        valoresDiferenciaMartin: {
            c1: 3,
            c2: 5,
            s: 30
        }
     },
     {
        nombre: "canalC",
        valoresDiferenciaMartin: {
            c1: 4,
            c2: 7,
            s: 30
        }
     },
     {
        nombre: "canalEB",
        valoresDiferenciaMartin: {
            c1: 5,
            c2: 10,
            s: 40
        }
    },
     {
        nombre: "canalBC",
        valoresDiferenciaMartin: {
            c1: 7,
            c2: 14,
            s: 40
        }
    },
    
];
// Datos ontenidos de los diferentes Input de la web
function datosMartin() {
    const m200 = document.getElementById("m200").checked;
    const m203 = document.getElementById("m203").checked;
    const canalesMartin = document.getElementById("canalesMartin").value;
    const largo = Number(document.getElementById("largoMartin").value);
    const ancho =Number(document.getElementById("anchoMartin").value);
    const alto = Number(document.getElementById("altoMartin").value);
    const costeCliche = parseInt(document.getElementById("Proveedor").value);
    const NumeroCliches = parseInt(document.getElementById("numerodetintas").value);
    return{
        m200,
        m203,
        canalesMartin,
        largo,
        ancho,
        alto,
        costeCliche,
        NumeroCliches
    }
};
// Esta es la función primaria que elige el tipo de caja

function CalcularDatosMartin() {
    const {m200, m201, m203} = datosMartin();

    if (m200) {
        CalcularDatosMartin200();   
    } else if (m203) {
        console.log(203);
    } else {
        CalcularDatosMartin201();   
    }
}
//Esta función es solo para dar la ficha
function fecha() {
    let hoy = new Date();

    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let agnio = hoy.getFullYear();

    let formatofecha = `${dia}-${mes}-${agnio}`;
    return{formatofecha}
}

//Esta parte contiene la interación del boton, segun el tipo de caja
//Parte 1 B1

function CalcularDatosMartin201() {

    const xl = DatosCanalesMartin.forEach(canalesB1 => {
        const {m200, m201, m203, canalesMartin, largo, ancho, alto, costeCliche, NumeroCliches} = datosMartin();
        const {formatofecha} = fecha();
        const {nombre, valoresDiferenciaMartin: {c1, c2, s}} = canalesB1;
        if (nombre === canalesMartin) {
            const Tlargo = largo + c1;
            const Tancho = ancho + c1;
            const Talto = alto + c2;
            const pestaña = s;

            document.getElementById("aparecer").style.opacity = "1";
            document.getElementById("elemento1").innerHTML = ("  ") + formatofecha;
            document.getElementById("elemento2").innerHTML = ("  ") + largo + (" x ") + ancho + (" x ") + alto;
            document.getElementById("elemento3").innerHTML = ("  ") + (((Tancho + Tlargo)*2)+s) + (" x ") + (Talto + Tancho +c1);
            document.getElementById("elemento4").innerHTML = ("  Ond / Martin"); 
            document.getElementById("elemento5").innerHTML = ("  ") + (((((Tancho + Tlargo)*2) * (Talto + Tancho +c1)*(costeCliche/100))/1000)*NumeroCliches).toFixed(2) + (" €");
            document.getElementById("elemento6").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
            document.getElementById("elemento7").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
            document.getElementById("elemento8").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
        }
    }); 
};

function CalcularDatosMartin200() {
   alert("Comprar cebollas"); 
};
