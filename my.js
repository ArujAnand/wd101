let userForm = document.getElementById("usrForm");

const saveUserForm = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("tick").checked;

    // Creating object of details
    const entry = {
        name,
        email,
        password,
        dob,
        terms
    };

    console.log(password);

    const userDataKey = "userData"; // Use a specific key for localStorage

    const existingData = JSON.parse(localStorage.getItem(userDataKey)) || [];

    existingData.push(entry);

    localStorage.setItem(userDataKey, JSON.stringify(existingData));

    // Update the table without creating a new row
    const dataTable = document.getElementById("dataTable");
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;
    dataTable.appendChild(newRow);
};

// Load existing data and update the table
const existingData = JSON.parse(localStorage.getItem("userData")) || [];
if (existingData.length > 0) {
    const dataTable = document.getElementById("dataTable");
    existingData.forEach(entry => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${entry.name}</td><td>${entry.email}</td><td>${entry.password}</td><td>${entry.dob}</td><td>${entry.terms}</td>`;
        dataTable.appendChild(newRow);
    });
}