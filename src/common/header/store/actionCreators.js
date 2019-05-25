import axios from 'axios';
import { fromJS } from 'immutable';
import { INPUT_FOCUSED, INPUT_BLUR, MOUSE_ENTER, MOUSE_LEAVE, PAGE_CHANGE } from './actionTypes';


const changeList = (data) => ({
    type: 'CHANGE_LIST',
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})

export const inputFocused = () => ({
    type: INPUT_FOCUSED
})

export const inputBlur = () => ({
    type: INPUT_BLUR
})

export const mouseEnter = () => ({
    type: MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const handlePageChange = (page) => ({
    type: PAGE_CHANGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        // console.log('11')
        axios.get('/api/headerList.json')
             .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data)); 
             })
             .catch((error) => {
                 console.log(error)
             })
    }
}