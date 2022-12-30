let form = document.forms["formEditUser"];
editUser();

async function editModalData(id) {
    const modal = new bootstrap.Modal(document.querySelector('#editModal'));
    modal.show();
    let user = await getUser(id);
    form.id.value = user.id;
    form.name.value = user.name;
    form.lastName.value = user.lastName;
    form.age.value = user.age;
    form.login.value = user.login;
    form.roles.value = user.roles[0].id;
}

function editUser() {
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        let editUserRoles = [];
        for (let i = 0; i < form.roles.options.length; i++) {
            if (form.roles.options[i].selected) editUserRoles.push({
                id: form.roles.value,
                name: "ROLE_" + form.roles.options[i].text
            });
        }
        fetch("http://localhost:8081/admin/users/" + form.id.value, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: form.id.value,
                name: form.name.value,
                lastName: form.lastName.value,
                age: form.age.value,
                login: form.login.value,
                password: form.password.value,
                roles: editUserRoles
            })
        }).then(() => {
            $('#editFormCloseButton').click();
            findAll();
        });
    });
}




