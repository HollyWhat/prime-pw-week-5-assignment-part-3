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
