function validate() {

  var username = document.getElementById("uname");

  var password = document.getElementById("pass");

  if(username.value.trim()=="" || password.value.trim()=="") {
    alert("blanks should not be empty!!");
    return false;
  }
  else {
    true;
  }
}

function calculator() {
  var n1 = parseFloat(document.getElementById('n1').value);

  var n2 = parseFloat(document.getElementById('n2').value);

  var operator = document.getElementById('operator').value;

  if(operator==="+") {
    document.getElementById('result').value=n1+n2;
  }
  if(operator==="-") {
    document.getElementById('result').value=n1-n2;
  }
  if(operator==="x") {
    document.getElementById('result').value=n1*n2;
  }
  if(operator==="/") {
    document.getElementById('result').value=n1/n2;
  }
  if(operator==="%") {
    document.getElementById('result').value=n1%n2;
  }
}

function loanCalculator() {
  var amt = parseFloat(document.getElementById("amt").value);

  var rate = parseFloat(document.getElementById("rate").value);

  var pay = parseFloat(document.getElementById("pay").value);

  var result = document.getElementById("result").value=amt+pay*((amt*rate)/100);


}

function factorial() {
  var num = parseFloat(document.getElementById("num").value);
  var i;
  var fac = 1;
  for(i=num;i>0;i--) {
    fac = fac*i;
  }
  var fact = document.getElementById("fact").value=fac;
}


