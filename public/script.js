async function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ num1, num2, operation })
    });

    const data = await response.json();
    document.getElementById('result').innerText = data.error ? data.error : `Result: ${data.result}`;
}

