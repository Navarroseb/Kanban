async function checkUserGithub(githubuser) {
    try {

        const resp = await fetch(`https://api.github.com/users/${githubuser}`);
        const data = await resp.json()
        if (data.message) {
            console.log("the username not found!");
        } else {
            console.log("Username is corrected!");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
})
let username = document.querySelector('#username');
username.addEventListener('blur', (event) => {
    const { value } = event.target;
    checkUserGithub(value);
})