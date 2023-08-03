const cohortName = '2302-acc-ct-web-pt-a';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const fetchAllPlayers = async() => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result;
    } catch (error) {
        console.error('Trouble fetching players', error);
    }
};

export default fetchAllPlayers