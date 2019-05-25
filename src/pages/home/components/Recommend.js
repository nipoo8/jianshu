import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends PureComponent {
    render() {
        const { recommendList } = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendList.map((item) => (
                        <RecommendItem key={item.get('id')}>
                            <img className="img" alt="" src={item.get('imgUrl')} />
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        );
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['homeReducer', 'recommendList'])
})

export default connect(mapState, null)(Recommend);