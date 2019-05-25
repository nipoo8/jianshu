import styled from 'styled-components';


export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft= styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 10px;
    }
`;

export const TopicWrapper= styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem= styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-sizing: border-box;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
        margin-top: -1px;
    }
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:125px;
        height:100px;
        float: right;
        border-radius: 10px;
        cursor:pointer
    }
`;

export const ListInfo= styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    .img{
        display: block;
        width: 280px;
        height: 50px;
    }
`;
export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    color: #969696; 
`;
export const WriteInfoSwitch = styled.div`
    padding: 5px;
    float: right;
    font-size: 13px;
    cursor: pointer;
`;
export const WriteInfoList = styled.div`
    overflow: hidden;
`;

export const WriteInfoItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    box-sizing: border-box;
    img{
        width: 48px;
        height: 48px;
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
        border-radius: 50%;
    }
    .right{
        margin-right: 20px;
        float: right;
        h3{
            color: #333;
        }
        p{
            font-size: 12px;
            margin-top: 6px;
        }
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`;
