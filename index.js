const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
];

function destructivelyAppendCat(name) {
    cats.push(name); 
}

function destructivelyPrependCat(name) {
    cats.unshift(name); 
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
}

function removeLastCat() {
    const catRemoval = cats.slice(0,2);
    return catRemoval;
}

function removeFirstCat() {
    const catRemoval = cats.slice(1);
    return catRemoval;
}
