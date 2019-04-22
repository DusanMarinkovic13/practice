window.onload = function() {
    document.getElementById("exampleFormControlSelect1").disabled = true;
    //document.getElementById("btnSubmit").disabled = true;
    if (document.myForm.ime.value == "") {
        document.myForm.ime.focus();
        document.getElementById("btnSubmit").disabled = true;
        return false;
    }
    if (document.myForm.prezime.value == "") {
        document.myForm.prezime.focus();
        document.getElementById("btnSubmit").disabled = true;
        return false;
    }
    if (document.myForm.exampleCheck1.checked != true) {
        document.myForm.exampleCheck1.focus();
        document.getElementById("btnSubmit").disabled = true;
        return false;
    }

    if (document.myForm.exampleFormControlSelect1.value == "") {
        document.myForm.exampleFormControlSelect1.focus();
        document.getElementById("btnSubmit").disabled = true;
        return false;
    }
    document.getElementById("btnSubmit").disabled = false;


}
var prem = document.getElementById("exampleCheck1");
var memList = document.getElementById("exampleFormControlSelect1");
prem.onchange = function() {
    memList.disabled = !this.checked;
};

//var e = document.getElementById("ddlViewBy");
//var strUser = e.options[e.selectedIndex].text;
/* var e = document.getElementById("exampleFormControlSelect1");
var strUser = e.options[e.selectedIndex].value;
if (strUser == "1") {
    document.getElementById("wellNote").innerHTML = "Hello ";
} */