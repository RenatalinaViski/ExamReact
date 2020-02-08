import {FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_ERROR} from './actionTypes'

function getArticles(){
  return   fetch('/main')
    .then(data => data.json())
    .then(arr => arr)
}

export function fetchArticleStart(){
    return{
        type: FETCH_ARTICLE_START
    }
}

export function fetchArticleSuccess(articles){
    return{
        type: FETCH_ARTICLE_SUCCESS,
        articles: articles
    }
}

export function fetchArticleError(e){
    return {
        type: FETCH_ARTICLE_ERROR,
        error: e        
    }
}

export function fetchArticle(){
    return async dispatch=>{
        dispatch(fetchArticleStart())
        try{
            const responce= await getArticles()
            dispatch(fetchArticleSuccess(responce))

        }catch (e){
            dispatch(fetchArticleError(e))
        }
    }
}