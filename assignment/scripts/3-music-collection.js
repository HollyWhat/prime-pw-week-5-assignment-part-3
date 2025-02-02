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
console.log( addToCollection("Punisher", "Phoebe Bridgers", "2020" ));
console.log( addToCollection("Sucker Supreme", "Rosie Tucker", "2021" ) );
console.log( addToCollection("Harry's House", "Harry Styles", "2022" ) );
console.log( addToCollection("Mr. Morale and the big steppers", "Kendrick Lamar", "2022" ) );
console.log( addToCollection("Jubilee", "Japanese Breakfast", "2021" ) );
console.log( addToCollection("Whats the story morning glory?", "Oasis", "1995" ) );
console.table( collection );

// addtocollection function complete

// begin the show collection function 
/**
 * 
 * @param takes in the array param - tells us the number of items 
 * 
 * @return will return a loop of info that shows the title, artist, year
 */

//will need the collection array 



function showCollection(music){ 
 for(let i =0; i < music.length; i++){
    if(music[i]){
        console.log(music[i].title +  " by " + music[i].artist + " in " + music[i].yearPublished);
    }

}
return music;
}
console.log("testing",showCollection(collection)); 




// findByArtist function 
// Take in artist (a string) parameter
//Create an array to hold any results, empty to start
//Loop through the collection and add any objects with a matching artist to the array.
//Return the array with the matching results. If no results are found, return an empty array.
 


let emptyArray = [];
function findByArtist(artistInput, collectionInput){
    
    for(let artist of collectionInput) {
        if(artistInput === artist.artist){
            return emptyArray.push(artist);
        }  
    }
    }







console.log("testing the find function", findByArtist('Rosie Tucker',collection));
console.log(findByArtist('Harry Styles', collection ));
console.log("testing - should return undefined", findByArtist('tame impala', collection )); 
console.log("see array", emptyArray);
