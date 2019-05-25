import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Globalstyle } from './style';
import { GlobalIconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header/';
import store from './store';
import { Provider } from 'react-redux';
import Login from './pages/login';
import Write from './pages/write';
import Home from './pages/home';
import Detail from './pages/detail/loadable';

function App() {
  return (
    <Provider store={store}>
      {/* 全局样式 */}
      <Globalstyle />
      <GlobalIconfontStyle />
      
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
