import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriteInfoSwitch,
    WriteInfoList,
    WriteInfoItem
} from '../style';
import { actionCreators } from '../store';
class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                推荐作者
                <WriteInfoSwitch>换一换</WriteInfoSwitch>
                <WriteInfoList>
                   {
                       this.props.writeList.map((item, index) => (
                            <WriteInfoItem>
                                <img alt="" src={item.imgUrl} />
                                <div className="right">
                                    <h3>{item.writerName}</h3>
                                    <p>{item.writerDetail}</p>
                                </div>
                            </WriteInfoItem>
                       ))
                   }
                </WriteInfoList>
            </WriterWrapper>
        );
    }
    componentDidMount(){
        this.props.changeWriterList();
    }
}


const mapState = (state) => ({
    writeList: state.getIn(['homeReducer', 'writeList'])
})

const mapDispatch = (dispatch) => ({
    changeWriterList(){
        dispatch(actionCreators.WriterList());
    }
})
export default connect(mapState, mapDispatch)(Writer);