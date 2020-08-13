// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "Lose" - Player robot's health is zero or less

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


// function to start a new game
var startGame = function() {
  //reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
  playerInfo.reset();
  for (var i =0; i < enemyNames.length; i++){
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Rounc " + (i+1));

      var pickedEnemyObj = enemyInfo[i];
      
      // generate random damage value based on player's attack power
      var damage = randomNumber (playerInfo.attack - 3, playerInfo.attack);

      pickedEnemyObj.health = randomNumber (40, 60);

      fight(pickedEnemyObj);

      if (playerInfo.health > 0 && i < enemy.names.length - 1){
        shop();
      }
    }

    else {
      window.alert ("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  //play again
  startGame();
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};  

// function to end the entire game
var endGame = function(enemy) {
  // if player is still alive, player wins!
  if (playerInfo.health > 0 ) {  
    window.alert("The game has now ended. Lets see how you did!");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  
  //ask player if the'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    // restart the game
    startGame ();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  var shopOptionPromt = window.prompt (
    "Would you like to Refill your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

  if (storeConfirm) {
    shop();
  }
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth()
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

// for (var i = 0; i < enemyNames.length; i++) {
  // debugger;
  // call fight function with enemy robot
  // fight(enemyNames[i]);
// }

//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

for (var i = 0; i < enemyInfo.length; i++) {
  var pickedEnemyName = enemyInfo.length[i];
  enemy.health = 50;
  // fight(pickedEnemy.name);
}

var fight = function(enemyName) {
  window.alert("Welcome to Robot Cladiators!");
  // if user picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
if (confirmSkip) {
  window.alert (playerInfo.name + " has decided to skip this fight. Goodbye!");
  // subtract money from playerInfo.money for skipping
  playerInfo.money = playerInfo.money - 10;
  console.log("playerInfo.money", playerInfo.money)
}
}
  while (playerinfo.health > 0 && enemy.health > 0) {
  // ask user if they'd liked to fight or run
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if user picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight      if (confirmSkip) {
  window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');    
  // subtract money from playerInfo.money for skipping
  playerInfo.money = Math.max(0, playerInfo.money - 10);
  console.log("playerInfo.money", playerInfo.money)
  break;
  }
}

  // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
  enemy.health = Math.max(0, enemy.health - playerInfo.attack);
  console.log(
    playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
  );

  if (enemy.health <= 0) {
    window.alert(enemy.name + ' has died!');

  // award player money for winning
    playerInfo.money = playerInfo.money + 20;

  // leave while() loop since enemy is dead
  } else {
    window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
  console.log(
    enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
  );

  // check player's health
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + ' has died!');
    // leave while() loop if player is dead
  } else {
    window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
  }
};


for(var i = 0; i < enemyNames.length; i++) {
  fight(enemy.names[i]);
}

// start the game when the page loads
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10
    }
  },
  {
    name: "Amy Android",
    attack: (10,14)
  },
  {
    name: "Robo Trumble",
    attack: (10,14)
  }
];
var enemyHealth = 50;
var enemyAttack = 12;
startGame();
