import React from 'react';
import { useLayoutEffect } from "react";
import Navigate from './Navigate';

import {
  BrowserRouter, Route, Routes, useLocation
} from "react-router-dom";
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}
function RouterApp(props) {
  
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          {
            Navigate.map((e, index) => (<Route key={index} path={e.path} element={e.component} />)
            )
          }
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default RouterApp;