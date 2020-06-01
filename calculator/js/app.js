var n = document.getElementById('number');
var sum = '';

function n1() {
  sum += 1;
  n.innerHTML = sum;
}
function n2() {
  sum += 2;
  n.innerHTML = sum;
}
function n3() {
  sum += 3;
  n.innerHTML = sum;
}
function n4() {
  sum += 4;
  n.innerHTML = sum;
}
function n5() {
  sum += 5;
  n.innerHTML = sum;
}
function n6() {
  sum += 6;
  n.innerHTML = sum;
}
function n7() {
  sum += 7;
  n.innerHTML = sum;
}
function n8() {
  sum += 8;
  n.innerHTML = sum;
}
function n9() {
  sum += 9;
  n.innerHTML = sum;
}
function n0() {
  sum += 0;
  n.innerHTML = sum;
}
function add() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '+';
  }
  n.innerHTML = sum;
}
function sub() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '-';
  }
  n.innerHTML = sum;
}
function dia() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '/';
  }
  n.innerHTML = sum;
}
function epi() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '*';
  }
  n.innerHTML = sum;
}
function ison() {
  //var r = eval(sum);
  n.innerHTML = eval(sum);
}

function C() {
  sum = '';
  n.innerHTML = sum;
}

function tis100() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '*100';
  }
  n.innerHTML = eval(sum);
}
function dot() {
  if (isNaN(sum[sum.length - 1])) {
    sum += '';
  } else {
    sum += '.';
  }
  n.innerHTML = sum;
}
