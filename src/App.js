import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import WarehouseList from './components/WarehouseList';
import WarehouseDetail from './components/WarehouseDetail';

function App() {
  const warehouses = [
    // Your warehouse data here
  ];
  
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h1>Warehouse Management</h1>
          <Routes>
          <Route  path="/" exact element={<WarehouseList />} />
          <Route path="/warehouse/:id" element={<WarehouseDetail warehouses={warehouses} />} />
            </Routes>
        </div>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
