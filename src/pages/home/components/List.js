import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import { actionCreators } from '../store';
 
class List extends PureComponent {
    render() {
        const { articleList, getMoreList, articlePage } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => (
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img className="pic" alt="" src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick = {() => getMoreList(articlePage)}>更多文字</LoadMore>
            </div>
        );
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['homeReducer', 'articleList']),
    articlePage: state.getIn(['homeReducer', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(articlePage){
        dispatch(actionCreators.getMoreList(articlePage))
    }
})

export default connect(mapState, mapDispatch)(List);