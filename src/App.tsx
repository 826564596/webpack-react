import React from 'react';
import './App.less';
import taskIcon from './assets/img/bug.svg';
export const App = () => {
    let a = '';

    return (
        <div>
            <img src={taskIcon}></img>
            <h1 className="test">Hello11 React and Webpack</h1>
        </div>
    );
};
