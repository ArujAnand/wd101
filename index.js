let userform = document.getElementById("user-form");
const submit = document.getElementById('submit');


const saveForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("tick").checked;

    const entry = {
        name,
        email,
        password,
        dob,
        terms
    };

    let tr = document.createElement('tr');
    
    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = password;
    td4.innerHTML = dob;
    td5.innerHTML = terms;

    document.getElementById("dataEntry").appendChild(tr);

    // const stringifiedUserData = JSON.stringify(entry);
    // console.log(stringifiedUserData);

    // sessionStorage.setItem("entry", stringifiedUserData);

    // const retrieved = sessionStorage.getItem("entry");
    // const parsed = JSON.parse(retrieved);

    // console.log(parsed.name);
}

submit.addEventListener('click', saveForm);