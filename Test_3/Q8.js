function isPerfectNumber(num) {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}

function findPerfectNumbers() {
    let input = document.getElementById("arrayInput").value;
    let arr = input.split(",").map(num => parseInt(num.trim()));
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPerfectNumber(arr[i])) {
            indices.push(i);
        }
    }
    document.getElementById("result").innerText = "Indices of perfect numbers: " + (indices.length > 0 ? indices.join(", ") : "None");
}