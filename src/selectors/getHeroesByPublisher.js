import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (publisher)=>{

    const validaPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validaPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}