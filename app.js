
function Dinos (species, weight, height, diet, where, when, fact) {
    
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.image = `images/${species.toLowerCase()}.png`;
}




    const dino1 = new Dinos('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh');
    const dino2= new Dinos('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.');
    const dino3 = new Dinos('Anklyosaurus', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', 'Anklyosaurus survived for approximately 135 million years.');
    const dino4 = new Dinos('Brachiosaurus', 70000, 372, 'herbavor', 'North America', 'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991.');
    const dino5 = new Dinos('Stegosaurus', 11600, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines.');
    const dino6 = new Dinos('Elasmosaurus', 16000, 59, 'carnivor', 'North America, Europe, Asia', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas.');
    const dino7= new Dinos('Pteranodon', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur.');
    const dino8= new Dinos('Pigeon', 0.5, 9, 'herbavor', 'World Wide', 'Holocene', 'All birds are dinosaurs.');

    

    const dinosCentral = [dino1, dino2, dino3, dino4, dino5, dino6, dino7];

    
    const manKindData = function () {

        const name = document.getElementById('name').value;
        const height = Number(document.getElementById("inches").value) +
        Number(document.getElementById("feet").value) * 12;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;
        
        return      {
            name: name,
            height: height,
            weight: weight,
            diet: diet,
            image: 'images/human.png'
            
            

        }
      


    }
     
  

    const manKindName =  manKindData.name;        
    const manKindWeight = manKindData.weight;
    const manKindHeight =   manKindData.height;
    const manKindDiet =     manKindData.diet;

           

                            
    
    
    // Loop over each Dino in Array dinoCentral

    let x = Math.floor((Math.random() * 8) + 1);  

   Dinos.prototype.compareWeight = function (manKindWeight) {

    for (let i = 1* x; i < dinosCentral.length; i++) {
        if (dinosCentral[i].weight > manKindWeight) {
            return `${dinosCentral[i].species} is heavier than you`;
        } else if (dinosCentral[i].weight < manKindWeight) {
            return `${dinosCentral[i].species} is lighter than you`;
        } else {
            return `${dinosCentral[i].species} is as heavy as you`;
        }
    }

    }
          

    Dinos.prototype.compareHeight = function (manKindHeight) {

        for (let i = 1* x; i < dinosCentral.length; i++) {
            if (dinosCentral[i].height > manKindHeight) {
                return `${dinosCentral[i].species} is taller than you`;
            } else if (dinosCentral[i].height < manKindHeight) {
                return `${dinosCentral[i].species} is shorter than you`;
            } else {
                return `${dinosCentral[i].species} is as tall as you`;
            }
        }
    }
      
  

     Dinos.prototype.compareDiet = function (manKindDiet) {

        for (let i = 1* x; i < dinosCentral.length; i++) {
            if (dinosCentral[i].diet === manKindDiet) {
                return `${dinosCentral[i].species} and you have the same diet`;
            } else {
                return `${dinosCentral[i].species} and you have different diets`;
            }
        }
    }


   const dinoWeight = Dinos.prototype.compareWeight(manKindWeight);
   const dinoHeight = Dinos.prototype.compareHeight(manKindHeight);
   const dinoDiet = Dinos.prototype.compareDiet(manKindDiet);
   

// Add random fact from dino object and get multiple random elements from the array list
 


let randomFact = [dino1.fact, dino2.fact, dino3.fact, dino4.fact, dino5.fact, dino6.fact, dino7.fact, dinoWeight, dinoHeight, dinoDiet];  


let  chooseRandomFact= randomFact => randomFact[Math.floor((Math.random()*randomFact.length))];

     

        // Generate Tiles for each Dino in Array

        const generateTiles = function () {
            const dinoArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];
            
            const manKindArray = [manKindName];
            dinoArray.splice(4, 0, manKindArray);
            const dinoAndManKindArray = dinoArray;
            const grid = document.getElementById('grid');
            const manName = document.getElementById('name').value;
            
            
            
            for (let i = 0; i < dinoAndManKindArray.length; i++) {
                const tile = document.createElement('div');
                tile.className = 'grid-item';
                if (i === 4) {



                    tile.innerHTML = `<h3>${manName}</h3>
                    <img src="images/human.png" alt="human">
                    `;
                } else {
                    
                    tile.innerHTML = `<h3>${dinoAndManKindArray[i].species}</h3>
                    <img src="${dinoAndManKindArray[i].image}" alt="${dinoAndManKindArray[i].species}">
                    <p>${dinoAndManKindArray[i].species === dinoAndManKindArray[8].species  ? dino8.fact : chooseRandomFact(randomFact)}</p>
                    `;
                    
                }

                grid.appendChild(tile);
            }

            

        }
        
    

     const removeForm = function () {
       const form = document.getElementById('dino-compare');
          form.style.display = 'none';
    };

 

    const button = document.getElementById('btn');

    button.addEventListener('click', function () {
        
        removeForm();
        
        generateTiles();
    });


    document.getElementById("clickMe").onclick = function clicked(){
    	window.location.hash = 'reload';
    	window.location.reload( true );
    }
    
    
    