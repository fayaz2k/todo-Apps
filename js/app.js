/*var a, b, c, d, e,i;*/
function login(){
                var user = window.document.loginForm.inputusr.value;
                var pass = window.document.loginForm.inputpas.value;
                var yrnam = window.document.loginForm.inputnme.value;
                    
                    user = user.toLowerCase();
                    pass = pass.toLowerCase();
                    var text = "";
                    text += " Hello " + yrnam;
                if(user === "fayaz" && pass === "fayaz"){
                    document.getElementById("greeting").innerHTML = text;
                    document.getElementById("navi-right-hide-ul").style.display = "block";
                    document.getElementById("java-ul").style.display = "none";
                    document.getElementById("html-ul").style.display = "none";
                    document.getElementById("css-ul").style.display = "none";
                    document.getElementById("working-area").style.display = "block"; 
                    
                    //document.getElementById("Navi-mobil").style.display = "block"; its a bitch
                    document.getElementById("Navi-mobil").style.visibility = "visible"
                    document.getElementById("logindiv").style.display = "none";  
    } /*if close*/
} /*login function close*/


function home(){
            document.getElementById("java-ul").style.display = "none";
            document.getElementById("html-ul").style.display = "none";
            document.getElementById("css-ul").style.display = "none";
            document.getElementById("working-area").style.display = "none";
            document.getElementById("logindiv").style.display = "block"; 
            document.getElementById("prog").innerHTML = "Programming"; 
}

function java(){
            document.getElementById("java-ul").style.display = "block";
            document.getElementById("html-ul").style.display = "none";
            document.getElementById("css-ul").style.display = "none";
            document.getElementById("prog").innerHTML = "Javascript";
}

function html(){
            document.getElementById("html-ul").style.display = "block";
            document.getElementById("java-ul").style.display = "none";
            document.getElementById("css-ul").style.display = "none";
            document.getElementById("prog").innerHTML = "H.T.M.L";
            
}

function css(){
            document.getElementById("css-ul").style.display = "block";
            document.getElementById("java-ul").style.display = "none";
            document.getElementById("html-ul").style.display = "none";
            document.getElementById("prog").innerHTML = "Style Sheet";
}



function showDiv(select){
    if(select.value == 1){
        document.getElementById("html-ul").style.display = "none";
        document.getElementById('java-ul').style.display = "none";
        document.getElementById('css-ul').style.display = "none";
        document.getElementById("prog").innerHTML = "Programming"; 
    }
    else if(select.value == 2){
        document.getElementById('java-ul').style.display = "block";
        document.getElementById("html-ul").style.display = "none";
        document.getElementById('css-ul').style.display = "none";
        document.getElementById("prog").innerHTML = "JavaScript"; 
    }
    else if(select.value == 3){
        document.getElementById('java-ul').style.display = "none";
        document.getElementById("html-ul").style.display = "block";
        document.getElementById('css-ul').style.display = "none";
        document.getElementById("prog").innerHTML = "H.T.M.L"; 
    }
      else if(select.value == 4){
        document.getElementById("html-ul").style.display = "none";
        document.getElementById('java-ul').style.display = "none";
        document.getElementById('css-ul').style.display = "block";
        document.getElementById("prog").innerHTML = "Style Sheet"; 
    }
}

/*function showjsc(jscript){
    var user = jscript.value;
    if(user == 1){
        document.getElementById('js-app-1').style.display = "block";
    }
    else if(user.value == 2){
       document.getElementById('js-app-2').style.display = "block";
    }
    else if(jscript.value == 3){
       document.getElementById('js-app-3').style.display = "block";
    }
    else if(jscript.value == 4){
       document.getElementById('js-app-4').style.display = "block";
    }
    else if(jscript.value == 5){
       document.getElementById('js-app-5').style.display = "block";
    }
    else if(jscript.value == 6){
       document.getElementById('js-app-6').style.display = "block";
    }
}*/


