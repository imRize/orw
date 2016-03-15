function letsWin ()
{
	setTimeout(function ()
	{
		var x = Math.random();
		postMessage(x);
		letsWin();
   }, 100)
}
letsWin();