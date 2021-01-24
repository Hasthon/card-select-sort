let up = document.querySelector(".up-suit")
let number = document.querySelector(".number")
let down = document.querySelector(".down-suit")
let input = document.querySelector("#input")
let btn = document.querySelector("#Draw")
let sort = document.querySelector("#Sort")
let allcard = 0;
let cardarray = [];

let suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
let color = ['black', 'black', 'red', 'red']


function randomCard() {
    const arrCard = []
    for (let i = 0; i < allcard; i++) {
        let randomSuit = Math.floor(Math.random() * suits.length);
        let randomNum = Math.floor(Math.random() * nums.length);
        arrCard.push({ randomSuit, randomNum })
    }
    return arrCard;
}


function cardHtml(randomSuit, randomNum) {
    let newcard = document.createElement("div");
    let bodycard = document.createElement("div");
    let col = document.createElement("div");
    let newUpS = document.createElement("span");
    let newDownS = document.createElement("span");
    let newCardNum = document.createElement("span");

    newcard.classList.add("card");
    bodycard.classList.add("body-card");
    newUpS.classList.add("up-suit")
    newDownS.classList.add("down-suit")
    newCardNum.classList.add("number")

    newUpS.style = 'color:' + color[randomSuit]
    newDownS.style = 'color:' + color[randomSuit]
    newCardNum.style = 'color:' + color[randomSuit]

    newUpS.innerHTML = suits[randomSuit];
    newDownS.innerHTML = suits[randomSuit];
    newCardNum.innerHTML = nums[randomNum];

    bodycard.appendChild(newUpS);
    bodycard.appendChild(newDownS);
    bodycard.appendChild(newCardNum);
    newcard.appendChild(bodycard);
    col.appendChild(newcard);
    return col.innerHTML;

}

btn.addEventListener("click", () => {
    allcard = input.value;
    cardarray = randomCard(allcard);
    let html = '';
    for (let i = 0; i < cardarray.length; i++) {
        html += cardHtml(cardarray[i].randomSuit, cardarray[i].randomNum);
        input.value = "";
    }
    document.getElementById('cards').innerHTML = html;

});

const umberta = () => {
      let html = '';
            let p= document.createElement("p")
            for (let i = 0; i < cardarray.length; i++) {
                html += cardHtml(cardarray[i].randomSuit, cardarray[i].randomNum);
                input.value = "";
            }
             p.innerHTML=html;
             document.body.appendChild(p);
}

sort.addEventListener("click", () => {
let n = cardarray.length;

for (let i=0; i < n; i++){
    let min =i;
    for(let j = i+1; j < n; j++){
        if(cardarray[j].randomNum < cardarray[min].randomNum){
            min =j
        }
    }
    if (min !=i){
        let tmp =cardarray[i];
        cardarray[i]=cardarray[min];
        cardarray[min]= tmp;
    }
    umberta();
}
return cardarray;
})

