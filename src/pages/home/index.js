import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt='' src="//upload.jianshu.io/admin_banners/web_images/4661/7b1d09e40e2e478ae995e5e474ba703ec460c93a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScrollTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        );
    }
    componentDidMount(dispatch){
        this.props.getList()
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow, false)
    }
}

const mapState = (state) => ({
    showScrollTop: state.getIn(['homeReducer', 'showScrollTop']),
})

const mapDispatch = (dispatch) => ({
    getList(){
        dispatch(actionCreators.getDataList())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleScrollTop(true))
        }else{
            dispatch(actionCreators.toggleScrollTop(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);