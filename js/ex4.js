console.log("Jeffry's Output from Tutorial 4 Example 4");

let password = String(prompt("Enter your password:"))

let attempt = 1;

pass = "secret"

if (password == pass){
    document.write("Welcome, you are now logged in...")
    console.log("Welcome, you are now logged in...")
}

if (attempt == 3){
    console.log("You've attempted" + attempt + "times")
}

while (attempt <=3){
    password = String(prompt("Enter your password:"));
    attempt++;
}