function js_app1(){
    document.getElementById('js-app-1').style.display = "block";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app2(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "block";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app3(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "block";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}
function js_app4(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "block";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app5(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "block";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app6(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "block";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app7(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "block";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app8(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "block";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
    
}

function js_app9(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "block";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app10(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "block";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app11(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "block";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app12(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "block";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app13(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "block";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app14(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "block";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}
function js_app15(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "block";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}
function js_app16(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "block";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}
function js_app17(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "block";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app18(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "block";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app19(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "block";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app20(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "block";
    document.getElementById('js-app-21').style.display = "none";
}

function js_app21(){
    document.getElementById('js-app-1').style.display = "none";
    document.getElementById('js-app-2').style.display = "none";
    document.getElementById('js-app-3').style.display = "none";
    document.getElementById('js-app-4').style.display = "none";
    document.getElementById('js-app-5').style.display = "none";
    document.getElementById('js-app-6').style.display = "none";
    document.getElementById('js-app-7').style.display = "none";
    document.getElementById('js-app-8').style.display = "none";
    document.getElementById('js-app-9').style.display = "none";
    document.getElementById('js-app-10').style.display = "none";
    document.getElementById('js-app-11').style.display = "none";
    document.getElementById('js-app-12').style.display = "none";
    document.getElementById('js-app-13').style.display = "none";
    document.getElementById('js-app-14').style.display = "none";
    document.getElementById('js-app-15').style.display = "none";
    document.getElementById('js-app-16').style.display = "none";
    document.getElementById('js-app-17').style.display = "none";
    document.getElementById('js-app-18').style.display = "none";
    document.getElementById('js-app-19').style.display = "none";
    document.getElementById('js-app-20').style.display = "none";
    document.getElementById('js-app-21').style.display = "block";
}

/*Hello 5 times 1*/

function hello(){

     a = window.document.jsForm.jsinput1.value;
     b = window.document.jsForm.jsinput2.value;
    var text;
    text = "<br/>";
        for (i = 1; i <=b; i++) {
            /*text += "<br/>" + i+ " : "+ user1  + "<br/>" ; */

            text += "<br/>" + i+ " : "+ a  + "<br/>" ;               
        }
        /*text += "<br/>";*/
    document.getElementById("js_demo1").innerHTML = text;
}

 /*Pring numrics 2*/

function numeric(){
   var a = window.document.jsForm2.jsinput1.value;
   var b = window.document.jsForm2.jsinput2.value;

     /*a = parseInt(a);
     b = parseInt(b);*/
     a = Number(a);
     b = Number(b);
     
    var text = "";
     for(var i=a; i<=b; i++){
         text +=  "<br/>"+i+"<br/>" ;
         document.getElementById("js_demo2").innerHTML = text;
     }
}

 /*multiplication table 3*/

 function tables(){
      a = window.document.jsForm3.jsinput1.value;
      b = window.document.jsForm3.jsinput2.value;
      c = window.document.jsForm3.jsinput3.value;

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

      var text = "" ;
      text = "<br/>";
      for(i=b; i<=c; i++){
            
            text += "<br/>" +a + " * " + i + " = "+ a * i + "<br/>" ;
            document.getElementById("js_demo3").innerHTML = text;
        }
        
 }

/*----------------------------
  Write each element on new line with the help of for loop. app 4
----------------------------*/
function newline(){

     var text = "";
     var numbr = window.document.jsForm4.jsinput1.value;
    for (var i = 0; i <numbr; i++){

        for(var j =0; j<numbr; j++){

        var fruits = [];
        var b = prompt("enter value");
        fruits.push(b);
        chk = "[ "+j+" ] "+fruits;
        /*chk = [j]+fruits;*/
        text += "<br/>" + chk  + "<br/>" ;
        document.getElementById("js_demo4").innerHTML = text;
        }
break;
     
}

}

/*----------------------------
   print Index of the arrays 5
----------------------------*/
function showindexs(){

     var text = "";
     var numbr = window.document.jsForm5.jsinput1.value;
    for (var i = 0; i <numbr; i++){

        for(var j =0; j<numbr; j++){

        var fruits = [];
        
        var b = prompt("enter value");
        fruits.push(b);
        chk = "Element at index"+" [ "+j+" ] "+" is : "+fruits;
        /*chk = [j]+fruits;*/
        text += "<br/>" + chk  + "<br/>" ;
        document.getElementById("js_demo5").innerHTML = text;
        }
break;
     
}

}

/*----------------------------
   print N-itme in array 6
----------------------------*/

function n_itmes(){

     var text = "";
     var numbr = window.document.jsForm6.jsinput1.value;
    for (var i = 0; i <numbr; i++){

        for(var j =0; j<numbr; j++){

            var fruits = [];
        
        var b = prompt("enter value");
        fruits.push(b);
        /*fruits = fruits;*/
        chk = "Element at index"+" [ "+j+" ] "+" is : "+fruits;
        /*chk = [j]+fruits;*/
        text += "<br/>" + chk  + "<br/>" ;
        document.getElementById("js_demo6").innerHTML = text;
        
        }
        document.getElementById("js_demo6_2").innerHTML = "Number of items " +[j];
break;
     
}

}

/*---------------------------------------
    Generate the following series 7
---------------------------------------*/

function g_series(){
     var text = "";
     var reverse = "";
     var even = "";
     var odd = ""; 
     var series = "";
        var a = window.document.jsForm7.jsinput1.value;
        /*counting*/
        for (var i = 0; i <=a; i++){ 
        text += i+",";
        document.getElementById("js_demo7").innerHTML = text;
        document.getElementById("js_demo7h").innerHTML = "Counting";
}

        /*Reverse counting*/

        for (var j = a; j >=0; j--){
        reverse += j+",";
        document.getElementById("js_demo7_2").innerHTML = reverse;
        document.getElementById("js_demo7_2h").innerHTML = "Reverse Counting";
 }
            /*Even*/

        for (var i = 0; i<=a ; i++){    
        even += i*2+",";
        document.getElementById("js_demo7_3").innerHTML = even;
        document.getElementById("js_demo7_3h").innerHTML = "Even";
}

        /*Odd*/

        for (var i = 1; i<a; i++){  
        odd += i*2-1+",";
        document.getElementById("js_demo7_4").innerHTML = odd;
        document.getElementById("js_demo7_4h").innerHTML = "Odd";
}
        /*series*/

    for (var i = 1; i<a; i++){
         /*document.write(i*2+"k"+",");*/
         series += i*2+"k"+",";
        document.getElementById("js_demo7_5").innerHTML = series;
        document.getElementById("js_demo7_5h").innerHTML = "Series";

 }

}

/*---------------------------------------
        “Search by user input 8” 
---------------------------------------
*/
function cake_search(){
    var cake = "";
    var product = ["cake","apple pie", "cookie","chips", "patties"];
        var a = window.document.jsForm8.jsinput1.value;

        if (a === product[0]){  
        cake += product[0] + " is available at index "+[0]+" in our bakery ";
        document.getElementById("js_demo8").innerHTML = cake;
}
   else if (a === product[1]){
        cake += product[1] + " is available at index "+[1]+" in our bakery ";
        document.getElementById("js_demo8").innerHTML = cake;
}
   else if (a === product[2]){
       cake += product[2] + " is available at index "+[2]+" in our bakery ";
       document.getElementById("js_demo8").innerHTML = cake;
}
   else if (a === product[3]){
       cake += product[3] + " is available at index "+[3]+" in our bakery ";
       document.getElementById("js_demo8").innerHTML = cake;
}
   else if (a === product[4]){
       cake += product[4] + " is available at index "+[4]+" in our bakery ";
       document.getElementById("js_demo8").innerHTML = cake;
}
  else{
    cake += a+ " is not available";
    document.getElementById("js_demo8").innerHTML = cake;
}

}

/*-------------------------------
    Identify the largest number 9
-------------------------------*/


function larg_number(){
   var text = "";
   var lrg = "";
     var numbr = window.document.jsForm9.jsinput1.value;
        for (var i = 0; i <numbr; i++){
        for(var j =0; j<numbr; j++){
        var fruits = [];
        var b = +prompt("enter value");
        fruits.push(b);
        var chk = fruits+" "+", ";
        /*chk = [j]+fruits;*/
        text += chk;
        document.getElementById("js_demo9").innerHTML = "Array Items "+text;
        lrg = Math.max(fruits);
        document.getElementById("js_demo9_2").innerHTML = "Largest number is "+ lrg;
        }
break;
     
}

}

/*----------------------------------------
    Identify the smallest number 10
----------------------------------------*/

function smallest_numbr(){
   var text = "";
   var smll = "";
     var numbr = window.document.jsForm10.jsinput1.value;
        for (var i = 0; i <numbr; i++){
        for(var j =0; j<numbr; j++){
        var fruits = [];
        var b = +prompt("enter value");
        fruits.push(b);
        var chk = fruits+" "+", ";
        /*chk = [j]+fruits;*/
        text += chk;
        document.getElementById("js_demo10").innerHTML = "Array Items "+text;
        
        }
        smll += Math.min(fruits);
        document.getElementById("js_demo10_2").innerHTML = "Smallest number is "+ smll;
break;
     
}

}

/*----------------------------------------
    Identify the Largest/smallest number js-app-11
----------------------------------------*/

function small_large_number(){
   var text = "";
   
   
     var numbr = window.document.jsForm11.jsinput1.value;
        for (var i = 0; i <numbr; i++){
            
            for(var j =0; j<numbr; j++){
            var fruits = [];
            var b = +prompt("enter value");
            fruits.push(b);
            /*fruits = fruits;
            b = b;*/
            var chk = fruits+" "+", ";
            /*chk = [j]+fruits;*/
            text += chk;
            document.getElementById("js_demo11").innerHTML = "Array Items "+text;
            var lrg = "";
            lrg = Math.max(fruits);
            document.getElementById("js_demo11_2").innerHTML = "Largest number is "+ lrg;
            
        }
        var smll = "";
        smll = Math.min(fruits);
        document.getElementById("js_demo11_3").innerHTML = "Smallest number is "+smll;
break;
     
}

}

/*----------------------------------------
    Multiples of 5 ranging 1 to 100 js-app-12
----------------------------------------*/

function multiple_range(){
    var text = "";
     var a = window.document.jsForm12.jsinput1.value;
     for (var i=1; i<= a; i++){
     var mrang = 5*i+"<br>";
     text +=" [ "+i+" ] " +mrang;
    document.getElementById("js_demo12").innerHTML = text;


}

}

/*----------------------------------------
    HTML table in your browser using JS. js-app-13
----------------------------------------*/

function student_data(){
    document.getElementById("js_demo13").style.display = "none";
    var nm = "";
    var lm = "";
    var sc = "";
    var empty = "";

    var a = window.document.jsForm13.jsinput1.value;

    for(var i =0; i<a; i++){

        var student_names = [];
        var student_lname = [];
        var student_score = [];
        
        
    if(i === 0){
        var anam = prompt("Enter Name");            
            student_names.push(anam);
            nm += student_names;
            document.getElementById("ist_n").innerHTML = student_names;

        var blnam = prompt("Enter Last Name");
            student_lname.push(blnam);
            lm += student_lname;
            document.getElementById("ist_l").innerHTML = student_lname;

        var cscore = +prompt("Enter Your Marks");
            student_score.push(cscore);
            sc += student_score;
            document.getElementById("ist_s").innerHTML = student_score;
    } /*if close*/    
    else if(i === 1){
        var anam = prompt("Enter Name");            
            student_names.push(anam);
            nm += student_names;
            document.getElementById("sec_n").innerHTML = student_names;

        var blnam = prompt("Enter Last Name");
            student_lname.push(blnam);
            lm += student_lname;
            document.getElementById("sec_l").innerHTML = student_lname;

        var cscore = +prompt("Enter Your Marks");
            student_score.push(cscore);
            sc += student_score;
            document.getElementById("sec_s").innerHTML = student_score;
    } /* 1 else if close*/

    else if(i === 2){
        var anam = prompt("Enter Name");            
            student_names.push(anam);
            nm += student_names;
            document.getElementById("thrd_n").innerHTML = student_names;

        var blnam = prompt("Enter Last Name");
            student_lname.push(blnam);
            lm += student_lname;
            document.getElementById("thrd_l").innerHTML = student_lname;

        var cscore = +prompt("Enter Your Marks");
            student_score.push(cscore);
            sc += student_score;
            document.getElementById("thrd_s").innerHTML = student_score;
    } /* 2 else if close*/

    else if(i === 3){
        var anam = prompt("Enter Name");            
            student_names.push(anam);
            nm += student_names;
            document.getElementById("frth_n").innerHTML = student_names;

        var blnam = prompt("Enter Last Name");
            student_lname.push(blnam);
            lm += student_lname;
            document.getElementById("frth_l").innerHTML = student_lname;

        var cscore = +prompt("Enter Your Marks");
            student_score.push(cscore);
            sc += student_score;
            document.getElementById("frth_s").innerHTML = student_score;
    } /* 3 else if close*/

      
    } /*i for loop close*/

} /*function student_data close*/

/*--------------------------------------
array to desired stop value. Given array 14
--------------------------------------*/
/*
        work to do

*/

/*--------------------------------------
    Write each element on new line 15
--------------------------------------*/

function js15teen(){
    var text = "";
    var a = [ ["1 2 3"] , ["4 5 6"] , ["7 8 9"] ];
    for (var i = 0; i <a.length; i++){
        /*document.write(a[i]+"<br>");*/
     chk = a[i]+"<br>";
     text += chk;   
    document.getElementById("js_demo15").innerHTML = text;
    } /*i for loop close*/
}  /*js15teen close*/

/*------------------------------------------------
Write a program to repeatedly print the value decreasing by 0.5 each time 16
------------------------------------------------*/
function js16teen(){
    var text = "";
    var chk = "";
    var a = window.document.jsForm16.jsinput1.value;
    var c = +prompt("Decrease values");

 var b = [];
 for(var i = 0 ; i < a*2+1; i++){
      
        b.push(a); 
        
            a=a-c;
 }
 for(var j = 0 ; j < b.length; j++){
chk = b[j]+" <br/> " ;
text += chk;
document.getElementById("js_demo16").innerHTML = text;
 }

} /*js16teen close*/

/*------------------------------------
    The even/odd reporter 17
------------------------------------*/

function js17teen(){

  var a = window.document.jsForm17.jsinput1.value;
  var b = window.document.jsForm17.jsinput2.value;
      a = parseInt(a);
      b = parseInt(b);
  var text = "<br/>";
    
        for (i = a; i <=b; i++) {
        
           if(i%2==0){
               var chk2 = "<br/>" + i  + " is an Even " + "<br/>" ;
               text += chk2;              
           } 
           else {
               var chk = "<br/>" + i  +" is an Odd "+ "<br/>" ;
              text += chk ;             
           }
           
           document.getElementById("js_demo17").innerHTML = text;        
        } /*i for looop close*/
} /*js17teen close*/


function js18teen(){
    var a = window.document.jsForm18.jsinput1.value;
    var chk = "";
    var text = "";
    for(i = 1; i<=a; i++){
        var fruits = [];
        var c = prompt("Enter value");
            c = parseInt(c);
            fruits.push(c);
            chk = fruits*c;
            text += chk;
            console.log(text);
            document.getElementById("js_demo18").innerHTML = text;
              /*break;*/
    } /*i loop close*/

 
} /*js18teen close*/


function js19teen(){
     
   var a = window.document.jsForm19.jsinput1.value;
       a = parseInt(a);
   var b = window.document.jsForm19.jsinput2.value;
       a = parseInt(a);
   var c = window.document.jsForm19.jsinput3.value;
   
   for(var i=b; i>=a; i--){
      for(var j=a; j<=i; j++){       
         document.getElementById("js_demo19").innerHTML += c + " ";
        }
        document.getElementById("js_demo19").innerHTML += "<br />";
    }
    //REVERSE PARAMIDE OF GEEZA
  
} /*js19teen close*/


function js20teen(){
  var a = window.document.jsForm20.jsinput1.value;
      a = parseInt(a);
  var b = window.document.jsForm20.jsinput2.value;
      b = parseInt(b);
  var c = window.document.jsForm20.jsinput3.value;

var text = "<br/>";
    var frt = [];
    for(var i=a; i<=b; i++){
        //s = "*";
        //frt.push(s);
        frt.push(c);
       frt = frt;
    var chk = frt+"<br/>";
    text += chk ;
    document.getElementById("demo_1shap").innerHTML = text;
    document.getElementById("demo_1shap2").innerHTML = text;
    }
     //this one is good

    // ---------------------------------------
  for(var i=a; i<b; i++){
    for(var j=a; j<=i; j++){
         document.getElementById("demo_2shap").innerHTML +=  c  ;
         document.getElementById("demo_2shap2").innerHTML +=  c  ;
        }
         document.getElementById("demo_2shap").innerHTML += "<br />";
         document.getElementById("demo_2shap2").innerHTML +=  "<br />";
    }

  for(i=b;i>a;i--){
    for(j=a; j<=i; j++){
         document.getElementById("demo_2shap").innerHTML +=  c;
         document.getElementById("demo_2shap2").innerHTML +=  c ;
        }
        document.getElementById("demo_2shap").innerHTML += "<br />";
        document.getElementById("demo_2shap2").innerHTML +=  "<br />";
    }
     //DiaMonds
   
   // ---------------------------------------

   for(var i=b; i>=a; i--){
      for(var j=a; j<=i; j++){       
         document.getElementById("demo_3shap").innerHTML += c;
         document.getElementById("demo_3shap2").innerHTML += c;
        }
        document.getElementById("demo_3shap").innerHTML += "<br />";
        document.getElementById("demo_3shap2").innerHTML += "<br />";
    }
    //REVERSE PARAMIDE OF GEEZA

    //-----------------------------------------

     for(var i=b; i>a; i--){
        for(var j=a; j<=i; j++ ){
            document.getElementById("demo_4shap").innerHTML +=  j + " ";
            document.getElementById("demo_4shap2").innerHTML +=  j + " " ;
            }
            document.getElementById("demo_4shap").innerHTML += "<br />";
            document.getElementById("demo_4shap2").innerHTML += "<br />";
        }

    
} // js20teen function close // all in one

    // js21 app start

    function number(value){
        document.calc.jsinput.value +=value;
    }
    function cle(value){
        document.calc.jsinput.value =value;
    }
    function evalua(){
        //var evalu = eval(document.form1.result.value);
        document.calc.jsinput.value = eval(document.calc.jsinput.value);
    }






  function clearme () {
              
            /*window.document.jsForm13.jsinput1.value = + empty;*/
           /* window.document.calc_form.input02.value = + empty;
            window.document.calc_form.input03.value = + empty;*/

        }



