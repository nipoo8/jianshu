import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true 
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('api/login.json?account=' + account + '&password=' + password)
            .then((res) => {
                const data = res.data.data;
                // console.log(data)
                if(data){
                    dispatch(changeLogin())
                }else{
                    alert("登录失败")
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false
})

