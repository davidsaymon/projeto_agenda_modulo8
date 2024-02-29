// Função para adicionar um novo contato à lista
function addContact() {
    // Obter valores dos campos de entrada
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Validar se o nome foi inserido
    if (name.trim() === '') {
        alert('Por favor, insira o nome do contato.');
        return;
    }

    // Criar um novo elemento de lista
    var contactItem = document.createElement('li');
    contactItem.textContent = name + ' - ' + phone;

    // Adicionar o novo contato à lista de contatos
    document.getElementById('contacts').appendChild(contactItem);

    // Limpar os campos de entrada após adicionar o contato
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}