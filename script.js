const arr = []
let count = 0
function myFunc(no, highest, Bid){
    if (count <5){
        var number = document.getElementById(Bid).value;
        arr.push(number)
        count++;
        document.getElementById(no).innerHTML = count; 
        console.log(arr);
    }
    else{
        max = arr.sort(function(a, b){return a - b});
        document.getElementById(highest).innerHTML = max[4];
      
    }
}


