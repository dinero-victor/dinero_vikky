window.addEventListener("DOMContentLoaded", () => {
	function clock() {
		const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let d = new Date();
		let days = day[d.getDay()];
		let session = "AM";
		let h = new Date().getHours();
		let m = new Date().getMinutes();
		let s = new Date().getSeconds();

		if (h == 0) {
			h = 12;
		}
		if (h > 12) {
			h = h - 12;
			session = "PM";
		} 

		document.getElementById('date').innerHTML =` ${days}, ${h} : ${m} : ${s} ${session}`;
	}

	setInterval(clock, 1000);

});

let btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
	btn.addEventListener("click", () => {
		let text = document.getElementById("display").value;
		let lnt = text.length;
		if (lnt >= 15) {
			document.getElementById("display").style.fontSize = "15px";
		} else {
			document.getElementById("display").style.fontSize = "36px";
		}
	})
})