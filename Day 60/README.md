100DaysOfCodeChallenge - Day 60

1) Trying to get frontend react to submit input field as JSON to API

Issues:

I was able to get axios to send a hard coded json object but I wasn't able to get the values from the input field.
I tried setting the state when the values changed in the input field using onChange attribute and retrieving it from the state when it was submitted. This didn't work however.  

CORS - originally this was working as I had already defined in Django to allow localhost:3000 to use HTTP request but after I changed Django View to allow createVIEWAPI it couldnt retrieve information from the API anymore and was rendering a error message to the console.

I will try to debug these issues again tomorrow. 