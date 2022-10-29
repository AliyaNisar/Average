var weight = [35,38,42,45,43,34,36,41,48,32];
function weight_average(){
 var sum=0
  for(i=0;i<weight.length;i++){
    sum= sum+weight[i]
  }
 console.log(sum)
 avg= sum/weight.length
 console.log(avg)

}

function setup() {
  createCanvas(400,400);
weight_average()
}

function draw() 
{
  background(30);
}

 

