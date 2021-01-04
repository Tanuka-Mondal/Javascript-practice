var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(collection, id, prop, value) {
   if(value === "")
   {
     delete collection[id][prop];
   }
   else if(prop != "tracks" && value != ""){
     collection[id][prop] = value;
   }
   else if (prop === "tracks" ){
     if(value == "Free")
     {
       collection[id][prop[0]] = [1999];
     }
     else{
     collection[id][prop] = [value];
     }
   }
   return collection
}
   


updateRecords(collection, 5439, 'artist', 'ABBA');
