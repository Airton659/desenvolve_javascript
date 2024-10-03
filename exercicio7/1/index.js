document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    const userList = document.getElementById('user-list');
    const message = document.getElementById('message');

    if (!query) {
        alert('Digite um nome de usuário!');
        return;
    }

    fetch(`https://api.github.com/search/users?q=${query}`)
        .then(response => response.json())
        .then(data => {
            userList.innerHTML = '';

            if (data.total_count === 0) {
                message.classList.remove('hidden');
            } else {
                message.classList.add('hidden');

                data.items.forEach(user => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="${user.avatar_url}" alt="${user.login}" width="50">
                        <a href="${user.html_url}" target="_blank">${user.login}</a>
                    `;
                    userList.appendChild(li);
                });
            }
        })
        .catch(error => {
            console.error('Erro na busca:', error);
        });
});
