console.log('***** Music Collection *****')


//build the collection 


// start with an empty array
let collection = [];

/**
 * @param function that creates a new object 
 * 
 * @return the new album object to the collection array
 * 
 */


//title, artist, year published 
//addToCollection function start 
// add 6 album 

function addToCollection(name, singer, publish){

let newAlbum = {
    title: name,
    artist: singer,
    yearPublished: publish,
}
   return collection.push(newAlbum);
}
console.log( addToCollection("Punisher", "Phoebe Bridger", "2020" ));
console.log( addToCollection("Sucker Supreme", "Rosie Tucker", "2021" ) );
console.log( addToCollection("Harry's House", "Harry Styles", "2022" ) );
console.log( addToCollection("Mr. Morale and the big steppers", "Kendrick Lamar", "2022" ) );
console.log( addToCollection("Jubilee", "Japanese Breakfast", "2021" ) );
console.log( addToCollection("Whats the story morning glory?", "Oasis", "1995" ) );
console.log("lets see the collection", collection );

// addtocollection function complete

// begin the show collection function 
/**
 * 
 * @param takes in the array param - tells us the number of items 
 * 
 * @return will return a loop of info that shows the title, artist, year
 */

//will need the collection array 

let newAlbum = [];
function showCollection(){
    console.log("the number of items in the array is", );
for(let i =0; i < collection.length; i++){
    console.log("testing my loop", collection[i]);
}
return;


}
console.log("the info for my album is", showCollection());
// loop only shows if this console log is active


// findByArtist function 
// Take in artist (a string) parameter
//Create an array to hold any results, empty to start
//Loop through the collection and add any objects with a matching artist to the array.
//Return the array with the matching results. If no results are found, return an empty array.
 