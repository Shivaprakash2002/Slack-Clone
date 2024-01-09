const user = document.getElementById('email');
const fname = document.getElementById('fname');
const pass = document.getElementById('pass');
const cpass = document.getElementById('con-pass');
const num = document.getElementById('num');

var obj = {};
var ar = [];
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
var numregex = /^\d{10}$/g;


var numvalid = false,emailvalid = false;
let c = 0;
function getvalue(e,i){
    if(i === 'email'){
        obj["email"] = e.target.value;
        emailvalid = pattern.test(e.target.value);
        console.log(emailvalid);
        c = emailvalid === true ? ++c : 0;
        console.log(c);
    }
    if(i === 'fname'){
        obj["fname"] = e.target.value;
    }
    if(i === 'pass'){
        obj["pass"] = e.target.value;
        console.log(e.target.value)
    }
    if(i === 'con-pass'){
        obj["con-pass"] = e.target.value;
    }
    if(i === 'num'){
        obj["num"] = e.target.value;
        numvalid = numregex.test(e.target.value);
    }
}

var btn = document.querySelector('.reg-clk');
btn.addEventListener("click",myfun)

const myfun = () => {

    console.log(obj);

    if (obj["pass"] === obj["con-pass"] && (obj["pass"] !== undefined && obj["con-pass"] !== undefined))  {
        console.log("true");
        cpass.style.border = "2px solid green";
        pass.style.border = "2px solid green";
    } else {
        console.log("false");
        pass.style.border = "2px solid red";
        cpass.style.border = "2px solid red";
    }

    if(obj.length !== 0 && numvalid){
        
        ar.push(obj);
        localStorage.setItem("userdata", JSON.stringify(ar));

        obj = {};
        user.value = "";
        fname.value = "";
        pass.value = "";
        cpass.value = "";
        num.value = "";
    }
    else{
        alert("plese enter the valid number");
    }
};
