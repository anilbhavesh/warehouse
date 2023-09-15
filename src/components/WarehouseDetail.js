import React, { useState } from 'react';
import { useParams, useNavigate, useLocation} from 'react-router-dom';
const WarehouseDetail = ({ warehouses }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const selectedWarehouse = warehouses.find(warehouse => warehouse.id === id);
    const [editedDetails, setEditedDetails] = useState({ ...selectedWarehouse });
    const [customFields, setCustomFields] = useState([]);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedDetails({
        ...editedDetails,
        [name]: value,
      });
    };
    const handleAddCustomField = () => {
      const newCustomField = {
        name: '',
        value: '',
      };
      setCustomFields([...customFields, newCustomField]);
    };
    const handleRemoveCustomField = (index) => {
      const updatedCustomFields = [...customFields];
      updatedCustomFields.splice(index, 1);
      setCustomFields(updatedCustomFields);
    };
    const handleCustomFieldChange = (e, index, fieldKey) => {
      const updatedCustomFields = [...customFields];
      updatedCustomFields[index][fieldKey] = e.target.value;
      setCustomFields(updatedCustomFields);
    };
    const handleSaveDetails = async () => {
        let response;
        try {
          await fetch(`/api/warehouses/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedDetails),
          });
          if (!response) {
            throw new Error('No response received from the server.');
          }
      
          if (!response.ok) {
            throw new Error(`Error updating warehouse details: ${response.status}`);
          }
      
          navigate('/warehouse-detail');
        } catch (error) {
          console.error('Error updating warehouse details:', error);
        }
      };

      
    return (
      <div>
        <h2>Warehouse Details</h2>
        <form>
          <label>
            Warehouse Name:
            <input
              type="text"
              name="name"
              value={editedDetails.name}
              onChange={handleInputChange}
            />
          </label>
          {customFields.map((field, index) => (
            <div key={index}>
              <label>
                Custom Field Name:
                <input
                  type="text"
                  name={`customFieldName_${index}`}
                  value={field.name}
                  onChange={(e) => handleCustomFieldChange(e, index, 'name')}
                />
              </label>
              <label>
                Custom Field Value:
                <input
                  type="text"
                  name={`customFieldValue_${index}`}
                  value={field.value}
                  onChange={(e) => handleCustomFieldChange(e, index, 'value')}
                />
              </label>
              <button onClick={() => handleRemoveCustomField(index)}>Remove Field</button>
            </div>
          ))}
          <button type="button" onClick={handleAddCustomField}>Add Custom Field</button>
          <button type="button" onClick={handleSaveDetails}>Save Details</button>
        </form>
      </div>
    );
  };
  
  export default WarehouseDetail;
  