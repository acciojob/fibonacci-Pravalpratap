function fibonacci(num) {
  let a = 0, b = 1;
  
    if (num === 1) {
      return a;
    } else if (num === 2) {
      return b;
    }

    for (let i = 3; i <= num; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }

    return b;
}

function showFibonacci() {
  let num = parseInt(document.getElementById('num').value, 10);
  
  if (isNaN(num) || num < 1 || num > 50) {
    document.getElementById('result').textContent = "Please enter a valid number between 1 and 50.";
    return;
  }
  
  let result = fibonacci(num);
  document.getElementById('result').textContent = "The " + num + "th Fibonacci number is: " + result;
}
