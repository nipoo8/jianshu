import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import { 
    DetailWrapper,
    Header,
    Content
 } from './style';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        );
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetailList(id))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));