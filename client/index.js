const input = document.getElementById("input");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

function encode() {
  let converted = ConvertStringToHex(input.value);
  let reConverted = hex_to_ascii(converted);

  // console.log(input.value);
  // console.log(converted);
  // console.log(reConverted);

  if (reConverted == input.value) {
    output.innerText = converted;
  } else {
    output.innerText = "";
    alert("Something went wrong!");
  }
  copyBtn.title = "Copy";
  output.style.whiteSpace = "unset";
}
function decode() {
  output.innerText = hex_to_ascii(input.value);
  output.style.whiteSpace = "pre";
}

function copyToClipboard() {
  navigator.clipboard.writeText(output.innerText);
  copyBtn.title = "Copied!!";

  var toast = document.getElementById("toast");
  var bsAlert = new bootstrap.Toast(toast);
  bsAlert.show();
  toast.scrollIntoView();
}

function clearInput() {
  input.value = "";
}

function ConvertStringToHex(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i).toString(16).slice(-4);
    if (arr[i].length == 1) arr[i] = "0" + arr[i];
  }
  return arr.join("");
}

function hex_to_ascii(str1) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
