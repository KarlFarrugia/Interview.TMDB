import {GENRES} from "../config";

export function genreRetriever (id) {
    return GENRES.find(genre => genre.id === id).name;
}

export function dateExtractor (date){
    try{
        return date.substring(0,4)
    }catch(e){
        return "";
    }
}