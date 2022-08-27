// Add you solution here

/*The sumApp class should have a 
  property numbers which is an array*/

class SumApp {
  constructor() {
    this.numbers = [];
  }

  /*The sumApp class should have a method addNumber(n) 
  which will add the given number to the numbers array*/
  addNumber(n) {
    this.numbers.push(n);
  }
  /* The sumApp class should have a method getSum()
  which return the sum of all numbers 
  added to the numbers array
  -The getSum() method should return 0 
  if no numbers have been added to the numbers array*/
  getSum() {
    //the sum is initialed to 0
    let sum = 0;
    //return the sum of all numbers
    //add to the numbers array
    //for (let number of this.numbers) {}

    this.numbers.forEach((number) => {
      sum += number;
    });

    console.log(sum);
    return sum;
  }

  /*The sumApp class should have a method reset() 
      which should delete all numbers previously 
      added to the numbers array*/
  reset() {
    this.numbers = [];
  }
}
