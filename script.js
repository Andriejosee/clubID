function generateCard() {
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('student-id').value;
    const studentclub = document.getElementById('student-club').value;
    const address = document.getElementById('address').value;

    document.getElementById('display-name').innerText = name;
    document.getElementById('display-student-id').innerText = studentId;
    document.getElementById('display-student-club').innerText = studentclub;
    document.getElementById('display-address').innerText = address;
}
