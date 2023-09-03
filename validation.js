const clearresult = () => {
  seterrormessage("months", "--");
  seterrormessage("days", "--");
  seterrormessage("years", "--");
};
function clearance() {
  inputdd.classList.remove("errorinput");
  inputyy.classList.remove("errorinput");
  inputmm.classList.remove("errorinput");
  labeldd.classList.remove("errrorcolor");
  labelyy.classList.remove("errrorcolor");
  labelmm.classList.remove("errrorcolor");
  let a = document.getElementsByClassName("errormessage");
  for (const add of a) {
    add.classList.add("hide");
  }
  clearresult();
}
const seterrormessage = (id, message) => {
  document.getElementById(id).innerHTML = message;
};
function validate() {
  let inputdd = document.getElementById("inputdd");
  let inputyy = document.getElementById("inputyy");
  let inputmm = document.getElementById("inputmm");
  let labeldd = document.getElementById("labeldd");
  let labelyy = document.getElementById("labelyy");
  let labelmm = document.getElementById("labelmm");
  let a = document.getElementsByClassName("errormessage");
  let cal=1;
  let date = new Date();
  clearance();

  if (
    inputdd.value.trim() == "" ||
    parseInt(inputdd.value) <= 0 ||
    parseInt(inputdd.value) > 31
  ) {
    clearresult();
    cal=0;
    inputdd.classList.add("errorinput");
    labeldd.classList.add("errrorcolor");
    a[0].classList.remove("hide");

    inputdd.value == ""
      ? seterrormessage("errd", "This field is requied.")
      : seterrormessage("errd", "Must be a valid day");
  
  }
  if (
    inputmm.value.trim() == "" ||
    parseInt(inputmm.value) <= 0 ||
    parseInt(inputmm.value) > 12 
  ) {
    clearresult();
    cal=0;
    inputmm.classList.add("errorinput");
    labelmm.classList.add("errrorcolor");
    a[1].classList.remove("hide");
    inputmm.value == ""
      ? seterrormessage("errm", "This field is requied.")
      : seterrormessage("errm", "Must be a valid month");
   
  }

  if (
    inputyy.value.trim() == "" ||
    parseInt(inputyy.value) > date.getFullYear()
  ) {
    clearresult();
    cal=0;
    inputyy.classList.add("errorinput");
    labelyy.classList.add("errrorcolor");
    a[2].classList.remove("hide");

    inputyy.value == ""
      ? seterrormessage("erry", "This field is requied.")
      : seterrormessage("erry", "Must be in the past");
  } 
  if(cal) {
    
    let d1 = parseInt(inputdd.value);
    let m1 = parseInt(inputmm.value);
    let y1 = parseInt(inputyy.value);
    let d2 = date.getDate();
    let y2 = date.getFullYear();
    let m2 = 1 + date.getMonth();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    seterrormessage("months", m);
    seterrormessage("days", d);
    seterrormessage("years", y);
  }
}
