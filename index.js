const express = require('express')

//Go to Twilio console, project info then replace the accountSid and the authToken by there value 
const client = require('twilio')(accountSid, authToken);


const app = express()
const port = 3003


app.get('/', (req, res) => {

    sendTextMessage();
    res.send('<div style="text-align:center; padding-top:40px;"><h1> Your msg has been sent successfuly </h1> <p>Mini Twilio App </p> <div/>');
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)
})



//Replace the below phone numbers by real phone numbers go to twilio Documentation
function sendTextMessage(){
    client.messages.create({
        body: 'Hello from Server',
        to: 'Phone_Number',
        from: 'Phone_Number'
     }).then(message => console.log(message))
       // here you can implement your fallback code
       .catch(error => console.log(error))
     
}