import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actionCreators from './store/actionCreators';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
// import store from '../../store';
 
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';


class Header extends Component{
    render(){
        // console.log(this.props.a.toJS())
        const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'>
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem onClick={logout} className="right logout">退出</NavItem> : 
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe602;</span>
                     </NavItem>
                    <SearchWrapper>
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                        >
                        </NavSearch>
                        <span className="iconfont">&#xe637;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='write'>
                        <Button className="writting">
                            <span className="iconfont">&#xe63f;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
    getListArea(){
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
        const newList = list.toJS();
        const pageList = [];
        
        if(newList.length){
            for(let i = (page-1) * 10 ; i < page * 10; i++ ){
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => handlePageChange(page, totalPage)}>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['headerReducer','focused']),
        list: state.getIn(['headerReducer','list']),
        page: state.getIn(['headerReducer', 'page']),
        totalPage: state.getIn(['headerReducer', 'totalPage']),
        mouseIn: state.getIn(['headerReducer', 'mouseIn']),
        login: state.getIn(['loginReducer', 'login'])
        // a: state.getIn(['homeReducer', 'topicList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.inputFocused());
        },
        handleInputBlur(){
            dispatch(actionCreators.inputBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handlePageChange(page, totalPage){
            if(page < totalPage){
                dispatch(actionCreators.handlePageChange(page + 1));
            }else{
                dispatch(actionCreators.handlePageChange(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);