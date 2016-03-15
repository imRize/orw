var texts = Array("WOW much emotions", "These pixels wow!", "Woooohooooo!","No...     no!","You can do this","What are the colors anyway? #daltonproblems","Is it over yet?","Ccccan't bbbbblink....", "Yes yes yes yes yes, no!", "Someone please hold my hand");

postMessage(texts[Math.floor(Math.random()*texts.length)]);
function rollIt ()
{
	setTimeout(function ()
	{
		postMessage(texts[Math.floor(Math.random()*texts.length)]);
		rollIt();
   }, 1500)
}
rollIt();