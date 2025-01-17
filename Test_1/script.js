var nameo = document.querySelector("#name");
var roll = document.querySelector("#roll");
var genderMale = document.querySelector("#gender-male");
var genderFemale = document.querySelector("#gender-female");
var branch = document.querySelector("#branch");
var mark1 = document.querySelector("#mark1");
var mark2 = document.querySelector("#mark2");
var mark3 = document.querySelector("#mark3");
var mark4 = document.querySelector("#mark4");
var mark5 = document.querySelector("#mark5");
var showDetails = document.querySelector("#showDetails");
var showGrades = document.querySelector("#showGrades");
var output1 = document.querySelector("#output1");
var output2 = document.querySelector("#output2");

function checkGrades(number) {
    if (number >= 90) {
        return "O";
    } else if (number >= 80) {
        return "E";
    } else if (number >= 70) {
        return "A";
    } else if (number >= 60) {
        return "B";
    } else if (number >= 50) {
        return "C";
    } else if (number >= 40) {
        return "D";
    } else if (number >= 30) {
        return "E";
    } else {
        return "F";
    }
}

function getGenderValue() {
    if (genderMale.checked) return "Male";
    if (genderFemale.checked) return "Female";
    return "Not specified";
}

function parseMarks(value) {
    return parseInt(value) || 0;
}

showDetails.addEventListener("click", () => {
    output1.innerHTML = `
        <p>
            The name of the person is ${nameo.value || "Not specified"}.
            The roll number of the person is ${roll.value || "Not specified"}.
            The gender of the person is ${getGenderValue()}.
            The branch of the person is ${branch.value}.
            The marks obtained by the student are:
            <br> Mark 1 = ${mark1.value || "Not specified"}
            <br> Mark 2 = ${mark2.value || "Not specified"}
            <br> Mark 3 = ${mark3.value || "Not specified"}
            <br> Mark 4 = ${mark4.value || "Not specified"}
            <br> Mark 5 = ${mark5.value || "Not specified"}
        </p>`;
});

showGrades.addEventListener("click", () => {
    output2.innerHTML = `
        <p>
            The grades obtained by the student are:
            <br> Mark 1 = ${checkGrades(parseMarks(mark1.value))}
            <br> Mark 2 = ${checkGrades(parseMarks(mark2.value))}
            <br> Mark 3 = ${checkGrades(parseMarks(mark3.value))}
            <br> Mark 4 = ${checkGrades(parseMarks(mark4.value))}
            <br> Mark 5 = ${checkGrades(parseMarks(mark5.value))}
        </p>`;
});
