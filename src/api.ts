const PATH_DATA = "https://randomuser.me/api/?results=50&inc=id,name,email,registered,picture";

async function getUsers() {
    const response = await fetch(PATH_DATA);

    if (response.status !== 200) {
        return null;
    }

    const {results} = await response.json();
    return results;
}

export {getUsers};
