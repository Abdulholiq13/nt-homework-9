const API_URL = 'https://jsonplaceholder.typicode.com/';
const wrapper = document.querySelector('.wrapper');

async function fetchUsers(api) {
  let response = await fetch(`${api}/users`);

  response
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log('success');
    });
}

fetchUsers(API_URL);

function createCard(data) {
  data.forEach((user) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
            <div></div>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>`;
    wrapper.appendChild(card);
  });
}
