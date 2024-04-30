let hex1Input = document.getElementById("hex1");
let colorPicker1 = document.getElementById("color1");
let error1 = document.getElementById("error1");
let hex2Input = document.getElementById("hex2");
let colorPicker2 = document.getElementById("color2");
let error2 = document.getElementById("error2");
const reverseButton = document.getElementById("reverse");
const pattern = /[0-9A-Fa-f]{6}$/;
// const pattern = /^#[0-9A-Fa-f]{6}$/;

// Hex #2
hex2Input.addEventListener("keypress", function (event) {
  // Prevents the page from refressing
  if (event.key === "Enter") {
    event.preventDefault();
    // If hex code has the # sign, display error message
    if (hex2Input.value.includes("#")) {
      error2.style.display = "block";
    }
    let hexValue = `${hex2Input.value}`;
    const result = pattern.test(hexValue);
    if (result) {
      error2.style.display = "none";
      colorPicker2.value = "#" + hexValue;
      hex2Input.value = hexValue;
      console.log(result);
      // If result is false, display the error message
    } else {
      error2.style.display = "block";
    }
  }
});

// Hex #1
hex1Input.addEventListener("keypress", function (event) {
  // Prevents the page from refressing
  if (event.key === "Enter") {
    event.preventDefault();
    // If hex code has the # sign, display error message
    if (hex1Input.value.includes("#")) {
      error1.style.display = "block";
    }
    let hexValue = `${hex1Input.value}`;
    const result = pattern.test(hexValue);
    if (result) {
      error1.style.display = "none";
      colorPicker1.value = "#" + hexValue;
      hex1Input.value = hexValue;
      // If result is false, display the error message
    } else {
      error1.style.display = "block";
    }
  }
});

// Changing Hex Code to value from Color Picker
colorPicker1.addEventListener("input", function (event) {
  var colorPickerValue = event.target.value;
  var updatedPickerValue = colorPickerValue.replace("#", "");
  console.log(updatedPickerValue);
  hex1Input.value = updatedPickerValue;
});

// Changing Hex Code to value from Color Picker
colorPicker2.addEventListener("input", function (event) {
  var colorPickerValue = event.target.value;
  var updatedPickerValue = colorPickerValue.replace("#", "");
  console.log(updatedPickerValue);
  hex2Input.value = updatedPickerValue;
});

// Reverse Colors
// doesn't update the value attribute in the HTML
reverseButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Swap values
  let temp = hex1Input.value;
  hex1Input.value = hex2Input.value;
  hex2Input.value = temp;

  // Now update the color pickers using the new values
  colorPicker1.value = "#" + hex1Input.value;
  colorPicker2.value = "#" + hex2Input.value;

  // Log the new values for debugging purposes
  console.log(
    "After swap:",
    hex1Input.value,
    colorPicker1.value,
    hex2Input.value,
    colorPicker2.value
  );
});

// User clicks on hash symbol highlights input
document.getElementById("hash1").addEventListener("click", function () {
  document.getElementById("hex1").focus();
});
// // User clicks on hash symbol highlights input
document.getElementById("hash2").addEventListener("click", function () {
  document.getElementById("hex2").focus();
});
