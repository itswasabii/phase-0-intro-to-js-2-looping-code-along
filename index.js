for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, occasion) {
    
    let messages = [];
  
for (let i = 0; i < names.length; i++) {
      
      let message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
  
     
      messages.push(message);
    }
  
   
    return messages;
  }

  const messagesArray = writeCards(["Charlie", "Samip", "Ali"], "birthday");

   console.log(messagesArray);


   function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  
  countDown(10);