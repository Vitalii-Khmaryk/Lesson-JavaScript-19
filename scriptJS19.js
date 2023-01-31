let inp1 = document.getElementById("i1");
let inp2 = document.getElementById("i2");
let inp3 = document.getElementById("i3");
let inp4 = document.getElementById("i4");
let inp5 = document.getElementById("i5");
let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");
inp1.addEventListener("input", function () {
  let v = inp1.value;
  console.log(v);
  if (/^\w\D{1,20}$/.test(v)) {
    console.log("works");
    inp1.classList.add("gcheck");
    inp1.classList.add("borderGreen");
    error1.style.display = "none";
  } else {
    console.log("no");
    error1.style.display = "inline-block";
    inp1.classList.remove("gcheck");
    inp1.classList.remove("borderGreen");
  }
});

inp2.addEventListener("input", function () {
  let v1 = inp2.value;
  console.log(v1);
  if (/^\w\D{1,20}$/.test(v1)) {
    console.log("works");
    inp2.classList.add("gcheck");
    inp2.classList.add("borderGreen");
    error2.style.display = "none";
  } else {
    console.log("no");
    error2.style.display = "inline-block";
    inp2.classList.remove("gcheck");
    inp2.classList.remove("borderGreen");
  }
});

inp3.addEventListener("input", function () {
  let v2 = inp3.value;
  console.log(v2);
  if (/^\w+-*\.*-*\w+@\w+\.\w+$/.test(v2)) {
    console.log("works");
    inp3.classList.add("gcheck");
    inp3.classList.add("borderGreen");
    error3.style.display = "none";
  } else {
    console.log("no");
    error3.style.display = "inline-block";
    inp3.classList.remove("gcheck");
    inp3.classList.remove("borderGreen");
  }
});

inp4.addEventListener("input", function () {
  let v3 = inp4.value;
  console.log(v3);
  if (/^\w{8,15}$/.test(v3)) {
    console.log("works");
    inp4.classList.add("gcheck");
    inp4.classList.add("borderGreen");
    error4.style.display = "none";
  } else {
    console.log("no");
    error4.style.display = "inline-block";
    inp4.classList.remove("gcheck");
    inp4.classList.remove("borderGreen");
  }
});

inp5.addEventListener("input", function () {
  let value1 = inp1.value;
  console.log(value1);
  let value2 = inp2.value;
  console.log(value2);
  let value3 = inp3.value;
  console.log(value3);
  let value4 = inp4.value;
  console.log(value4);
  if (
    inp5.checked == true &&
    /^\w\D{1,20}$/.test(value1) &&
    /^\w\D{1,20}$/.test(value2) &&
    /^\w+-*\.*-*\w+@\w+\.\w+$/.test(value3) &&
    /^\w{8,15}$/.test(value4)
  ) {
    document.querySelector(".btn").disabled = false;
    document.querySelector(".btn").style.backgroundColor = "blue";
  } else {
    document.querySelector(".btn").disabled = true;
    document.querySelector(".btn").style.backgroundColor = "lightskyblue";
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "block";
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
