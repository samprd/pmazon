const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
	item.addEventListener("wheel", (event) => {
		  if (!event.deltaY) {
			return;
		  }
		
		  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
		  event.preventDefault();
	});
}
