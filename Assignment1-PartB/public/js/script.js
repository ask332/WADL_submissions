$(document).ready(function () {
$("#submit").click(function () {
	$.post("/request",
		{
			name: "Abhishek",
			designation: "B-Tech"
		},
		function (data, status) {
			console.log(data)
            // alert(data[0].name_recieved)
			localStorage.setItem("name","Abhishek")
			localStorage.setItem("designation","B-Tech")
		});
});
});
