// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
// const newCats1=[];
// const newCats2=[];
// const newCats3=[];
// const newCats4=[];

//1
function destructivelyAppendCat(name){
    
    cats.push(name);
}
destructivelyAppendCat("Ralph");


//2
function destructivelyPrependCat(name){

    cats.unshift(name);
}
destructivelyPrependCat("Bob");

//3
function destructivelyRemoveLastCat(){

    cats.pop();
}
destructivelyRemoveLastCat();

//4
function destructivelyRemoveFirstCat(){

    cats.shift();

}
destructivelyRemoveFirstCat();

//5
function appendCat(name){
    const copyOfCats1=cats.slice();
    copyOfCats1.push(name);
    return copyOfCats1;
}
appendCat("Broom");

//6
function prependCat(name){
    const copyOfCats2=cats.slice();
    copyOfCats2.unshift(name);
    return copyOfCats2;
}
prependCat("Arnold");

//7
function removeLastCat(){
    const lastCat=cats.slice(0,cats.length-1);
    return lastCat;
}
removeLastCat();

//8
function removeFirstCat(){
    const firstCat=cats.slice(1);
    return firstCat;
}
removeFirstCat();
