
var form = document.getElementById('sub');
form.addEventListener('click' , render);

var info = document.getElementById('info');

function render(){

    var list = document.getElementById('list');
    var liEl = document.createElement('li');
    list.appendChild(liEl);
    liEl.textContent = 'i forgot how to remove the defult ';
    
    
}

/////////////////////////////////

/////// Q2 ////////

var input = 0 ;
var arrayOfNumbers = [0,1,2];
var counter = 0 ;

function greaterThan ( arrayOfNumbers , input) {

for ( var i = 0 ; i < arrayOfNumbers.leangth ; i++){
    if ( input > arrayOfNumbers[i]){
        counter++ ;
    }
}

return counter;
}

/////////////////
var stringArr = [];

function allCaps( stringArr){

    for(var i = 0 ; i < arrayOfNumbers.leangth ; i++){
        
    }


}

///////////////////
function stars(){
    var star = '';
    for (var i = 0 ; i < 6 ; i++){

        for (var i = 0 ; i < 6 ; i++) {

            star = star + '*';
        }
        console.log(star);

    }

}

///////////////