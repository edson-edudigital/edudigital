import anime from "animejs";

export function translate(element){
    anime({
        targets:element,
        translateX:[0,20,0],
        duration:2000
    })
}




export function custonAnime(params){
    anime(params);
}

export const anime_ = anime;


export function animeNumber(element,val){

    anime({
        targets:element,
        innerHTML: [0, val],
        easing: 'linear',
        duration:800,
        round: 1 
    })
}