let sec=0;
let ms=0;
var timer;
var w;
var mini=1;
var a=1;
var score= new array(6);
var numberofscores=0;

///overlay on tiles starts
function on(){
    document.getElementById("overlay").style.display="block";

}
function off(){
    document.getElementById("overlay").style.display="none";
}
///overlay on tiles ends

//generate random number in tiles

function placingnumbers(min, max)
{  
    function generaterandom(min,max){
	let step1 = max - min + 1;
	let step2 = Math.random()* step1;
	let result = Math.floor(step2) + min;  
	return result;
    }
    function createarrayofnumbers(start,end){
        let myarray = [];
        for (let i=start ; i<=end; i++){
            myarray.push(i);
        }
        return myarray;
    }
    let numbersarray = createarrayofnumbers(1,20);
    for(var i=1; i<21; i++){
    
        let randomindex =generaterandom(0,numbersarray.length-1);
        let randomnumbers  = numbersarray[randomindex];
        numbersarray.splice(randomindex,1);
        let m=randomnumbers;
        document.getElementById("bt_"+ i).innerHTML=m;
        document.getElementById("bt_"+ i).value=m;

    }
}
///generation of random number in tiles ends

///onclick add 20 to existing numbers 
function add(id){
    
    var x;
    var y;
    var z;
    x = document.getElementById(id).value;
    z=parseInt(x);
   var btn=document.getElementById(id);
    if (Number(btn.innerHTML)==a)
    {
        if((Number(btn.innerHTML)+ 20 ) >40){ 
            btn.innerHTML="*";
        }
        else{
            y=Number(btn.innerHTML) + 20;
           btn.innerHTML=y;
        }
        a++;
        if(a==41)
        {
            a=1;
            endstopwatch();
            on();
            updatescores();

        }
    }
   
  

}


//Copy the localStorage to scores array

for(let i=0; i<localStorage.length || i<0; i++)
  {
    scores[i] = localStorage.getItem(i);
    numberofscores++;
  }
function updatelocal()
{
    for(let i=0; i<numberofscores; i++)
    {
      localStorage.setItem(i,scores[i]);
    }
}
function updatescores()
  {
    if(numberofscores<5)
    {
      scores[numberofscores]=extractscores();
      numberofscores++;
      scores.sort();

    }
    else {
      scores[numberofscores] = extractscores();
      scores.sort();
    }
    updatelocal();

  }
  function extractscores()
      {
        var t = document.getElementById("time").innerHTML; 
        return t;
      }

//stopwatch // 
  function stopwatch() {
    ms++;
    if (ms/1000 === 1) {
        ms = 0;
        sec++;
    }
    
    document.getElementById("time").innerHTML=  sec  + ":" + ms;
    startstopwatch();
    }

/* Start */
function startstopwatch() {
  w=setTimeout("stopwatch()", 1);
}

/* Stop */
function endstopwatch() {
    clearTimeout(w);
    w=0;
}

/* Clear */
function clearstopwatch() {
    endstopwatch();
    document.getElementById("time").innerHTML = "00 : 0000" ;
    sec = 0; ms = 0; 
}

function printscores()
{
  document.getElementById('btn2').innerHTML="clear score";
  document.getElementById('btn2').onclick=clearscores;
  ele=document.getElementById('lastfivescores');
  var a ='Top 5 scores </br>';

  for(let i=0; i<numberofscores; i++)
  {
    a = a+ scores[i] +'</br>'

  }
  elem.innerHTML= a;
}
function clearscores()
{
  ele=document.getElementById('btn2');
  ele.innerHTML="Print scores";
  ele.onclick=printscores;
  document.getElementById('lastfivescores').innerHTML="";
}

///calculating stopwatch done 
function onstart(){
    clearstopwatch();
    off();
    placingnumbers();
    startstopwatch();
}
