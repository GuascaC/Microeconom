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
    let preciode = ((qd1-qd2)/qd1)/((pd1-pd2)/pd1);

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
    console.log(elasticidad);
}
function precioo(){
    let qo1 = Number(document.getElementById('qo1').value);
    let po1 = Number(document.getElementById('po1').value);
    let qo2 = Number(document.getElementById('qo2').value);
    let po2 = Number(document.getElementById('po2').value);
    let precioof1 = ((qo2-qo1)/(qo2+qo1));
    let precioof2 = ((po2-po1)/(qo2+qo1));
    let precioof = (precioof1 / precioof2);

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
    console.log(elasticidad2);
    console.log(precioof1);
    console.log(precioof2);
}