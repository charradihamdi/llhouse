var cr = document.querySelector('#addaccount')
var sign = document.querySelector('#sign-in')

var nuser = document.querySelector('#newusername')
var Email = document.querySelector('#authEmail')
var password = document.querySelector('#npassword')

var finput = document.querySelector('finput')


function storage() {
    sessionStorage.setItem("signin", `${sign}`);
    var x = sessionStorage.getItem(`${cr}`)
}
console.log(x)

function createA() {
    cr.style.display = ""
    sign.style.display = "none"

}


















/*var mysql = require('mysql');
var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'admin',
    })*/
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE log (id INTEGER(8) ,email VARCHAR(255), password INTEGER(24))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});*/
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO log (id, email,password) VALUES (12, 'Highway 37',12)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});*/
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM log", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

window.onload = () => {
    this.sessionStorage.setItem("username", "sakaos_useroo")
    this.sessionStorage.setItem("password", "sakaos_password")
}

var input = document.getElementById('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = () => { return false }
login.onclick = () => {
        if ((inpt[0] != "") && (inpt[1] != "")) {

        } else {
            if (inpt[0] == "") {
                input[0].nextElementSibling.textContent = "user name is empty"
                setTimeout(() => {
                    input[0].nextElementSibling.textContent = ""
                }, 2000)
            }
        }

    }*/
// Enregistrer des données dans sessionStorage
/*sessionStorage.setItem('id', 'softwere develop');
let data = sessionStorage.getItem('id')
console.log(data)
alert(data)*/
/*
var input = document.getElementById("finput");
var login = document.getElementById('log-in');
var form = document.querySelector('form');

function post() {
    const obj = { username: input, password: '13' }

    sessionStorage.setItem('person', JSON.stringify(obj))

    alert(sessionStorage.getItem('person'))
}*/



/*for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i)
    if (inpu[0] == "") {
        alert("val null")
    }

}*/