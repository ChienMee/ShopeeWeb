var id = document.getElementById("id");
var pass = document.getElementById("pass");
var repass = document.getElementById("repass");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var agr = document.getElementById("security");
var s = document.getElementById("complete");
function checkform(){
    if(id.value == ""){
        document.getElementById("idn").innerHTML = "* tài khoản không được để trống ";
    }
    else{
        document.getElementById("idn").innerHTML = "";
    }
    if(pass.value != repass.value){
        document.getElementById("passn").innerHTML = "* mật khẩu không trùng nhau";
    }
    else{
        document.getElementById("passn").innerHTML ="";
    }
    if(validateEmail(email.value) == false){
        document.getElementById("emailn").innerHTML = "email không hợp lệ ";
    }
    else{
        document.getElementById("emailn").innerHTML = "";
    }
    if(validatePhoneNumber(tel.value) == false){
        document.getElementById("teln").innerHTML = "số điện thoại không hợp lệ";
    }
    else{
        document.getElementById("teln").innerHTML = "";
    }
    if( id.value != "" && pass.value == repass.value && validateEmail(email.value) == true && validatePhoneNumber(tel.value) == true && agr.checked == true)
    {
        alert("chúc mừng bạn đã đăng ký thành công");
        window.location.href="index.html";
    }
    else{
        alert("bạn phải điền đầy đủ thông tin tài khoản và đồng ý với chính sách cùng với điều khoản của shopee");
    }
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
function validatePhoneNumber(tel) {
    var regex = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    return regex.test(tel);
}