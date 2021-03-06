const BASE_API = 'https://yts.lt/api/v2/';

class Api {

    async getSuggestions(id){
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await query.json();
        console.log(data);
        return data;

    }

}

export default new Api();