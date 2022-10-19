

//variables for API
const url = 'https://api.github.com/users/chris-fink';
const main = document.querySelector('#card');
const search = document.querySelector('#search');
const form = document.querySelector('form');

//Fetch API data
function searchProfile(url){
    fetch(url)
    .then(res => res.json())
    .then(function(data){

        //Create elements for HTML response
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

        //Append elements to the main elements
            main.appendChild(img);
            main.appendChild(h3);
            main.appendChild(h2);
            main.appendChild(p);
            img.src = `${data.avatar_url}`;

            //Display API data on elements
            h3.innerHTML = ` Visit GitHub : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
            h2.innerHTML = `${data.name}`;
            p.innerHTML = `${data.public_repos} Repositories`;
    });
}


//Creating search form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('card').innerHTML = '';
    //Cannot set properties of null (setting 'innerHTML')

    const searchTerm = search.value;
    if (searchTerm) {
        searchProfile('https://api.github.com/users/' + searchTerm);
        search.value = '';
    }
});

    //preload a search for Denver weather so client doesn't see dummy data  
    searchProfile.fetch(searchProfile(url));