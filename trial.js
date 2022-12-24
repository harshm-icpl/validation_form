function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
  // var letters= /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("invalid name");
     return false;
     }
  }

  function Compnm(){
    var compnm = document.getElementById('compnm').value;
    if( /[^a-zA-Z0-9]/.test( compnm ) ) {
       alert('enter only alphanumeric');
       return false;
    }
    return true;     
 }
  function number(inputtxt)
  {
    //var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    if(inputtxt.value.match(phoneno))
          {
        return true;
          }
        else
          {
          alert("invalid number");
          return false;
          }
  }

  function validateCode(){
    var TCode = document.getElementById('TCode').value;
    if( /[^a-zA-Z0-9]/.test( TCode ) ) {
       alert('message inclues only alphanumeric');
       return false;
    }
    return true;     
 }