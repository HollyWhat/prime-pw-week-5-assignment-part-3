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



function addToCollection(){
    const newAlbum ={
        title: "x",
        artist: "test",
        yearPublished: 2020,
    }
    return collection.push(newAlbum);
}

console.log("testing the add to collection", collection);