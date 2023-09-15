export const fetchWarehouses = (warehouses) => ({
    type: 'FETCH_WAREHOUSES',
    payload: warehouses,
  });
  
  export const filterWarehouses = (filter) => ({
    type: 'FILTER_WAREHOUSES',
    payload: filter,
  });
  
  // Add more actions for editing, adding custom fields, etc.
  