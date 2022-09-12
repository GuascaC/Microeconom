'use strict';
function equilibrio(){
    let qd = Number(document.getElementById('qd').value);
    let pd = Number(document.getElementById('pd').value);
    let qo = Number(document.getElementById('qo').value);
    let po = Number(document.getElementById('po').value);
    let q = qd-qo;
    let p = pd+po;
    let equil = q/p;

    document.getElementById('equil').value = equil

}
function preciod(){
    let qd1 = Number(document.getElementById('qd1').value);
    let pd1 = Number(document.getElementById('pd1').value);
    let qd2 = Number(document.getElementById('qd2').value);
    let pd2 = Number(document.getElementById('pd2').value);
    let preciode1 = ((qd1-qd2)/qd1);
    let preciode2 = ((pd1-pd2)/pd1);
    let preciodem = (preciode1/preciode2);
    let preciode = (preciodem*-1);

    document.getElementById('preciode').value = preciode
    console.log(preciode);
    let mensaje;
    mensaje="";
    switch(true){
    case preciode==0:
        mensaje = `Demanda Perfectamente Inelastica `;
        break;
    case preciode < 1:
        mensaje = `Demanda Inelastica `;
        break;
    case preciode == 1:
        mensaje = `Demanda Elasticidad Unitaria `;
        break;
    case preciode > 1:
        mensaje = `Demanda Elastica`;
        break;
    default:
        mensaje = `Error`;
        break;
    }
    document.getElementById('elasticidad').value = mensaje
}
function precioo(){
    let qo1 = Number(document.getElementById('qo1').value);
    let po1 = Number(document.getElementById('po1').value);
    let qo2 = Number(document.getElementById('qo2').value);
    let po2 = Number(document.getElementById('po2').value);
    let precioof1 = ((qo2-qo1)/(qo2+qo1));
    let precioof2 = ((po2-po1)/(po2+po1));
    let precioofe = (precioof1 / precioof2);  
    let precioof = (precioofe*-1);

    document.getElementById('precioof').value = precioof
    let mensaje;
    mensaje="";
    switch(true){
    case precioof==0:
        mensaje = `Oferta Perfectamente Inelastica `;
        break;
    case precioof < 1:
        mensaje = `Oferta Inelastica `;
        break;
    case precioof == 1:
        mensaje = `Oferta Elasticidad Unitaria `;
        break;
    case precioof > 1:
        mensaje = `Oferta Elastica`;
        break;
    default:
        mensaje = `Error`;
        break;
    }
    document.getElementById('elasticidad2').value = mensaje
    console.log(precioof1);
    console.log(precioof2);
}
function precioc(){
    let qc1 = Number(document.getElementById('qc1').value);
    let pc1 = Number(document.getElementById('pc1').value);
    let qc2 = Number(document.getElementById('qc2').value);
    let pc2 = Number(document.getElementById('pc2').value);
    let precioc1 = ((qc2-qc1)/(qc2+qc1));
    let precioc2 = ((pc2-pc1)/(pc2+pc1));
    let preciocr = (precioc1 / precioc2);

    document.getElementById('preciocr').value = preciocr
    let mensaje;
    mensaje="";
    switch(true){
    case preciocr < 0:
        mensaje = `Complementario `;
        break;
    case preciocr > 0:
        mensaje = `Sustituto`;
        break;
    default:
        mensaje = `Error`;
        break;
    }
    document.getElementById('preciocru').value = mensaje
    console.log(preciocr);
    console.log(precioc1);
    console.log(precioc2);

}
function precioi(){
    let qi1 = Number(document.getElementById('qi1').value);
    let i1 = Number(document.getElementById('i1').value);
    let qi2 = Number(document.getElementById('qi2').value);
    let i2 = Number(document.getElementById('i2').value);
    let precioc1 = ((qi1-qi2)/(qi1));
    let precioc2 = ((i1-i2)/(i1));
    let ingreso = (precioc1 / precioc2);

    document.getElementById('ingreso').value = ingreso
    let mensaje;
    mensaje="";
    switch(true){
    case ingreso < 0:
        mensaje = `Inferior `;
        break;
    case ingreso > 0:
        mensaje = `Normal`;
        break;
    default:
        mensaje = `Error`;
        break;
    }
    document.getElementById('bieni').value = mensaje
    console.log(precioc1);
    console.log(precioc2);
    console.log(ingreso);

}