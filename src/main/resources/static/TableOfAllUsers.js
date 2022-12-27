$(async function() {
    await findAll();
});
const table = $('#usersTable');
async function findAll() {
    table.empty()
    fetch("http://localhost:8081/admin/users")
        .then(res => res.json())
        .then(data => {
            data.forEach(user => {
                let usersTable = `$(
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.lastName}</td>
                            <td>${user.age}</td>   
                            <td>${user.login}</td>
                            <td>${user.roles}</td>
                            <td>
                                // <button type="button" class="btn btn-warning" data-toggle="modal" id="buttonEdit"
                                // data-action="edit" data-id="${user.id}" data-target="#edit">Edit</button>
                            </td>
                            <td>
                                // <button type="button" class="btn btn-danger" data-toggle="modal" id="buttonDelete"
                                // data-action="delete" data-id="${user.id}" data-target="#delete">Delete</button>
                            </td>
                        </tr>)`;
                table.append(usersTable);
            })
        })
}