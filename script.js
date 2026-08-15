/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/


// This wrapper forces the computer to wait for the HTML buttons to exist!
var scriptBtn = document.getElementById("scriptBtn");

  if (scriptBtn) {
    scriptBtn.addEventListener("click", generateScript);
  }

function generateScript() {
  var name = document.getElementById("name").value;
  var displayScript = document.getElementById("scriptReturned");
  
  if (displayScript) {
    displayScript.innerHTML = "I, " + name + ", pledge to never participate in the hate or harassment in gaming!";
  }
}

var factList = [
  "Males were more likely to perpetuate toxic behavior, while female players were more likely to withdraw.", 
  "Players with higher levels of impulsivity and narcissism as well as those who are motivated by destruction or frequently engage in competitive brackets were more likely to engage in hateful conduct than those with more positive personality traits and broader motivations for play.", 
  "Women, nonheterosexual people and individuals with disabilities were more likely to be harassed.", 
  "Teens laughed off events more often than adult players, showing a generational difference between those growing up in an era of established toxic gamer culture and those who did not.", 
  "A large majority of adolescent players had been bystanders to hate-based harassment, and more than a third reported being a victim.", 
  "Participants responded to hate speech either by calling out and reporting an inflammatory event and supporting the victim or by withdrawing from the game and interaction completely."
];

window.onload = function() {
  var factBtn = document.getElementById("factBtn");
  var fact = document.getElementById("fact");
  var count = 0;

  if (factBtn) {
    factBtn.addEventListener("click", displayFact);
  }
};

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
