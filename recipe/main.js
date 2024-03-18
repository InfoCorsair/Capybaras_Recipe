let nameA = true;
let dateA = true;
let servA = true;
let cookA = true;
let ingA = true;
var jsonArray = [
{
  "name": "Fried Pickles",
    "ing": 5,
    "servings": 2,
    "cook": 20,
    "date": "1/22/2024",
    "tags": ["Vegan","Vegetarian","Gluten Free"]
},
{

  "name": "Chicken Nuggets",
  "ing": 24,
  "servings": 4,
  "cook": 10,
  "date": "10/5/2024",
  "tags": ["Vegan"]

},
{
  "name": "Stirfry",
  "ing": 47,
  "servings": 18,
  "cook": 12,
  "date": "6/2/2019",
  "tags": ["Vegetarian", "Gluten Free"]
},
{
  "name": "Mac n cheese",
  "ing": 12,
  "servings": 3,
  "cook": 3,
  "date": "6/2/2019",
  "tags": ["Gluten Free"]
},

{

  "name": "Cheese Fries",
  "ing": 3,
  "servings": 2,
  "cook": 15,
  "date": "7/12/2008",
  "tags": ["Stove Top", "Vegan"]
}
];

function addRecipe(){

}

function generateHTMLFromJSON() {
  var contentContainer = document.getElementById('content');
  var it = 0;
  jsonArray.forEach(function(item) {
    
      var itemDiv = document.createElement('div');
      itemDiv.className = 'item';


      itemDiv.innerHTML = `
      <div class="row">
      <div class="col-md">${item.name}</div>
      <div class="col-md">${item.ing} Ingredients</div>
      <div class="col-md">Serves ${item.servings}</div>
      <div class="col-md">${item.cook} Minutes</div>
      <div class="col-md">${item.date}</div>
      <div class="col-md">
      

<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#${it.toString()}" role="button" aria-expanded="false" aria-controls="${it.toString()}">
    Tags
  </a>
 </p>
<div class="collapse" id="${it.toString()}">
  <div class="card card-body">
  ${item.tags} 
  </div>
</div>



      </div>
      </div>
      `;
  it += 1;


      contentContainer.appendChild(itemDiv);
      });
}


window.onload = function() {
  generateHTMLFromJSON();
};

function sortIngredients(){
  var container = document.getElementById('content');
  container.innerHTML = '';
  jsonArray.sort(function(a, b) {
      if(ingA == true){
      return a.ing - b.ing;
      }else{
      return b.ing - a.ing;
      }
      });
  generateHTMLFromJSON(); 
}
function sortCook(){
  var container = document.getElementById('content');
  container.innerHTML = '';
  jsonArray.sort(function(a, b) {
      if(cookA == true){
      return a.cook - b.cook;
      }else{
      return b.cook - a.cook;
      }
      });
  generateHTMLFromJSON();  
}
function sortName(){
  var container = document.getElementById('content');
  container.innerHTML = '';
  if (nameA == false) {
    jsonArray.sort(function(a, b) {
        if (a.name < b.name) {
        return -1;
        }
        if (a.name > b.name) {
        return 1;
        }
        return 0;
        });
  } else {
    jsonArray.sort(function(a, b) {
        if (a.name > b.name) {
        return -1;
        }
        if (a.name < b.name) {
        return 1;
        }
        return 0;
        });
  }
  generateHTMLFromJSON();

}
function sortServings(){
  var container = document.getElementById('content');
  container.innerHTML = '';
  jsonArray.sort(function(a, b) {
      if(servA == true){
      return a.servings - b.servings;
      }else{
      return b.servings - a.servings;
      }
      });
  generateHTMLFromJSON(); 
}



function onClickName() {
  var buttons = document.querySelectorAll("[tag='name']");

  buttons.forEach(function(button) {
      if (nameA) {
      button.textContent = "Name Z->A";
      } else {
      button.textContent = "Name A->Z";
      }
      });

  sortName(); 
  nameA = !nameA;
}
function onClickIng() {
  var buttons = document.querySelectorAll("[tag='numIng']");


  buttons.forEach(function(button) {
      if (ingA) {
      button.textContent = "# of Ingredients L->G";
      } else {
      button.textContent = "# of Ingredients G->L";
      }
      });
  sortIngredients();
  // Toggle the state
  ingA = !ingA;
}
function onClickDate() {
  var buttons = document.querySelectorAll("[tag='date']");

  buttons.forEach(function(button) {
      if (dateA) {
      button.textContent = "Date L->G";
      } else {
      button.textContent = "Date G->L";
      }
      });


  dateA = !dateA;
}
function onClickServ() {
  var buttons = document.querySelectorAll("[tag='serv']");

  buttons.forEach(function(button) {
      if (servA) {
      button.textContent = "Servings L->G";
      } else {
      button.textContent = "Servings G->L";
      }
      });
  sortServings();


  servA = !servA;
}
function onClickCook() {
  var buttons = document.querySelectorAll("[tag='cook']");

  buttons.forEach(function(button) {
      if (cookA) {
      button.textContent = "Cook Time L->G";
      } else {
      button.textContent = "Cook Time G->L";
      }
      });
  sortCook();

  cookA = !cookA;
}
