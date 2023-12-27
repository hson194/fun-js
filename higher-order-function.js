//Ironman Test
const participants = ["Samson", "T-rex", "Hikari"];

//Swimming
function swimmingStage(members) {
  console.log("------");
  for (let i = 0; i < members.length; i++) {
    console.log(`${members[i]} is swimming`); // Different part
  }
}
swimmingStage(participants);

//Cycling
function cyclingStage(members) {
  console.log("------");
  for (let i = 0; i < members.length; i++) {
    console.log(`${members[i]} is cycling`); // Different part
  }
}
cyclingStage(participants);

//Running
function runningStage(members) {
  console.log("------");
  for (let i = 0; i < members.length; i++) {
    console.log(`${members[i]} is running`); // Different part
  }
}

runningStage(participants);

//==== Refactor code with higher-order function ====

// testing function: higher-order function
// doSmth function: callback function
function testing(members, doSmth) {
  console.log("---refactor---");
  for (let i = 0; i < members.length; i++) {
    doSmth(members[i]);
  }
}

function swimming(member) {
  console.log(`${member} is swimming`);
}

function cycling(member) {
  console.log(`${member} is cycling`);
}

function running(member) {
  console.log(`${member} is running`);
}

testing(participants, swimming);
testing(participants, cycling);
testing(participants, running);

//==== Use case of higher-order function in Javascript
Array.prototype.testing = function (doSmth) {
  console.log("---use case---");
  for (let i = 0; i < this.length; i++) {
    doSmth(this[i]);
  }
};

participants.testing((member) => console.log(`${member} is swimming`));
participants.testing((member) => console.log(`${member} is cycling`));
participants.testing((member) => console.log(`${member} is running`));

//Source: Higher-Order Functions ft. Functional Programming | Namaste JavaScript Ep. 18
