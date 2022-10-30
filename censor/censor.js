 const changeScene = censor();

 changeScene('PHP','JS');

 changeScene('backend', 'frontend')

 console.log(changeScene('PHP is the most popular programming language for backend web-development'));



function censor(){
let pary = [];
    return function(a, b = 0) {
        if (b === 0 ){
            let zamen = a;
            for(let i = 0; i < pary.length; i++){
                zamen = zamen.replaceAll(pary[i][0], pary[i][1]);
            }
            return zamen
        }
        else{
            const pari = [];
            pari.push(a);
            pari.push(b);
            pary.push(pari);
            return pary;
        }
    }
}
