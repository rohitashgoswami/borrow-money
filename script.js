const friendOne = document.querySelector('.friend-1 span');
const friendTwo = document.querySelector('.friend-2 span');
const returnButton = document.querySelector('.return');
const borrowButton = document.querySelector('.borrow');


const totalMoney = 10000;

let friendTwoMoney = 0;
let friendOneMoney = totalMoney - friendTwoMoney;

friendOne.innerText = friendOneMoney;
friendTwo.innerText = friendTwoMoney;

borrowButton.addEventListener('click',() => {
    if(friendOneMoney >0){
        friendOneMoney -= 500;
        friendOne.innerText = friendOneMoney;
        friendTwoMoney += 500;
        friendTwo.innerText = friendTwoMoney;
    }

})

returnButtonButton.addEventListener('click',() => {
    if (friendTwoMoney > 0) {
        friendOneMoney += 500;
        friendOne.innerText = friendOneMoney;
        friendTwoMoney -= 500;
        friendTwo.innerText = friendTwoMoney;       
    }
})