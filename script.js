function fibonacci(num) {
  let a = 0, b = 1;
  
  if (num === 1) {
    return a;
  }

  for (let i = 2; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}

function showFibonacci() {
  let num = document.getElementById('num').value;
  let result = fibonacci(num);
  document.getElementById('result').textContent = "The " + num + "th Fibonacci number is: " + result;
}
    }
}

