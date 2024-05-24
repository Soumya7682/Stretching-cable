var path="M 10 100 Q 500 100 990 100"
var finalPath="M 10 100 Q 500 100 990 100"
var row=document.querySelector("#row")

row.addEventListener("mousemove",function(dets){
path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
gsap.to("svg path",{
    attr:{ d:path },
    duration:0.2,
    ease:"power3.out"
})

})
row.addEventListener("mouseleave",function(){
gsap.to("svg path" ,{
    attr:{d:finalPath},
    duration:1.5,
    //ease:"bounce.out"
    ease:"elastic.out(1,0.2)",
})

})


//row.addEventListener("mouseenter",function(dets){

  //  console.log("entered")
//})
//row.addEventListener("mouseleave",function(){

  //  console.log("leaved")
//})