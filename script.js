let count = 0;
let chosenItems_X = [];
let chosenItems_O = [];


function chosen(id){
    if(!chosenItems_X.includes(id) && !chosenItems_O.includes(id)){
        count++;
        const x = document.createElement('img');
        count % 2 ? x.src = 'photos/o-png-89-images-in-collection-page-2-png-o-2000_2000.png' : x.src = 'photos/fileicon-red-xpng-x-png-256_256.png';
        x.width = 120;
        x.height = 120;
        document.getElementById(id).appendChild(x);
        count % 2 ? chosenItems_O.push(id) : chosenItems_X.push(id);
        console.log(chosenItems_X, chosenItems_O);
    }
    end();
}

function end(){
    if(count === 8){
        let h2 = document.createElement('h2');
        h2.textContent = 'END';
        document.getElementsByTagName('section').appendChild(h2);
    }
    console.log('end');
}