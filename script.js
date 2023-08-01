//your JS code here. If required.

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = " <div id="sizeInfo"><h1>Width: " + w + " â€¢ Height: " + h + "</h1>"	</div>;
}