function Profile(name, email, profession) {
    this.name = name;
    this.email = email;
    this.profession = profession;

}

function Ui() {};
Ui.prototype.addNewEntry = function({ name, email, profession }) {

    const tr = document.createElement('tr');

    tr.innerHTML = `<th scope = "row" > ${name} </th> 
    <td> ${email} </td> 
    <td> ${profession} </td> 
    <td> <a><i id='delete' class="fa fa-trash-o fa-lg"></i></a> </td>`;

    document.querySelector('#profile-list').appendChild(tr);
};

Ui.prototype.clearField = function() {

    document.querySelector('#name').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#profession').value = ''
}


Ui.prototype.deleteProfile = function(target) {
    if (target.id === 'delete') {
        target.parentElement.parentElement.parentElement.remove();
    }
};




document.querySelector('form').addEventListener('submit', e => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const profession = document.querySelector('#profession').value;

    const profileEntry = new Profile(name, email, profession);

    const uiEntry = new Ui();


    if (name === '' || email === '' || profession === '')

    {
        alert('Some Fields Might Be Empty.')
    } else {
        uiEntry.addNewEntry(profileEntry);
        uiEntry.clearField();
    }
    e.preventDefault();
})

//Activating Delete Button using event delegation

document.querySelector('#profile-list').addEventListener('click', e => {
    const ui = new Ui();
    ui.deleteProfile(e.target);
})