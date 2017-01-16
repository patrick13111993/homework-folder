#JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

Will print "My name is Keith" to the console. The variable name is created then used as part of a string within the function.

```

### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

3 will be printed to the console as the variable score is redefined when the function is called.

```

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

Output will be 0: Ducks 1: Dogs 2: Lions

array myAnimals is redefined as a global variable and given new values within the listAnimals function.

```

### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

Output = Suspects include: Jay, Val, Harvey, Rick
Suspect three is: Keith

Variable suspectThree is redefined but only within the scope of its parent function.
```

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

Console will output Poirot as the name has been redefined.
```

### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

Output will be rick, murderer is a local variable within the functions.
```

### Episode 7 - Make up your own episode/s!

var veryNaughtyBoy = "Brian";
var crucifed = true;

var whoIsAVeryNaughtyBoy = function() {
  var veryNaughtyBoy = null
  if(veryNaughtyBoy) {
    return veryNaughtyBoy
  } else if(crucified == 1) {
    return "He's the Messiah!"
  } else {
    return "Always look on the bright side of life!"
  }
}

console.log(whoIsAVeryNaughtyBoy());

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
