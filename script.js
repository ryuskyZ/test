const pw = document.getElementById("pw");
const showpw = document.getElementById("showpw");
showpw.addEventListener("change",function() {
  if (this.checked){
    pw.type = "text"
  }
  else{
    pw.type = "password";
  }
});