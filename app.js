


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

    

   

   


    const manKindData = function () {
        const name = document.getElementById('name').value;
        const height = Number(document.getElementById("inches").value) +
        Number(document.getElementById("feet").value) * 12;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;
        
        return {name, height, weight, diet};  
        
    }
    

        

        function manKind(name, height, weight, diet) {
            this.name = name;
            this.height = height;
            this.weight = weight;
            this.diet = diet; 
            

        }
      
            
    
        const man = new manKind((manKindData().name), (manKindData().height), (manKindData().weight), (manKindData().diet));

                
        const manKindWeight = man.weight;
        const manKindHeight = man.height;
        const manKindDiet = man.diet;
        

    Dinos.prototype.compareWeight = function (manKindWeight) {
        if (this.weight > manKindWeight) {
            return `${this.species} weighs ${this.weight - manKindWeight} lbs more than you!!`;
        } else if (this.weight < manKindWeight) {
            return `You weigh ${manKindWeight - this.weight} lbs more than ${this.species}!`;
        } else {
            return `You weigh the same as ${this.species}!`;
        }
    }

    
  

    Dinos.prototype.compareHeight = function (manKindHeight) {
        if (this.height > manKindHeight) {
            return `${this.species} is ${this.height - manKindHeight} inches taller than you!!`;
        } else if (this.height < manKindHeight) {
            return `You are ${manKindHeight - this.height} inches taller than ${this.species}!!`;
        } else {
            return `You are the same height as ${this.species}!!`;
        }
    }

        
  

    Dinos.prototype.compareDiet = function (manKindDiet) {
        if (this.diet === manKindDiet) {
            return `You and ${this.species} are both ${this.diet}s!!`;
        } else {
            return `You are a ${manKindDiet} and ${this.species} is a ${this.diet}!!`;
        }   
    }

    let dinoWeight = Dinos.prototype.compareWeight.bind(Dinos);
    let dinoHeight = Dinos.prototype.compareHeight.bind(Dinos); 
    let dinoDiet =  Dinos.prototype.compareDiet.bind(Dinos);
   

// Add random fact from dino object get multiple random elements from the array list
 var randomFact = [dino1.fact, dino2.fact, dino3.fact, dino4.fact, dino5.fact, dino6.fact, dino7.fact, dinoHeight, dinoWeight, dinoDiet];


 var chooseRandomFact= randomFact => randomFact[Math.floor((Math.random()*randomFact.length))];



 
 

        // Generate Tiles for each Dino in Array

        const generateTiles = function () {
            const dinoArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];
            
            const manKindArray = [man];
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
                    <p>${chooseRandomFact(randomFact)}</p>
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


 