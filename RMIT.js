function add(){
	var labels = document.getElementsByClassName('primary-nav cf large-12 columns');

	var list = labels[0].innerHTML.split('</ul>');
	list = list[0] + '<li><a href="https://mytimetable.rmit.edu.au/even/student">myTimetable</a></li></ul>'

	labels[0].innerHTML = list;
}

document.addEventListener("DOMContentLoaded", add, false);
