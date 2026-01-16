
// alert("kasddsabub")


const studentInfo = [];

function validateStudentName(studentName) {
    let isValid = true;
    if(studentMark.length > 2) {
        alert("please enter more that two char")
        isValid = false;
    }

    if(studentMark.length == 0) {
        alert("please fill the name")
        isValid = false;
    }
    return isValid;
}

function validateStudentMark(studentMark) {
    let isValid = true;
    if(!(studentMark >= 0 && studentMark <= 100)) {
        alert("please enter the mark between 0 to 100")
        isValid = false
    }
    if(studentMark.length == 0) {
        alert("pleasae fill the mark ")
        isValid = false;
    }

    return isValid;
}

function storeInformation(studentName,studentMark) {
    validateStudentName(studentName)
    validateStudentMark(studentMark)

    const eachInfo = {}
    eachInfo.name = studentName;
    eachInfo.mark = studentMark

    console.log(eachInfo);

    studentInfo.push(eachInfo);
}

window.addEventListener("DOMContentLoaded", function () {
    const studentName = document.getElementById("studentName").value
    const studentMark = document.getElementById("marks").value
    const btn = document.querySelector('.btn')

    btn.addEventListener('')
});