
let letters = "abcdefghijklmnopqrstuvxwyz";
let letterArray = Array.from(letters);

letterContauner = document.querySelector(".letters");


letterArray.forEach(letter =>{
 let span = document.createElement("span");
 span.textContent = `${letter}`;
 span.className = "box"

 letterContauner.appendChild(span);
});

let words = {
    jops : ["doctor","nurse","electrician","engineer","delivery","pharmacist","teacher","photographer"],
    food :["chicken","strawberry","cheese","cookies","carrot","spinach","pineapple","avocado","broccoli"],
    countries :["germany","brazil","mexico","algeria","nigeria","vietnam","pakistan","lebanon","tunisia"],
    animals :["sheep","horse","cow","giraffe","elephant","eagle","crocodile","parrot","chimpanzee"]
}
let allkeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random()*allkeys.length);

let randomPropName = allkeys[randomPropNumber];

let randomPropValu = words[randomPropName];

let randomWordNumber = Math.floor(Math.random()*randomPropValu.length);

let word = randomPropValu[randomWordNumber];

console.log(word);

document.querySelector(".category span ").innerHTML = randomPropName;


let guess = Array.from(word);
console.log(guess);

let letterGues = document.querySelector(".letters-guess") ;


 guess.forEach(letter => {
    let span = document.createElement("span");

    letterGues.appendChild(span);
})

let spans = document.querySelectorAll(".letters-guess span");



let rong = 0;

let sap =0;

let drow = document.querySelector('.hangman-draw');
 
document.addEventListener("click",(e) =>{

   let statu = false;
  

   if(e.target.className === 'box'){

       e.target.classList.add("cliked");

       let targtLetter = e.target.innerHTML.toLowerCase();

        guess.forEach((letter,index ) => {
    
          if(letter === targtLetter ){
              statu = true;
             spans[index].innerHTML = targtLetter; 
             sap++;
           }

        });


        if(statu !== true){
         rong++;
         drow.classList.add(`rong-${rong}`);
         document.querySelector(".fill").play();
         
         if(rong === 8){
           
          setTimeout(()=>{
            gameOver(0);},1000
          )

         }
   
        }else{
          document.querySelector(".succes").play();  
          if(sap === guess.length){
           setTimeout(()=>{
            gameOver(1);},1000
          )
          }
          

         }
    }

});


let popup=document.querySelector(".overlay");
let title=document.querySelector(".title");
let msg=document.querySelector(".message");

function gameOver(v ){
   document.querySelector(".letters").classList.add("finish");
   if(v==0){
    title.textContent="wrong!";
   }else if(v==1){
    title.textContent="Félicitations!";
   }
  popup.style.display="flex";
}


let exit=document.querySelector(".exit");
exit.addEventListener("click",()=>{
  popup.style.display="none";
  location.reload()
})


