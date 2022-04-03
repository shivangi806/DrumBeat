var numOfDrum=document.querySelectorAll(".drum").length;
// for(var i=0;i<numOfDrum;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//        //    this.style.color="white";
//        var buttonInnerHTML= this.innerHTML;
//         switch(buttonInnerHTML){
//          case 'w':
//             var tom1 = new Audio('sounds/tom-1.mp3');
//             tom1.play();
//          break;
//          case "a":
//             var tom2 = new Audio('sounds/tom-2.mp3');
//             tom2.play();
//          break;
//          case "s":
//             var tom3 = new Audio('sounds/tom-3.mp3');
//             tom3.play();
//          break;
//          case "d":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//          tom4.play();
//          break;
//          case "j":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//          break;
//          case "k":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//          break;
//          case "l":
//             var kick = new Audio('sounds/kick-bass.mp3');
//             kick.play();
//          break;
//          default:console.log(buttonInnerHTML);
//      } 
//     });   
// }


// ************************ adding keywords*/
//for detecting button press
for(var i=0;i<numOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btninnerhtml=this.innerHTML;
        makeSound(btninnerhtml);
    })
}

// for detcting keyboard press
document.addEventListener("keypress",function(event){
    //    this.style.color="white";
    makeSound(event.key);
    
 });   

function makeSound(key){
 switch(key){
    case 'w':
       var tom1 = new Audio('sounds/tom-1.mp3');
       tom1.play();
    break;
    case "a":
       var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
    break;
    case "s":
       var tom3 = new Audio('sounds/tom-3.mp3');
       tom3.play();
    break;
    case "d":
       var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case "j":
       var snare = new Audio('sounds/snare.mp3');
       snare.play();
    break;
    case "k":
       var crash = new Audio('sounds/crash.mp3');
       crash.play();
    break;
    case "l":
       var kick = new Audio('sounds/kick-bass.mp3');
       kick.play();
    break;
    default:console.log(key);
} }

// document.querySelectorAll("button")[0].addEventListener("click",handleclick);
// document.querySelectorAll("button")[1].addEventListener("click",handleclick);
// function handleclick(){
//     alert("hlo");
//  }