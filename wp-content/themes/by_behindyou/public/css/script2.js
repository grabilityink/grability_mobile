Splitting();


// Disable Animation
var button1 = document.getElementById("click-trigger");
var wrapper = document.getElementById("wrapper");

button1.addEventListener(
	"touchstart",
	function(e) {
		e.preventDefault();

		if (wrapper.classList.contains("animation")) {
			wrapper.classList.remove("animation");
			button1.textContent = "Start Animation";

		} else {
			wrapper.classList.add("forced");
			button1.textContent = "Stop Animation";
		}
	},
	true
);

button1.addEventListener("click", function(e) {
	if (wrapper.classList.contains("animation")) {
		wrapper.classList.remove("animation");
		button1.textContent = "Start Animation";

	} else {
		wrapper.classList.add("animation");
		button1.textContent = "Stop Animation";
	}
});