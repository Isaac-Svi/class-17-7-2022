function checkAge(age) {
    if (age < 18) {
        return "Sorry, you're too young.";
    } else {
        return "Yay! You're old enough!";
    }
}

console.log(checkAge(21));
