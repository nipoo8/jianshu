import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
 } from './style';

class Login extends PureComponent {
    render() {
        const { login } = this.props;
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}} />
                        <Input placeholder="密码" type='password' ref={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.loginFunc(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to='/' />
        }

    }
}

const mapState = (state) => ({
    login: state.getIn(['loginReducer', 'login'])
})

const mapDispatch = (dispatch) => ({
    loginFunc(accountEle, passwordEle){
        dispatch(actionCreators.login(accountEle.value, passwordEle.value));
    }
})

export default connect(mapState, mapDispatch)(Login);