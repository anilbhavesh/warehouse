const initialState = {
    warehouses: [], // Your initial data from warehouse.json
    filter: {
      city: '',
      cluster: '',
      spaceAvailable: null,
    },
  };
  
  const warehouseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_WAREHOUSES':
        return {
          ...state,
          warehouses: action.payload,
        };
      case 'FILTER_WAREHOUSES':
        return {
          ...state,
          filter: action.payload,
        };
      // Add more cases for editing, adding custom fields, etc.
      default:
        return state;
    }
  };
  
  export default warehouseReducer;
  