// 1)
function userCard(index) {

  let key = index,
      balance = 100,
      transactionLimit = 100,
      historyLogs = [];
  const moneyPrecision = 2;

  function generateHistoryLog(amount, operationType) {

    /*function formatingTime() {
      const nowTime = new Date();
      const addZero = (number) => {
        const minTwoDigitNumber = 10;
        return number < minTwoDigitNumber ? '0' + number : number;
      }

      let result = `${addZero(nowTime.getDate())}/${addZero(nowTime.getMonth() + 1)
        }/${nowTime.getFullYear()}, ${addZero(nowTime.getHours())
        }:${addZero(nowTime.getMinutes())}:${addZero(nowTime.getSeconds())}`;
      return result;
    }*/

    historyLogs.push({
      operationType,
      credits: amount,
      operationTime: new Date().toLocaleString('en-GB')//formatingTime()
    });
  }

  return {
    getCardOptions() {
      return {key, balance: +balance.toFixed(moneyPrecision), transactionLimit, historyLogs};
    },

    putCredits(put) {
      balance += put;
      generateHistoryLog(put, 'Received credits');
    },

    takeCredits(take) {
      balance -= take;
      generateHistoryLog(take, 'Withdrawal of credits');
    },

    setTransactionLimit(newLimit) {
      transactionLimit = newLimit;
      generateHistoryLog(newLimit, 'Transaction limit change');
    },

    transferCredits(amount, recipientsCard) {
      const tax = 0.005;
      const amountWithTax = +(amount * (1 + tax)).toFixed(moneyPrecision);

      if(balance < amountWithTax || transactionLimit < amountWithTax) {
        console.log('transfer break');
        return;
      }

      this.takeCredits(amountWithTax);
      recipientsCard.putCredits(amount);
    }
  }
}

/*const card1 = userCard(1);
card1.putCredits(100);
card1.putCredits(50);
card1.putCredits(10);
card1.takeCredits(80);
card1.setTransactionLimit(1000);
card1.takeCredits(147);
console.log(card1.getCardOptions());

const card3 = userCard(3);
card3.transferCredits(40, card1);
console.log(card1.getCardOptions());
console.log(card3.getCardOptions());*/


//  2)
class UserAccount {
  constructor(name) {
    this.name,
    this.cards = [],

    this.addCard = () => {
      const maxAmountOfCard = 3;
      if(this.cards.length < maxAmountOfCard) {
        this.cards.push(userCard(this.cards.length + 1));
      }
    },
    this.getCardByKey = (key) => {
      return this.cards[key - 1];
    }
  }
}

/*
let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
*/