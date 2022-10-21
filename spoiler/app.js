const bttn = document.getElementById("myBtn")
const div = document.querySelector('#spoiler');

function visible(e){
    if(e.key === "Escape") {
        div.style.display = 'none';
}
else if(div.style.display === 'none'){
    div.style.display = 'block';
   }else{
    div.style.display = 'none';
   }
   
}
// function keyPress (e) {
//     if(e.key === "Escape") {
//         if(div.style.display === 'none'){
//             div.style.display = 'block';
//            }else{
//             div.style.display = 'none';
//            }
//     }
// }
bttn.addEventListener('click', visible);
bttn.addEventListener('keyup', visible);