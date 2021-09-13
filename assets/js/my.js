ip =
addr = "http://"+ ip +"/cgi-bin/cmd.py?cmd=" 
function create_pod() {
    var ref = document.getElementById("c_pod");
    ref.style.display = "block";
    var ref = document.getElementById("dt_pod");
    ref.style.display = "none";
    var ref = document.getElementById("ds_pod");
    ref.style.display = "none";
}

function delete_pod() {
    var ref = document.getElementById("c_pod");
    ref.style.display = "none";
    var ref = document.getElementById("dt_pod");
    ref.style.display = "block";
    var ref = document.getElementById("ds_pod");
    ref.style.display = "none";}

function describe_pod() {
    var ref = document.getElementById("c_pod");
    ref.style.display = "none";
    var ref = document.getElementById("dt_pod");
    ref.style.display = "none";
    var ref = document.getElementById("ds_pod");
    ref.style.display = "block";
}

function get_res(res){
    var k = "kubectl get " + res;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + k, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}

function create_p(){
    var i = document.getElementById("podn").value;
    var j = document.getElementById("imgn").value;
    var k = "kubectl run " + i + "  --image=" + j ;

    // alert(k);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + k, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}

function delete_res(res){
    var i = document.getElementById("d_podn").value;
    var k = "kubectl delete  " + res + " " + i;

    // alert(k);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + k, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}

function describe_res(res){
    var i = document.getElementById("des_podn").value;
    var k = "kubectl describe  " + res + " " + i;

    // alert(k);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + k, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}

function create_res(res){
    var i = document.getElementById("resn").value;
    var j = document.getElementById("r_imgn").value;
    var k = "kubectl create "+ res + "  " + i + "  --image=" + j ;

    // alert(k);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + k, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}

function run_cmd() {
    var i = document.getElementById("any_cmd").value;
    console.log(i);
    // alert(i);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", addr + i, true);
    xhr.send();

    xhr.onload = function(){
    var out = xhr.responseText;
    document.getElementById("output").innerHTML = out;
    }
}













function test(){
    var i = "akki"
    alert(i)
    // document.getElementById("output").innerHTML = "akki";
}
