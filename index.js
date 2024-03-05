const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    // Append the cat to the end of the cats array
    cats.push(name);
  }
function destructivelyPrependCat(name) {
    // Prepend the cat to the beginning of the cats array
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    //Removes the last cat from the cats array
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    // removes the first cat from the cats array
    cats.shift(name)
}
function appendCat(name) {
  // Create a new array by combining the existing cats array and the new cat
  const newCatsArray = [...cats, name];
  return newCatsArray;
}
function prependCat(name) {
    let newCats = [...cats]; 
    newCats.unshift(name); 
    return newCats; 
  }
  function removeLastCat(name) {
    let newCats = [...cats];
    newCats.pop(name);
    return newCats;
  }
  function removeFirstCat(name) {
    let newCats = [...cats];
    newCats.shift(name);
    return newCats;
  }