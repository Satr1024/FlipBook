function _(selector,b=false)
{
	if(b==true)
	{
		return document.querySelectorAll(selector);
	}
	else{

		return document.querySelector(selector);
	}

}

let prev=_("#prev");
let next=_("#next");

let book=_(".book");


let p1=_("#p1");
let p2=_("#p2");
let p3=_("#p3");

let currentPage=1;
let numofPage=3;
let maxPage=numofPage+1;

prev.addEventListener("click",prevPage);
next.addEventListener("click",nextPage);


if(currentPage==1)
{
	prev.style.visibility="hidden";
}

function openBook()
{
	prev.style.transform="translateX(-20vw)";
	book.style.transform="translateX(10vw)"
	next.style.transform="translateX(17vw)";
	prev.classList.add("fadeIn");
	next.classList.add("fadeIn");
	setTimeout(function()
	{
		prev.classList.remove("fadeIn");
		next.classList.remove("fadeIn");

	},500);
}

function closeBook()
{
	prev.style.transform="translateX(0px)";
	book.style.transform="translateX(0px)"
	next.style.transform="translateX(0px)";
	prev.classList.add("fadeIn");
	next.classList.add("fadeIn");
	setTimeout(function()
	{
		prev.classList.remove("fadeIn");
		next.classList.remove("fadeIn");

	},500);
}

function prevPage()
{
	if(currentPage>1)
	{
		next.style.visibility="visible";	
		prev.style.visibility="visible";		
	}

	


	if(currentPage>1)
	{
		switch(currentPage)
		{
			case 2:
				closeBook();
				p1.classList.remove("flipped");
				p1.style.zIndex=2;
				break;

			case 3:
				p2.classList.remove("flipped");
				p2.style.zIndex=1;
				break;

			case 4:
				p3.classList.remove("flipped");
				p3.style.zIndex=0;
				break;



			default:
				throw new Error("Page Error");
		
		}
		currentPage-=1;
		
		if(currentPage==1)
		{
			prev.style.visibility="hidden";	
		}


	}

}

function nextPage()
{

	if(currentPage==maxPage-1)
	{
		next.style.visibility="hidden";
	}

	if(currentPage<maxPage)
	{

		switch(currentPage)
		{
			case 1:
				openBook();
				p1.classList.add("flipped");
				p1.style.zIndex=1;
				break;

			case 2:
				p2.classList.add("flipped");
				p2.style.zIndex=2;
				break;

			case 3:
				p3.classList.add("flipped");
				p3.style.zIndex=3;
				break;

			default:
				throw new Error("Page Error");

		}

		currentPage+=1;

		if(currentPage>1)
		{
			prev.style.visibility="visible";			
		}
		

	}
}

