import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScrollTop: false,
    writeList: []
});



export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case actionTypes.HOME_MORE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                articlePage: action.nextPage
            })
        case actionTypes.TOGGLE_SCROLLTOP:
            return state.set('showScrollTop', action.show)
        case actionTypes.WRITER_LIST:
            return state.set('writeList', action.data)
        default: 
            return state;
    }
}