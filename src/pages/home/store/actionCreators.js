import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const homeChangeData = (data) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList
})

const homeMoreList = (data, nextPage) =>({
    type: actionTypes.HOME_MORE_LIST,
    data: fromJS(data),
    nextPage
})

const getWriteList = (data) =>({
    type: actionTypes.WRITER_LIST,
    data
})

export const getDataList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
             .then((res) => {
                 const data = res.data.data;
                 dispatch(homeChangeData(data));
                // console.log("成功")
                
             })
             .catch((error) => {
                 console.log(error)
             })
    }
}

export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/homeMoreList.json?articlePage=' + articlePage)
             .then((res) => {
                 const data = res.data.data;
                 dispatch(homeMoreList(data, articlePage + 1))
             })
             .catch((error) => {
                 console.log(error)
             })
    }
}

export const toggleScrollTop = (show) => ({
    type: actionTypes.TOGGLE_SCROLLTOP,
    show
})

export const WriterList = () => {
    return (dispatch) => {
        axios.get('/api/writeList.json')
            .then((res) => {
                const data = res.data.data;
                dispatch(getWriteList(data))
                // console.log
            })
            .catch((error) => {
                console.log(error);
            })
    }
}