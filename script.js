window.sr = ScrollReveal({reset: true});

sr.reveal('.title-quemsoueu',{ duration: 1000});

sr.reveal('.video-quemsoueu',{ duration: 2000});

sr.reveal('.title-capa',{ duration: 1000});

sr.reveal('.p-capa-2',{ duration: 1300});

sr.reveal('.botaocapa',{ duration: 1500});

sr.reveal('.content-etapas-1',{ duration: 1000});

sr.reveal('.content-etapas-2',{ duration: 2000});

sr.reveal('.content-etapas-3',{ duration: 3000});

sr.reveal('.texto-portifolio-1',{ duration: 2000});

sr.reveal('.cards-portifolio-1',{ duration: 2000});



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '315',
width: '560', // Pode ser configurado em % - por exemplo 100% para se adequar em qualquer largura de tela.
videoId: 'Tp1ZGCqqEuU',
});
}


function marca1() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/romuald-logo.webp"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/romuald-logo.webp"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/romuald-logo.webp"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/romuald-logo.webp"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/romuald-logo.webp"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/romuald-logo.webp"
    
}

function marca2() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/romuald-cadernos.webp"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/romuald-cadernos.webp"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/romuald-cadernos.webp"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/romuald-cadernos.webp"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/romuald-cadernos.webp"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/romuald-cadernos.webp"
}

function marca3() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/romuald-cordao.webp"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/romuald-cordao.webp"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/romuald-cordao.webp"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/romuald-cordao.webp"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/romuald-cordao.webp"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/romuald-cordao.webp"
}
