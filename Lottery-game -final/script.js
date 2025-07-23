const pickNumberBtn = document.getElementById("pickNumberBtn");
const resultBtn = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tick = new Audio("tap.wav");
const gameover = new Audio("completed game.wav");
const gifts = [
  " ₹100 Cash",
  " Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  " Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  " Backpack",
  "Gift Hamper",
];

pickNumberBtn.addEventListener("click", function () {
  for (let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
    //console.log(i);
  }
  resultBtn.textContent = "Please wait...";
  // setTimeout(function () {
  //   let randomNum = Math.random() * 50;
  //   let drawnNumber = Math.floor(randomNum) + 1;

  //   const gift = gifts[drawnNumber - 1];

  //   resultBtn.textContent = `You have got ${drawnNumber}, and You won ${gift}`;
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  // }, 5000);
  let secondsCount = 0;
  const intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondsCount++;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    console.log(randomBox);
    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }
    //document.getElementById(randomBox).classList.add("highlightedBox");
    if (secondsCount === 5) {
      let randomNum = Math.random() * 50;
      let drawnNumber = Math.floor(randomNum) + 1;
      const gift = gifts[drawnNumber - 1];
      resultBtn.textContent = `You have got ${drawnNumber}, and You won ${gift}`;
      document.getElementById(randomBox).classList.remove("highlightedBox");

      document.getElementById(drawnNumber).classList.add("winningBox");
      clearInterval(intervalId);
      gameover.pause();
      gameover.currentTime = 0;
      gameover.play();
    }
  }, 1000);
});
gifts.forEach(function (value, i) {
  const boxElement = `<div class="box" id=${i + 1}> ${i + 1}.${value}</div>`;
  console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
