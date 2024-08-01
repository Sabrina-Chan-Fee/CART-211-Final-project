//flashligth
var pos=document.documentElement;
pos.addEventListener('mousemove',e=>{
   pos.style.setProperty('--x',e.clientX+'px') 
   pos.style.setProperty('--y',e.clientY+'px')
   let points=document.getElementsByTagName('span');
   // console.log(points);
  
   for(let i=0;i<points.length;i++){
      // console.log(points[i]);
      let range =points[i].getBoundingClientRect();
      // console.log(range.top);
      let xL=range.left;
      let yT=range.top;
      let xR=range.right;
      let yB=range.bottom;

      let ogColor=points[i].style.color;

      if((e.clientX>(xL-120) && e.clientX<(xL+120)) && (e.clientY>(yT-120) && e.clientY<(yT+120))){
         if((e.clientX>(xR-120) && e.clientX<(xR+120)) && (e.clientY>(yB-120) && e.clientY<(yB+120))){
           if((e.clientX>(xR-120) && e.clientX<(xR+120)) && (e.clientY>(yT-120) && e.clientY<(yT+120))){
            if((e.clientX>(xL-120) && e.clientX<(xL+120)) && (e.clientY>(yB-120) && e.clientY<(yB+120))){
               points[i].style.color='red';
               points[i].style.transform='0.4s';
            }
           } 
         }
         
      }
      else{

      }
   }
  
})

// let soundfile = new Audio("sound/click.wav");
// function myFunction(){

//    soundfile.play();

   
// }

