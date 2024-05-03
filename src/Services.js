import React, { useState, useEffect } from 'react';

function ServiceType() {
    const [serviceItems, setItems] = useState([]);
    const [service, setService] = useState('');
    const [addOns, setAddOns] = useState('');

    const handleServiceChange = (event) => {
        const selectedValue = event.target.value;
        setService(selectedValue);

        // if (selectedValue === 'A') {
        //     setOptions(['A1', 'A2', 'A3']);
        // } else if (selectedValue === 'B') {
        //     setOptions(['B1', 'B2', 'B3']);
        // } else {
        //     setOptions([]);
        // }

        // setSecondSelectValue('');
    };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://calibrecleaning-sandbox.launch27.com/latest/booking/services', {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network Error Response');
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []); 

    return (
        <div>
            <label htmlFor='services'>Service Type:</label>
            <select name='services' id='services' value={service} onChange={handleServiceChange}>
                <option value=''>Choose an option</option>
                {serviceItems.map(item => (
                    <option value={item.id} key={item.id}>{item.id}{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default ServiceType;