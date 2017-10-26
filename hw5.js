const message = prompt('Choose an Option \n 1:Show messages \n 2:Add a message \n 3:Delete a message\n 0: Quit')
if (message == 1){
document.write ("The current messages are: <br/> 1:message 01 <br/> 2:message 02 <br/> 3:message 03 <br/> 4:message 04 <br/> 5:message 05")
}

if (message == 0){
document.write ("Good bye")
}

if (message == 2) {
newmessage = prompt ('Enter a new message:')
document.write( "The current messages are: <br/> 1:message 01 <br/> 2:message 02 <br/> 3:message 03 <br/> 4:message 04 <br/> 5:message 05 <br/> 6:" + newmessage)
}
if (message<0 || message >3){
document.write ("Please refresh and select a correct command.")
}


if (message == 3) {
deletemessage = prompt ('Enter the message index (between 1 and 5):')
}
 if (deletemessage == 1 ) {
 document.write("The current messages are: <br/> 1:message 02 <br/> 2:message 03 <br/> 3:message 04 <br/> 4:message 05")
 }
 if (deletemessage == 2) {
 document.write("The current messages are: <br/> 1:message 01 <br/> 2:message 03 <br/> 3:message 04 <br/> 4:message 05")
 }
 if (deletemessage == 3) {
 document.write ("The current messages are: <br/> 1:message 01 <br/> 2:message 02 <br/> 3:message 04 <br/> 4:message 05")
 }
 if (deletemessage == 4) {
 document.write("The current messages are: <br/> 1:message 01 <br/> 2:message 02 <br/> 3:message 03 <br/> 4:message 05")
 }
 if (deletemessage == 5){
 document.write("The current messages are: <br/> 1:message 01 <br/> 2:message 02 <br/> 3:message 03 <br/> 4:message 04")
}





// alert('Your input is: ' + message)
const output = document.getElementById("output")
output.innerHTML = 'Your message is ' + message