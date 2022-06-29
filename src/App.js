import React from 'react';
import {
  Home, Carzin, ErrorCode404, A__home,
  SingleProduct, Categorys, Oformit, Rasrochka, Yoshop_rasrochka,
  P_Dostavka, P_Auto, P_Eda, P_Ocherad, P_Prodazha, P_Taxi
} from './pages';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import { Shop_template, Admin_template, Users, Search } from './components';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



function App() {

  return (<>
    <div className="box-load-ajax">
      <span className="ajax-load"> </span>
    </div>
    <div className="message-form-ajax"></div>
    <div className="App-content">
      <Routes>
        {/* Шаблон для ползователь */}
        <Route path="/" element={<Shop_template />}>
          <Route index element={<Home />} />
          {/* Услуга */}
          <Route path="dostavka" element={<P_Dostavka />} />
          <Route path="auto" element={<P_Auto />} />
          <Route path="eda" element={<P_Eda />} />
          <Route path="ocherad" element={<P_Ocherad />} />
          <Route path="taxi" element={<P_Taxi />} />
          <Route path="prodazha" element={<P_Prodazha />} />

          <Route path="yoshop_rasrochka/:id" element={<Yoshop_rasrochka />} />
          <Route path="rasrochka/:type/:id" element={<Rasrochka />} />
          <Route path="oformit/:id" element={<Oformit />} />
          <Route path="category/:id" element={<Categorys />} />
          <Route path="single_product/:id" element={<SingleProduct />} />
          <Route path="carzin" element={<Carzin />} />
          <Route path="users" element={<Users />} />
          <Route path="search" element={<Search />} />

        </Route>
        {/* Шаблон для Администратор */}
        <Route path="admin" element={<Admin_template />}>
          <Route index element={<A__home />} />
        </Route>
        <Route path="*" element={<ErrorCode404 />} />
      </Routes>
    </div>
  </>
  );
}
export default App;