//function abrir e fechar div no html

document.getElementById("home").style.visibility = "visible";
document.getElementById("produtos").style.visibility = "hidden";
document.getElementById("quemSomos").style.visibility = "hidden";
document.getElementById("faleConosco").style.visibility = "hidden";
document.getElementById("cadastro").style.visibility = "hidden";




function handleClick1() {

    let homeVis = document.getElementById('home');

    if (homeVis.style.visibility === 'hidden') {
        homeVis.style.visibility = 'visible';


    } else {
        homeVis.style.visibility = 'hidden';
    }

}

function handleClick2() {

    let produtosVis = document.getElementById('produtos');

    if (produtosVis.style.visibility === 'hidden') {
        produtosVis.style.visibility = 'visible';
    } else {
        produtosVis.style.visibility = 'hidden';
    }
}

function handleClick3() {

    let quemSomosVis = document.getElementById('quemSomos');

    if (quemSomosVis.style.visibility === 'hidden') {
        quemSomosVis.style.visibility = 'visible';
    } else {
        quemSomosVis.style.visibility = 'hidden';
    }
}

function handleClick4() {

    let faleConoscoVis = document.getElementById('faleConosco');

    if (faleConoscoVis.style.visibility === 'hidden') {
        faleConoscoVis.style.visibility = 'visible';
    } else {
        faleConoscoVis.style.visibility = 'hidden';
    }
}

function handleClick5() {

    let cadastroVis = document.getElementById('cadastro');

    if (cadastroVis.style.visibility === 'hidden') {
        cadastroVis.style.visibility = 'visible';
    } else {
        cadastroVis.style.visibility = 'hidden';
    }
}



//menu site, expandir ou diminuir

function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}