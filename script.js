function myFunction() {
  let moreText = document.getElementById("kinhnghiem");
  let btnText = document.getElementById("myBtn");

  if (moreText.classList.contains("section-content1")) {
    moreText.classList.remove("section-content1");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.add("section-content1");
    btnText.innerHTML = "VIEW MORE";
    /*dots.style.display = "none";
    moreText.style.display = "inline";*/
  }
}
function myFunction1() {
  let moreText = document.getElementById("kinang");
  let btnText = document.getElementById("myBtn1");

  if (moreText.classList.contains("section-content2")) {
    moreText.classList.toggle("section-content2");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.toggle("section-content2");
    btnText.innerHTML = "VIEW MORE";
    /*dots.style.display = "none";
    moreText.style.display = "inline";*/
  }
}
function myFunction2() {
  let moreText = document.getElementById("ngonngu");
  let btnText = document.getElementById("myBtn2");

  if (moreText.classList.contains("section-content2")) {
    moreText.classList.toggle("section-content2");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.toggle("section-content2");
    btnText.innerHTML = "VIEW MORE";
  }
}
function myFunction3() {
  let moreText = document.getElementById("hoatdong");
  let btnText = document.getElementById("myBtn3");

  if (moreText.classList.contains("section-content1")) {
    moreText.classList.toggle("section-content1");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.toggle("section-content1");
    btnText.innerHTML = "VIEW MORE";
  }
}
function myFunction4() {
  let moreText = document.getElementById("hocvan");
  let btnText = document.getElementById("myBtn4");

  if (moreText.classList.contains("section-content3")) {
    moreText.classList.toggle("section-content3");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.toggle("section-content3");
    btnText.innerHTML = "VIEW MORE";
  }
}
function myFunction5() {
  let moreText = document.getElementById("sothich");
  let btnText = document.getElementById("myBtn5");

  if (moreText.classList.contains("section-content5")) {
    moreText.classList.toggle("section-content5");
    btnText.innerHTML = "VIEW LESS";
  } else {
    moreText.classList.toggle("section-content5");
    btnText.innerHTML = "VIEW MORE";
  }
}
function myfunction() {
  const hidden = document.getElementById("hidden");
  const btn = document.getElementById("btnsubmit");
  const form = document.getElementById("frm1");
  var email = document.getElementById("email").value;
  const mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /*btn.addEventListener("click", function (e) {*/
  /*hidden.classList.remove("hidden");
    form.style.display = "none";*/

  if (mailformat.test(email)) {
    hidden.classList.remove("hidden");
    form.style.display = "none";
  } else {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
    return false;
  }
}
