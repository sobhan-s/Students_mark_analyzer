
// alert("kasddsabub")


const studentInfo = [];




let btn = document.querySelector(".btn");
btn.addEventListener("click", function(e) {
        e.preventDefault()
        let fullName = document.getElementById('studentName').value
        let mark = document.getElementById("marks").value

        validateStudentName()
        validateStudentMark()

        storeInformation(fullName,mark)
        
        
        
})

function validateStudentName() {
    let name = document.getElementById("studentName")
    let isValid = true;
    if(name.length > 2) {
        isValid = false;
    }

    if(name.length == 0) {
        isValid = false;
    }
    return isValid;
}

function validateStudentMark() {
    let isValid = true;
    let mark = document.getElementById("marks")
    if(!(mark >= 0 && mark <= 100)) {
        isValid = false
        
    }
    if(mark.length == 0) {
        isValid = false;
        
    }

    return isValid;
}

function storeInformation(studentName,studentMark) {

    const eachInfo = {}
    eachInfo.name = studentName;
    eachInfo.mark = studentMark

    console.log(eachInfo);

    studentInfo.push(eachInfo);
    console.log(studentInfo);

    renderTable();
}


function renderTable() {
    const tableBody = document.getElementById('tableBody');
    console.log(tableBody);
    
    tableBody.innerHTML = studentInfo.map((eachStudent,index) => {
        `
            <tr>
                <td>
                    ${eachStudent.name}
                </td>
                <td>
                    ${eachStudent.mark}
                </td>
                <td>✏</td>
                <td>❌</td>
        </tr>
        `
    }).join(' ')
}
