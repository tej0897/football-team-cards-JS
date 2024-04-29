function palindromeCheck() {

    const a = document.getElementById("text-input").value;
    const input = a.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
  
    var div = document.getElementById("result"); 
  
    if(input == ""){
      alert("Please input a value");
    } else {
      if(isPalindrome(input)){
        div.innerHTML = `${a} is a palindrome`;  
      } 
      else {
        div.innerHTML = `${a} is not a palindrome`;
      }
    }
  }
  
  //palindrome Check logic
  
  function isPalindrome(input){
  let low = 0;
  let high = input.length - 1;
  while (low < high) {
              if (input.charAt(low) != input.charAt(high)) {
                  return false; // not a palindrome.
              }
              low++; // move the low index forward
              high--; // move the high index backwards
          }
          return true; // is a palindrome
  }
  
  
  
  document.addEventListener("click", palindromeCheck);  