import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const WarehouseList = () => {
    const navigate=useNavigate()
  const [warehouses, setWarehouses] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    city: '',
    cluster: '',
    spaceAvailable: '',
  });

  useEffect(() => {
    const initialData = [
        {
            name : "Warehouse-165",
            code : "W-00001",
            id : 1,
            city: "Delhi",
            space_available: 1234,
            type : "Leasable Space",
            cluster : "cluster-a-32",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-276",
            code : "W-00002",
            id : 2,
            city: "Chennai",
            space_available: 124,
            type : "Warehouse Service",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-3039",
            code : "W-00003",
            id : 3,
            city: "Indore",
            space_available: 134,
            type : "Warehouse Service",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-324",
            code : "W-00004",
            id : 4,
            city: "Chennai",
            space_available: 12,
            type : "Leasable Space",
            cluster : "cluster-a-21",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-5454",
            code : "W-00005",
            id : 5,
            city: "Chennai",
            space_available: 1243434,
            type : "Warehouse Service",
            cluster : "cluster-a-21",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-4345",
            code : "W-00006",
            id : 6,
            city: "Chennai",
            space_available: 1,
            type : "Leasable Space",
            cluster : "cluster-a-21",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-3455",
            code : "W-00007",
            id : 7,
            city: "Mumbai",
            space_available: 4,
            type : "Leasable Space",
            cluster : "cluster-a-2",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-23455",
            code : "W-00008",
            id : 8,
            city: "Bangalore",
            space_available: 3456,
            type : "Warehouse Service",
            cluster : "cluster-a-21",
            is_registered : true,
            is_live : true
          },
          {
            name : "Warehouse-6457",
            code : "W-00009",
            id : 9,
            city: "Bangalore",
            space_available: 1234545,
            type : "Warehouse Service",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-32456",
            code : "W-000010",
            id : 10,
            city: "Guwahati",
            space_available: 121234,
            type : "Warehouse Service",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : true
          },
          {
            name : "Warehouse-3245678",
            code : "W-000011",
            id : 11,
            city: "Delhi",
            space_available: 98,
            type : "Leasable Space",
            cluster : "cluster-v-2",
            is_registered : true,
            is_live : false
          },
          {
            name : "Warehouse-4567",
            code : "W-000012",
            id : 12,
            city: "Indore",
            space_available: 97,
            type : "Warehouse Service",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : true
          },
          {
            name : "Warehouse-458",
            code : "W-000013",
            id : 13,
            city: "Delhi",
            space_available: 654,
            type : "Leasable Space",
            cluster : "cluster-a-1",
            is_registered : true,
            is_live : false
          }
    ];

    setWarehouses(initialData);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleAddWarehouse = () => {
    const newWarehouse = {
      id: Date.now().toString(), 
      name: filter.name,
      city: filter.city,
      cluster: filter.cluster,
      space_available: parseFloat(filter.spaceAvailable) || 0,
    };
    setWarehouses([...warehouses, newWarehouse]);
    setFilter({
      name: '',
      city: '',
      cluster: '',
      spaceAvailable: '',
    });
  };

  const filteredWarehouses = useMemo(() => {
    return warehouses.filter((warehouse) => {
      return (
        warehouse.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        warehouse.city.toLowerCase().includes(filter.city.toLowerCase()) &&
        warehouse.cluster.toLowerCase().includes(filter.cluster.toLowerCase()) &&
        (filter.spaceAvailable === '' || warehouse.space_available >= parseFloat(filter.spaceAvailable))
      );
    });
  }, [warehouses, filter]);

  return (
    <div>
      <h2>Warehouse List</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={filter.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="code"
          placeholder="Code"
          value={filter.code}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="id"
          placeholder="Id"
          value={filter.id}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filter.city}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="spaceAvailable"
          placeholder="Space Available"
          value={filter.spaceAvailable}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={filter.type}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="cluster"
          placeholder="Cluster"
          value={filter.cluster}
          onChange={handleFilterChange}
        />
        
        
        <input
          type="text"
          name="is_registered"
          placeholder="Is_registered"
          value={filter.is_registered}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="is_live"
          placeholder="Is_live"
          value={filter.is_live}
          onChange={handleFilterChange}
        />
        <button onClick={handleAddWarehouse}>Add Warehouse</button>
      </div>
      <ul>
        {filteredWarehouses.map((warehouse) => (
          <li key={warehouse.id}>
            {warehouse.name} - {warehouse.city} - Space Available: {warehouse.space_available}
            <button onClick={()=>{
                navigate("/warehouse/"+warehouse.id,{state:{data:warehouse}})
            }}>detail</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseList;
