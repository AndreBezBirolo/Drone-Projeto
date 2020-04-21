if (window.SimpleAnime) {
    new SimpleAnime ();
}
if(window.SimpleSlide) {
    new SimpleSlide({
        slide: "ava", // nome do atributo data-slide="principal"
        nav: false, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5500, // tempo de transição dos slides
        pauseOnHover: false // pausa a transição automática
    });
}