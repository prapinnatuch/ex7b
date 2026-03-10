function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  // ใช้ Regular Expression เช็คว่าเป็นตัวเลข 0-9 จำนวน 10 หลักเป๊ะๆ
  let regExp = /^[0-9]{10}$/;
  
  if (regExp.test(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  // เช็คว่าเป็นตัวเลข (isNaN) และต้องอยู่ในช่วง 1 ถึง 10 เท่านั้น
  if (isNaN(candi) || candi < 1 || candi > 10 || candi === "") {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}