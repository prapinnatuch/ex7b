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
  if (isNaN(candi) || candi < 1) {
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