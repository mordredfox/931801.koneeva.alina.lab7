	function draw(figu)
	{
		var n = document.getElementById('number').value;
		for (i = 0; i < n; i++) {
			var el = document.createElement('div');
			el.className=figu;
			create(el);
		}
	}
	function create(elem){
		if (elem.className == 'triangle')
		{
			var size = getElement(100,200);
			elem.style.border = size + "px solid transparent";
			elem.style.borderBottom = size + "px solid blue";	
			elem.onclick = function() {elem.style.borderBottom= size + "px solid yellow"};
		} else {
			elem.style.width = getElement(100,200) + "px";
			elem.style.height = elem.style.width;
			elem.onclick = function() {elem.style.backgroundColor="yellow"};
		}
		elem.ondblclick = function(){elem.style.display = "none"};
		document.body.appendChild(elem);
		elem.style.top = getElement(50,500) + "px";
		elem.style.left = getElement(0,1300) + "px";
	}
	function getElement(min,max)
	{
		return Math.random() * (max - min) + min;
	}