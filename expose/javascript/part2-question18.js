function showtime(){
  let d=new Date();
  let t=d.toLocaleTimeString();
  console.log(t);
}
var intervalID = setInterval(showtime, 1000);