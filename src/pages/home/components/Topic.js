import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" alt="" src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
               
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['homeReducer', 'topicList'])
})

// const mapDispatchToProps = () => ({

// })
export default connect(mapStateToProps, null)(Topic);