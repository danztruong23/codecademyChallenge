let checkAge = () => {
    let userAge = prompt("Enter age:");
    let msg = (userAge >= 14) && (userAge <= 90) ? "Yes" : "Nah";
    console.log(msg);
}

checkAge();
