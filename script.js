function fibonacci(num) {
  if (num === 1) {
    return 0;  // The first number in the Fibonacci sequence is 0
  }
  if (num === 2) {
    return 1;  // The second number in the Fibonacci sequence is 1
  }

  let a = 0;  // First number in the sequence
  let b = 1;  // Second number in the sequence
  let fib = 0;

  for (let i = 3; i <= num; i++) {
    fib = a + b;  // Sum of the two preceding numbers
    a = b;  // Update the first preceding number
    b = fib;  // Update the second preceding number
  }

  return b;  // The numth Fibonacci number
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
