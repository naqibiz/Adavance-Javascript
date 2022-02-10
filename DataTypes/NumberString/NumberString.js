// Number ^&^ String  (NUMBER)
// ------------------------------------------------------------------

const space = " "; // Global Variable
// ********************************************
const intiger = 10;
const type = typeof intiger;
document.getElementById("checktype").innerHTML = type + space + intiger;

// ********************************************
const pi_value = Math.PI;
document.getElementById("pivalue").innerHTML = pi_value;

// ********************************************
const cal = 10 * 5;
document.getElementById("cal").innerHTML = cal;

// ********************************************
const str = "10";
const type2 = typeof str;
document.getElementById("checktype2").innerHTML = type2 + space + str;

// ********************************************
const str_int = "10" + 213;
document.getElementById("str_intiger").innerHTML = str_int;

// ********************************************
const str_to_int = parseInt("10") + 213;
document.getElementById("str_intiger_parsint").innerHTML = str_to_int;

// ********************************************
const isnan = parseInt("Hello");
document.getElementById("nan").innerHTML = isnan;

// ********************************************
const isnan2 = isNaN("Hello");
document.getElementById("nan2").innerHTML = isnan2;

// ********************************************
const isnan3 = isNaN(10);
document.getElementById("nan3").innerHTML = isnan3;

// Number ^&^ String  (STRING)
// ------------------------------------------------------------------

const char = "Hello World";
const length = "Length";
document.getElementById("charlenght").innerHTML =
  char + space + length + space + char.length;

// ********************************************
const chartext = char.charAt(0);
const chartext2 = char.charAt(1);
const chartext3 = char.charAt(2);
const chartext4 = char.charAt(3);
const chartext5 = char.charAt(4);
const chartext7 = char.charAt(7);
document.getElementById("char_text").innerHTML =
  chartext + chartext2 + chartext3 + chartext4 + chartext5 + chartext7;

// ********************************************
const chartoupper = "Pakistan is a islamic ideological country";
document.getElementById("simplechar").innerHTML = chartoupper;
document.getElementById("charto_upper").innerHTML = chartoupper.toUpperCase();
