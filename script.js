function fibonacci(num) {
    if (num <= 0) {
        throw new Error("Input should be a positive integer.");
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function calculateFibonacci() {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    try {
        const num = parseInt(input);
        if (isNaN(num) || num <= 0) {
            resultElement.textContent = "Please enter a valid positive integer.";
        } else {
            const result = fibonacci(num);
            resultElement.textContent = `The ${num}th Fibonacci number is ${result}.`;
        }
    } catch (error) {
        resultElement.textContent = error.message;
    }
}

