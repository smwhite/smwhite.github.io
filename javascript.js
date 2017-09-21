function hidediv() {
    var x = document.getElementById('block1');
    if (x.style.display === 'none')
	{
        x.style.display = 'block';
    } 
	else 
	{
        x.style.display = 'none';
    }
}


function colordiv() {
    var x = document.getElementById('block1');
    if (x.style.backgroundColor === 'blue')
	{
        x.style.backgroundColor = 'red';
    } 
	else 
	{
        x.style.backgroundColor = 'blue';
    }
}