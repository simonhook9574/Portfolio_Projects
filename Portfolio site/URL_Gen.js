function setvars()
{
    var progidElement = document.getElementById("programme_id");
    var programme_id = progidElement.value;
    var chanidElement = document.getElementById("channel_id");
    var channel_id = chanidElement.value;
    var reidElement = document.getElementById("redirect_to");
    var redirect_to = reidElement.value;

    document.getElementById("Pid").innerHTML +=programme_id;
    document.getElementById("Cid").innerHTML +=channel_id;
    document.getElementById("Reid").innerHTML +=redirect_to;

}
/*function disableInputs() {
 var myInput = document.getElementById("Pid");
 myInput.disabled = true;
 }*/
function ClipBoard()
{
    holdtext.innerText = copytext.innerText;
    Copied = holdtext.createTextRange();
    Copied.execCommand("copy");
    alert("URL copied to Clipbaord");
}
