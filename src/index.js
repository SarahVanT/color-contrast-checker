let hex1Input = document.getElementById("hex1");
let colorPicker1 = document.getElementById("color1");
let error1 = document.getElementById("error1");
let hex2Input = document.getElementById("hex2");
let colorPicker2 = document.getElementById("color2");
let error2 = document.getElementById("error2");
const reverseButton = document.getElementById("reverse");
const pattern = /[0-9A-Fa-f]{6}$/;
// const pattern = /^#[0-9A-Fa-f]{6}$/;

// Reverse Colors
reverseButton.addEventListener("click", function (event) {
  event.preventDefault();

  // let temp = hex1Input.value;
  // let hex1 = hex2Input.value;
  // let hex2 = temp;
  // console.log(hex1Input.value);
  // console.log(hex2Input.value);
  // let hex1 = hex1Input.value;
  // let hex2 = hex2Input.value;
  // let temp = hex1;
  // hex1 = hex2;
  // hex2 = temp;
  let temp = hex1Input.value;
  console.log(temp);
  console.log(hex1Input.value);
  hex1Input.setAttribute("value", `${hex2Input}`);
  hex2Input.setAttribute("value", `${temp}`);
  colorPicker1.setAttribute("value", `#${hex1Input.value}`);
  colorPicker2.setAttribute("value", `#${hex2Input.value}`);
  // Swapping values for hex codes
  // hex1Input.setAttribute("value", `${hex1}`);
  // hex2Input.setAttribute("value", `${hex2}`);
  // Swapping and adding # sign values
  // colorPicker1.setAttribute("value", `#${hex1}`);
  // colorPicker2.setAttribute("value", `#${hex2}`);
});

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
      colorPicker2.setAttribute("value", `#${hexValue}`);
      hex2Input.setAttribute("value", `${hexValue}`);
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
      colorPicker1.setAttribute("value", `#${hexValue}`);
      hex1Input.setAttribute("value", `${hexValue}`);
      // If result is false, display the error message
    } else {
      error1.style.display = "block";
    }
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

// hex1Input.addEventListener("keypress", function (event) {
//   // Prevents the page from refressing
//   if (event.key === "Enter") {
//     event.preventDefault();
//   }
//   if (hex1Input.value.includes("#")) {
//     console.log(hex1Input.value);
//     // Display error message
//     error1.style.display = "block";
//   } else {
//     let hexValue = `#${hex1Input.value}`;
//     // Removing error message
//     error1.style.display = "none";
//     const result = pattern.test(hexValue);
//     // If result is true (from checking pattern)
//     if (result) {
//       colorPicker1.setAttribute("value", `${hexValue}`);
//       console.log(result);
//       // If result is false, display the error message
//     } else {
//       error1.style.display = "block";
//     }
//   }
// });
