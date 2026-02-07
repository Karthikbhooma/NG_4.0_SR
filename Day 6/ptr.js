function ptr() {
    let p = document.getElementById("amount").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    let interest = (p * r * t) / 100;
    document.getElementById("result").innerText = "The calculated interest is: " + interest;
}