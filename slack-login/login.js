var uname = document.getElementById("uname");
var pass = document.getElementById("pass");
var btn = document.querySelector('.login-clk');

function getValue(event,type){
    if(type === 'user'){
        obj["username"] = event.target.value;
    }
    else{
        obj["password"] = event.target.value;
    }
}
var ob = JSON.parse(localStorage.getItem("userdata"));

var obj = {};
btn.addEventListener("click",() => {

    if((obj.username === ob[0].email && obj.password === ob[0].pass)){
        console.log(true);
        window.open("slack-page/index.html","_blank");
    }
    uname.value = "";
    pass.value = "";
    obj = {};
})

