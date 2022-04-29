$(document).ready(function () {
$("#submit").click(function () {
	$.post("/request",
		{
			name: "Prathamesh",
			designation: "UG"
		},
		function (data, status) {
			console.log(data)
            // alert(data[0].name_recieved)
			localStorage.setItem("name","Prathamesh")
			localStorage.setItem("designation","UG")
		});
});
});
