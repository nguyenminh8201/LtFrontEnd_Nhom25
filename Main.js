function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Dang Ky Thanh Cong");
}
function signin(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    // var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
        alert("Vui Long Nhap UserName Va Password");
    } else if (
        username == data.username &&
        // email == data.email &&
        password == data.password
    ) {
        alert("Dang Nhap Thanh Cong");
        window.location.href = "PageHome.html";
    } else {
        alert("Dang Nhap That Bai");
    }
}
