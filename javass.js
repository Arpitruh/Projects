document.getElementById("calculate").addEventListener("click", function () {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (birthdate > today) {
        document.getElementById("result").innerHTML = "Please enter a valid birthdate.";
    } else {
        const age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            document.getElementById("result").innerHTML = "Your age is " + (age - 1) + " years.";
        } else {
            document.getElementById("result").innerHTML = "Your age is " + age + " years.";
        }
    }
});
