// for service/notes.js


// Here, this is cleaner code by linking promises, ultimately returning response.data as to the whole response http object
// We assign the promise object from axios.get to request and then use then to use/reply to the response that came from the promise
// Promise obj, is essentially a communication (or completion of asynchronous operation) object between the producer(.get, post) and the consumer of that info 
// setNotes(getting response from the server and updating the notes on the page)
// Promise has 2 parameters, resolved and rejected, we are filling in the resolved portion saying that if the promise is fufilled, we will return respond.data
// so here getAll returns a promise object, since that is what is returned when then is called, however when it is completed, it will return response.data,
// when promise is fufilled promise result becomes that return value and the state becomes fufilled
// promise always created by .then(handler) if handler ends with return value, then state of that promise is fufilled and result is value which is returned and passed along
// to either the function or another promise is created