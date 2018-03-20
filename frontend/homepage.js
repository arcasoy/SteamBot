function Input() {
	alert("Submitted!");
	var weaponValue = document.getElementById("weaponid").value;
	var wearValue = document.getElementById("wearid").value;
	console.log(weaponValue, wearValue);
	return false;
};

/*function WriteDemo() 
{
 var fso, f, r;
 var ForReading = 1, ForWriting = 2;
 fso = new ActiveXObject("Scripting.FileSystemObject");
 f = fso.OpenTextFile("c:\\testfile.txt", ForWriting, true);
 f.Write("Hello world!");
 f.Close();
 f = fso.OpenTextFile("c:\\testfile.txt", ForReading);
 r = f.ReadLine();
 return(r);
}*/