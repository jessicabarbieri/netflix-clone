const API_KEY = '9219d5b4f63b1b7b2b0cea386132eaa5';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug:'originals',
                title:'Originais Netflix',
                items: []
            },
            {
                slug:'trending',
                title:'Recomendados para Você',
                items: []
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: []
            },
            {
                slug:'action',
                title:'Ação',
                items: []
            },
            {
                slug:'comedy',
                title:'Comédia',
                items: []
            },
            {
                slug:'horror',
                title:'Terror',
                items: []
            },
            {
                slug:'romance',
                title:'Romance',
                items: []
            },
            {
                slug:'documentary',
                title:'Documentário',
                items: []
            }
        ];
    }
}