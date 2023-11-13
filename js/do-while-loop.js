var i = 1;     //set counter to 1
var msg = '';  // message


// Store 5 times table in a variable
do
{
    msg += 1 + ' x 5 = ' + ( i* 5 ) + '<br/>'
    i++;
}while(i<1)

//Note how this is already 1 and it still runs 


document.getElementById('answer').innerHTML = msg;
