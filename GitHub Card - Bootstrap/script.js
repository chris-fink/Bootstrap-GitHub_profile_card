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
            const h5 = document.createElement('h5');
            const h4 = document.createElement('h4');
            const h3 = document.createElement('h3');
            const h2 = document.createElement('h2');
            const h1 = document.createElement('h1');
            const h6 = document.createElement('h6');

        //Append elements to the main elements
            main.appendChild(img);
            main.appendChild(h1);
            main.appendChild(h2);
            main.appendChild(h4);
            main.appendChild(h5); 
            main.appendChild(h6);
            main.appendChild(h3);

            //Display API data on elements
            img.src = `${data.avatar_url}`;
            h1.innerHTML = `${data.name}`;
            h2.innerHTML = `${data.location}`;
            //h3.innerHTML = ` Visit GitHub : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
            h3.innerHTML = `<a href="${data.html_url}" class="fa-brands fa-github fa-2xl" target="_blank"></a>`;
            h4.innerHTML = `${data.public_repos} Repositories`;
            h5.innerHTML =  `${data.following} Following`;
            h6.innerHTML = `${data.followers} Followers`;      
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
