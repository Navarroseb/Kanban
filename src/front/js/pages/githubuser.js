async function checkUserGithub(githubuser) {
    try {

        const resp = await fetch(`https://api.github.com/users/${githubuser}`);
        const data = await resp.json()
        if (data.message) {
            console.log("the username not found!");
            return false
        } else {
            console.log("Username is corrected!");
            return true
        }

    } catch (error) {
        console.log("Error:", error);
        return false

    }

}



export default checkUserGithub;