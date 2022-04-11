/*const array = []
const arr = []
for (var i=0; i < 5; i++){
    array.push[arr[i]];
}



let count = 0
function myFunc(no, highest, Bid, i){
 // function hehe(me){
    //array.push(arr[i]);
  //const arr = [];
  //  hehe(nov);
    if (count <5){
        var number = document.getElementById(Bid).value;
        arr[i].push(number);
        count++;
        document.getElementById(no).innerHTML = count; 
        console.log(arr);
      // array.push(arr[number]);
        console.log(array);
    }
    else{
        max = arr[i].sort(function(a, b){return a - b});
        document.getElementById(highest).innerHTML = max[4];
      
    }
}

//const arr = []
let count = 0
//const arr = []
//const ie =[];
//const ie =[];
but = document.getElementsByClassName("but");
for (var i = 0; i < but.length; i++) {
    but[i].addEventListener("click", myFunc (no, highest, Bid, ie), {
        //Add function here
    
    }
,function number(bid){
     var number = document.getElementById(bid).value;
     return number;
}
,function myFunc(no, highest, Bid, ie){
   
    ie =[];
    //for (let i = 0; i < 5; i++) {
    ie.push(number(Bid));
    if (count == 0){
       // const ie =[];
       // var number = document.getElementById(Bid).value;
       // ie.push(number);
        count++;
        document.getElementById(no).innerHTML = count; 
        console.log(ie);
    }
    
    
    
    
    else if (count ==5){
        max = ie.sort(function(a, b){return a - b});
        document.getElementById(highest).innerHTML = max[4];
      
    }else  {
      //  var number = document.getElementById(Bid).value;
       // ie.push(number);
        count++;
        document.getElementById(no).innerHTML = count; 
        console.log(ie);

    }
 });   
}*/
/*
const arr = []
let count = 0
function myFunc(no, highest, Bid, ie){
    var number = document.getElementById(Bid).value;
    arr.push(number)
for ( var i =0; i<5; i++){
    count++;
        document.getElementById(no).innerHTML = count; 
        console.log(arr); 
}

var number = document.getElementById(Bid).value;
    arr.push(number)
for ( var i =0; i<5; i++){
    count++;
        document.getElementById(no).innerHTML = count; 
        console.log(arr); 
}
    if (count <5){
        
        
       
    }
    else{
        max = arr.sort(function(a, b){return a - b});
        document.getElementById(highest).innerHTML = max[4];
      
    }
}

}
*/

 // const arr = []
 //class image {
   //  constructor(no, highest, Bid, nov)
  // 
 
function myFunc(no, highest, Bid, nov){
    let count = 0;
const image = {picno: nov, count: count, bids: this.datastore,};

this.datastore = []
   

 // key = no of pic 
//value = bids
    this.add = function(key, value){
      // if (count<5){ 
        this.datastore.push({
            key: key,
            value: value
        });
        return this.datastore;
    //}
}
    
    this.max = function(key){
       return Math.max(this.datastore[key]);
       
    }
   // this.see = function(key){
  //      return this.datastore.key == key;
   // }
    
    if (image.picno.count <5){
       //for (var i =0; i<5; i++){
           var number = document.getElementById(Bid).value;
        this.add(nov, number);
       // image.bids.push(number);

//        
  //      arr.push(number)
    //    var lala = count++;
      //  lala.appendChild(no)
        
      this.image.count++;
        document.getElementById(no).innerHTML = this.image.count; 
        console.log(this.datastore);
   }
   else{
        //max = arr.sort(function(a, b){return a - b});
     //  if (count =)
        var maxbid = this.max(nov);
        document.getElementById(highest).innerHTML = maxbid;
      
    }
    console.log(image)
}