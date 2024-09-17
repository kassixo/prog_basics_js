// This is my first JavaScript code!

console.log('Hello World')
let name1 = 'Katre';
console.log(name1);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain space or hyphen (-)
// Case-sensitive

let firstName = 'Katre';
let lastName = 'UX23'; 

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

// const - Defaultina kasutada
// let - Ainult siis, kui sa tead et sa pead andma asjale uue väärtuse

let name = 'Katre'; // String Literal
let age = 100; // Number Literal
let isApproved = false; // Boolean Literal
let firstName1 = undefined;
let selectedColor = null;
console.log(age);

// yl 3

let name3 = 'Katre'
let age3 = 30
let person = {
    name3: 'Katre',
    age3: 30
};

// Dot Notation
person['name3'] = 'TeineNimi';

console.log(person.name3);

let selectedColors = ['red', 'blue', 'yellow', 'black']
selectedColors[4] = 1
console.log(selectedColors.length)

// Performing a task

function greet(name4, lastName4) {
    console.log('Tere-tore ' + name4 + ' ' + lastName4)
}

// Calculating a value
function square(number) {
    return number * number
}

let number = square(2)
console.log(number)

console.log(square(2))

greet('Katre4', 'S')
greet('Kass', 'K')

function greet(name5, lastName5) {
    console.log('Hello ' + name5 + ' ' + lastName5);
}

greet('John', 'Smith');
greet('Mary', 'Smith');
greet('Paula', 'Smith');

// Conditional statements

// if statement

// if(true){
//     console.log('execute');
// }

// let age6 = 16;

// if(age6 > 18){
//     console.log('You are an adult');
// }

// else statement
// else if statement

// command shift 7 = kõik kommentaariks, command + KU võtab maha commentid, command + KC paneb ka kommentaari

// let country = 'Estonia';
// let age7 = 17;

// if(age7 >= 18 && country == 'Estonia'){
//     console.log('autoload');
// }

//if else

// let country = 'Estonia';
// let age7 = 15; 

// if(age7 > 18){
//     console.log('täisealine');
// }
// else if(age7 >= 16) {
//     console.log('teismeline');
// }
// else{
//     console.log('alakas');
// }

// switch

let value = (42 == 'number'); //blooean

switch (typeof value) {
    case 'number':
        console.log('number');
        break;
        case 'string':
        console.log('string');
        break;
        case 'boolean':
        console.log('boolean');
        break;

    default:
        console.log('other');
        break;
}

let dayName = 2;

switch (dayName) {
    case 1:
        dayName = "Pühap"
        break;
    case 2:
        dayName = "Esmasp"
        break;
    case 3:
        dayName = "Teisip"
        break;
    case 4:
        dayName = "Kolmap"
        break;
    case 5:
        dayName = "Neljap"
        break;
    case 6:
        dayName = "Reede"
        break;
    case 7:
        dayName = "Laup"
        break;

    default:
        dayName = "invalid"
        break;
}
console.log('päev on: ' + dayName);

// Ternary operator

let age7 = 20; 

let msg = (age7 <= 18) ? 'täisealine' : 'alaealine';

console.log(msg);

// condition ? value_if_true : value_if_false

//for loop

for (let i = 1; i <= 10; i++) {
    //code to be repeated
    console.log(i)
}

let coding = ['javascript', 'python', 'cpp']

for(let i = 0; i < coding.length; i++){
    console.log(coding[i]);
}

//for loop

for (let x = 1; x <= 3; x++) {
    console.log(x)

    for(let j = 1; j <= 3; j++){
        console.log('inner loop ' + j);
    }
}

//while loop

// while (condition) {
//     code to be repeated

// }

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

//do ... while loop

// do{
//     //code to be repeated
// }while(condition);

let y = 10;

do{
    console.log(y);
    y++;
}while(y <= 5);

//break / continue

for(let i = 1; i <= 5; i++){

    if(i == 3){
        continue; //enne kolme lõpetatakse tegevus, continue=jätab 3 vahele ja jätkab sealt edasi
    }
    console.log(i);
}

//array map

const array = [1, 4, 9, 16];

const map = array.map((x) => x + 2);
console.log(map);



const array1 = ['kollane', 'punane', 'sinine'];

const map1 = array1.map((x) => 'värv ' + x)
console.log(map1);




const animals = ['kanad', 'lehmad', 'lambad', 'sead', 'hobused', 'hiired']
const count = animals.push('koerad')
console.log(count); // 7 looma kokku
console.log(animals); // nimetab kõik loomad

animals.push ('kassid','lõvid', 'leopardid');
console.log(animals);

// function functionName (parameetrid komaga eraldatult) 

function greetUser(userName) {
    return 'Tere, ' + userName
}

const nameUser = 'Katre';
console.log(greetUser(nameUser));

// yl 2

// let age7 = 15; 

// if(age7 > 18){
//     console.log('täisealine');
// }
// else if(age7 >= 16) {
//     console.log('teismeline');
// }
// else{        SIIA EI SAA TINGIMUST PANNA TAHA
//     console.log('alakas');
// }

function ageGroup(userAge) {

    if(userAge<18){
        return 'Alaealine.'
    }

    else if(userAge >= 18 && userAge <= 65){
        return 'Täisealine.'
    }

    else {
        return 'Pensionär.'
}
}

let userAge9 = 66;
console.log(ageGroup(userAge9));

// yl3

function kontrolliPaarisVõiPaaritu(number){
    if(number % 2 === 0){
        return 'Arv on paaris.'
    }

    else {
        return 'Arv on paaritu.'
    }
}

const funcNumber = 8;
console.log(kontrolliPaarisVõiPaaritu(funcNumber));

function greetUserAge(userName, userAge) {
    return 'Tere, ' + nameUser + '. Oled alaealine (' + userAge9 + '-aastane).';
}


console.log(greetUserAge());

// massiivid ja tsüklid

// const = nimetus = [asjad, komaga]

let snacks = ['krõpsud', 'küpsised', 'šokolaad', 'kummikommid', 'juustupulgad'];
// snacks[5] = 'kananagitsad';
snacks.push('kananagitsad')
snacks[0] = 'pähklid';
//snacks.unshift('pähklid'); // lisab kõige esimeseks veel ühe väärtuse, kuid ei asenda seda
snacks.sort();
console.log(snacks, snacks.length);

// ylesanne 2

// let coding = ['javascript', 'python', 'cpp']

// for(let i = 0; i < coding.length; i++){
//     console.log(coding[i]);
// }

let numbrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i=0; i<numbrid.length; i++) {
    console.log(numbrid[i]);
}

let sum = 0;

for (let i=1; i<numbrid.length; i++){
    if(i % 2 === 0) {
    sum += i;
    }
}

console.log('Paarisarvude summa on: ' + sum);

// function greetUser(userName) {
//     return 'Tere, ' + userName
// }