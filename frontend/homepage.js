function Input() {
	alert("Submitted!");
	var weaponValue = document.getElementById("weaponid").value;
	var wearValue = document.getElementById("wearid").value;
	console.log(weaponValue, wearValue);
	var fso, f, r;
 	var ForReading = 1, ForWriting = 2;
	fso = new ActiveXObject("Scripting.FileSystemObject");
 	f = fso.OpenTextFile("../backend/items.txt", ForWriting, true);
 	f.Write(weaponValue, wearValue);
 	f.Close();
 	f = fso.OpenTextFile("../backend/items.txt", ForReading);
 	r = f.ReadLine();
 	console.log(r);
	console.log("Made to end");
	return false;
};