// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coin = 0;
    let quantity = {};

    if (currency < 10000) {
      if (currency <= 0) {
        quantity = {};
      }

      if (currency >= 50) {
        coin = Math.floor(currency/50);
        currency = currency - coin*50;
        if (coin > 0) {
          quantity.H = coin;
        }
      }

      if (currency >= 25) {
        coin = Math.floor(currency/25);
        currency = currency - coin*25;
        if (coin > 0) {
            quantity.Q = coin;
        }
      }

      if (currency >= 10) {
        coin = Math.floor(currency/10);
        currency = currency - coin*10;
        if (coin > 0) {
          quantity.D = coin;
        }
      }

      if (currency >= 5) {
        coin = Math.floor(currency/5);
        currency = currency - coin*5;
         if (coin > 0) {
            quantity.N = coin;
        }
      }

      if (currency >= 1) {
        quantity.P = currency;
      }
  } else {
    quantity = {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

    return(quantity);
}


