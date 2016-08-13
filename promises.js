var https = require('https');
var Promise = require('promise');

var linkedinRequest = function() {
    return new Promise(function(resp, rej) {
        https.get('https://www.linkedin.com/in/trevor-millner-02073957', function(res) {
          console.log("Google API response: " + res.statusCode);
          return resp(res.statusCode);
        }).on('error', function(e) {
          console.log("Google API  error: " + e.message);
          rej(e);
        });
    }); 
}

var scrambleData = function(data) {
    return new Promise(function(resp, rej) {
        console.log("INSIDE " + data);
        var scrambledData;
        try {
            scrambledData = data.toString().split("").reverse().join("");
            return resp(scrambledData);
        }
        catch (e) {
            return rej(e)
        }
    }); 
}

// Example with 1 promises to chain & handling errors
var result = linkedinRequest().then(
    function(res) { console.log("implemented res = " + res); return res;}, 
    function(rej) { console.log("implemented rej = " + rej); return rej;
}).then(function(linkedinRequestData) {
    // Return a sole value (then always returns promises!)
    return scrambleData(linkedinRequestData).then(
        function(res) { console.log("2nd res = " + res); return res;}, 
        function(rej) { console.log("2nd rej = " + rej); return rej;}
    );
}).then(function(done) {
    console.log("Inside the last then = " + done);
    return done;
});

// Example with manyz promises to chain & handling errors
var result = linkedinRequest().then(
    function(res) { console.log("implemented res = " + res); return res;}, 
    function(rej) { console.log("implemented rej = " + rej); return rej;
}).then(function(linkedinRequestData) {
    return scrambleData(linkedinRequestData).then(
        function(res) { console.log("2nd res = " + res); return res;}, 
        function(rej) { console.log("2nd rej = " + rej); return rej;}
    );
}).then(function(scrambledData) {
    return firstLetterPromise(scrambledData).then(
        function(res) { console.log("2nd res = " + res); return res;}, 
        function(rej) { console.log("2nd rej = " + rej); return rej;}
    );
}).then(function(done) {
    console.log("Inside the last then = " + done);
    return done;
});


/*
// Example with 1 promises to chain & not worrying about errors
var result = linkedinRequest().then(
    function(res) { console.log("implemented res = " + res); return res;}, 
    function(rej) { console.log("implemented rej = " + rej); return rej;
}).then(function(linkedinRequestData) {
    // return a promise
    return scrambleData(linkedinRequestData);
}).then(function(done) {
    console.log("Inside the last then = " + done);
    return done;
});

// Example with plenty of promises to chain & not worrying about errors
var result = linkedinRequest().then(
    function(res) { console.log("implemented res = " + res); return res;}, 
    function(rej) { console.log("implemented rej = " + rej); return rej;
}).then(function(linkedinRequestData) {
    return scrambleData(linkedinRequestData);
}).then(function(scrambledData) {
    return firstLetterPromise(scrambledData);
}).then(function(done) {
    console.log("Inside the last then = " + done);
    return done;
});
*/

console.log("Final result was " + result.toString());
