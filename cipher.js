let userMsg = prompt('Enter a message to encode.')  // get user input for string to be Encrypted

cipherFunction = (string) => {          // define function to encode string

let msgEncrypted = []                   // empty array to store encrypted characters of string

for (i = 0; i < string.length; i++) {   //iterate through string

  if (string[i].match(/[a-z]/i)) {      //if character is a letter...

   charCode = string[i].charCodeAt()    // ...get characters ascii code

        //UPPERCASE this block specifically checks for upper case ASCII decimal codes e.g. 65(A) to 90(Z)
    if (charCode >= 65 && charCode <= 90) {                    // if ascii code greater than 65(A) and less than 90(Z)...
      codeShift = charCode + 15                                //variable for charCode shifted 15 spaces, as per task requirements

      if (codeShift > 90) {                                    // if charCode + 15 is greater than ascii 90...
        msgEncrypted.push(String.fromCharCode(codeShift - 26)) // minus 26, this keeps the code shifting in a cycle(so after Z we continue from A) and push charCode(coverted back to string) to array 
      }
      else
        msgEncrypted.push(String.fromCharCode(codeShift)) //otherwise just add 15 to charCode and push to array(coverted back to string)
    
    }
    //LOWERCASE this block specifically checks for lowerr case ASCII decimal codes e.g. 97(a) to 122(z)
    if (charCode >= 97 && charCode <= 122) {         // if ascii code greater than 97(a) and less than 122(b)...
      codeShift = charCode + 15                                //variable for charCode shifted 15 spaces, as per task requirements

      if (codeShift > 122) {                                   // if charCode + 15 is greater than ascii 90...
        msgEncrypted.push(String.fromCharCode(codeShift - 26)) // minus 26, this keeps the code shifting in a cycle(so after Z we continue from A) and push charCode(coverted back to string) to array 
      }
      else
        msgEncrypted.push(String.fromCharCode(codeShift))      //otherwise just add 15 to charCode and push to array(coverted back to string)
    }
    
  } 
  else                           //if character is NOT a letter...
    msgEncrypted.push(string[i]) // push to string, no encryption required

}
return msgEncrypted.join('')    //join all characters in array into a string and return
}
console.log(cipherFunction(userMsg))  //log encrypted string to console
alert(cipherFunction(userMsg))  //Display encrypted message.(as an alert)