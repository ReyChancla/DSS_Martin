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
    const {m200, m203} = datosMartin();

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

            const L = (((Tancho + Tlargo)*2)+pestaña);
            const H = ((Tancho + Tlargo)*2);
            const I = Talto + Tancho + c1;
            const B1Cerrada = Tlargo + Tancho;
            const E = ancho/2;
            const F = Talto;

            if (L >= 800 && L <= 2400) {
                console.log("valor L correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            ///////////////////////////////////////////////////////////////
            if (H >= 775 && H <= 2200) {
                console.log("valor H correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            //////////////////////////////////////////////////////
            if (I >= 300 && I <= 1000) {
                console.log("valor I correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            //////////////////////////////////////////////////////
            if (Tancho >= 120 && Tancho <= 950) {
                console.log("valor ancho correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            /////////////////////////////////////////////////////////
            if (Tlargo >= 250 && Tlargo <= 1080) {
                console.log("valor largo correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            /////////////////////////////////////////////////////////////
            if (B1Cerrada >= 400 && B1Cerrada <= 1100) {
                console.log("valor caja cerrada correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            ///////////////////////////////////////////////////////////////
            if (E >= 0 && E <= 300) {
                console.log("valor E correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            ////////////////////////////////////////////////////////////////////
            if (F >= 100 && F <= 800) {
                console.log("valor F correcto");
            } else{
                document.getElementById("errorMedidas").innerHTML = ("Esta caja no se puede fabricar, por medidas.");
                document.getElementById("errorMedidas").style.background = "red";
            };
            


            document.getElementById("aparecer").style.opacity = "1";
            document.getElementById("elemento1").innerHTML = ("  ") + formatofecha;
            document.getElementById("elemento2").innerHTML = ("  ") + largo + (" x ") + ancho + (" x ") + alto;
            document.getElementById("elemento3").innerHTML = ("  ") + L +(" x ")+ I ;
            document.getElementById("elemento4").innerHTML = ("  Ond / Martin"); 
            document.getElementById("elemento5").innerHTML = ("  ") + (((((Tancho + Tlargo)*2) * (Talto + Tancho +c1)*(costeCliche/100))/1000)*NumeroCliches).toFixed(2) + (" €");
            document.getElementById("elemento6").innerHTML = ("  ") + NumeroCliches;
            // document.getElementById("elemento7").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
            // document.getElementById("elemento8").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
            
        }
    }); 
};

function CalcularDatosMartin200() {
   alert("El atractivo programador necesita más tiempo"); 
};

function CalcularDatosMartin203() {
    alert("Conformate ahora mismo con hacer B1"); 
 };
