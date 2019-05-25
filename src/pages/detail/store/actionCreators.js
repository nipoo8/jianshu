import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDetailAction = (data) => ({
    type: actionTypes.DETAIL_LIST,
    title: data.title,
    content: data.content
})

export const getDetailList = (id) => {
    return (dispatch) => {
        axios.get('/api/detaiList.json?id=' + id)
            .then((res) => {
                const data = res.data.data;
                dispatch(getDetailAction(data));
                // console.log(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

