const hex1Input = document.getElementById("hex1");
const colorPicker1 = document.getElementById("color1");
let error1 = document.getElementById("error1");

hex1Input.addEventListener("input", function (event) {
  event.preventDefault();
  if (hex1Input.value.includes("#")) {
    console.log(hex1Input.value);
    error1.style.display = "block";
  } else {
    let hexValue = `#${hex1Input.value}`;
    error1.style.display = "none";
  }
});

// User clicks on hash symbol highlights input
document.getElementById("hash1").addEventListener("click", function () {
  document.getElementById("hex1").focus();
});
// // User clicks on hash symbol highlights input
document.getElementById("hash2").addEventListener("click", function () {
  document.getElementById("hex2").focus();
});
