// 숫자만 입력
function onlyNum(event) {
    event = event || window.event;
    var keyID = (event.which)
        ? event.which
        : event.keyCode;
    if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39) {
        return;
    } else {
        return false;
    }
}




// 이메일 체크(특수문자 체크)
function isSKey4Email(obj) {
    for (var i = 0; i < obj.value.length; i++) {
        var k = obj.value.charCodeAt(i);

        if (k >= 33 && k < 45) 
            return true;
        else if (k == 47) 
            return true;
        else if (k >= 58 && k < 64) 
            return true;
        else if (k >= 91 && k <= 94) 
            return true;
        else if (k == 96) 
            return true;
        else if (k >= 123 && k <= 126) 
            return true;
        else 
            return false;
        }
    }




//패스워드 길이 체크 및 숫자와 영문자 구성 확인
function checkRange(obj, min, max) {
  sum = 0;

  for(var i = 0; i < obj.value.length; i++){
    var k = obj.value.charCodeAt(i);

    if(k >= 0 && k <= 255)
    sum += 1;
    else
    sum += 2;
  }

  if(sum >= min && sum <= max)
    return true;
  else
    return false;
}




//패스워드 포맷 체크
  function check_format(TmpValues,strformat){
    for (i=0; i<TmpValues.length;i++){
      ch=strformat.indexOf(TmpValues.charAt(i));
      if (ch == '-1'){
        return false;
      }
    }
    return true;
  }



//한글 입력 금지
function hanCheck(x) {

   for(i=0;i<x.login_id.value.length;i++) {
      var a=x.login_id.value.charCodeAt(i);
         if (a > 128) {
         alert('죄송합니다. 한글 아이디는 지원을 하지 않습니다.');
         x.login_id.value="";
         x.login_id.focus();
         return;
         }
   }

}



//체크 이메일(javascript 정규식)
function Checkmail(str){
  var reg_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if(!reg_email.test(str)){
    return false;
  }else{
    return true;
  }
}

