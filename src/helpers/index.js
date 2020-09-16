import {GENRES} from "../config";

export function genreRetriever (id) {
    try{
        return GENRES.find(genre => genre.id === id).name;
    }catch(e){
        return "";
    }
}

export function dateExtractor (date){
    try{
        return date.substring(0,4)
    }catch(e){
        return "";
    }
}

export function urlCleaner (url){
    try{
        if(url){
            if(url.slice(url.length - 1) === '/')       
                url = url.slice(0, -1);
            return url.replace(/(^\w+:|^)\/\//, '');
        }
        return "";
    }catch(e){
        return "";
    }
}

export function numberLocalisation (number){
    try{
        if(number > 0){
            return `€${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        } else{
            return "Data Not Available";
        }
    }catch(e){
        return number;
    }
}