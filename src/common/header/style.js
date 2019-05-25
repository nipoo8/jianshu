import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;   
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    positon: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;  
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: -56px auto;
    padding-right: 70px;
    box-sizing: border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color:#ea6f5a;
    }
    &.logout{
        cursor: pointer;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont{
        position: absolute;
        right: 8px;
        bottom: 10px;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 200px;
    }
`;

export const SearchInfo = styled.div`
    z-index: 1;
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696; 
`; 

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`; 

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`; 

export const SearchInfoList = styled.div`
    overflow: hidden;
`; 


export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;

