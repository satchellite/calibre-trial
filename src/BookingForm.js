import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function BookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bookDate: '',
        bookTime: '',
        servTypeId: '',
        servTypeName: '',
        addOn: '',
        addOnId: '',
        email: '',
    });

    const [bookingDate, setDate] = useState(new Date());
    const [serviceItems, setServiceOptions] = useState([]);
    const [addOnItems, setAddOnOptions] = useState([]);
    const [service, setService] = useState('');
    const [addOns, setAddOns] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        let hours = '';
        let minutes = '';
        let timeString = ''; 

        hours = bookingDate.getHours().toString().padStart(2, '0'); 
        minutes = bookingDate.getMinutes().toString().padStart(2, '0');
        timeString = `${hours}:${minutes}`;

        setFormData({
            ...formData,
            bookDate: bookingDate.toLocaleDateString('en-GB', options),
            bookTime: timeString,
        });

        console.log(formData);

        setSubmitted(true);
    };

    const handleServiceChange = (event) => {
        const selectedValue = event.target.value; 

        setService(selectedValue);
        
        const selectedService = serviceItems.find(s => s.id == selectedValue);

        setFormData({
            ...formData,
            servTypeId: selectedValue,
            servTypeName: selectedService.name
        });

        if(selectedService.extras) {
            setAddOnOptions(selectedService.extras);
        } else {
            setAddOnOptions([]);
        }
        setAddOns('');
    };

    const handleAddOnChange = (event) => {
        const selectedValue = event.target.value;
        setAddOns(selectedValue);

        var index = event.nativeEvent.target.selectedIndex;

        setFormData({
            ...formData,
            addOnId: selectedValue,
            addOn: event.nativeEvent.target[index].text
        });
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
        setServiceOptions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchItems();
  }, []); 

  return (
    <section className="form-section">
        <div className="form-container">
        {!submitted ? (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: <span className='red'>*</span></label>
                    <input type="text" id="firstName" name="firstName" required
                        value={formData.firstName} 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: <span className='red'>*</span></label>
                    <input type="text" id="lastName" name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='booking-date'>
                    <label htmlFor="bookingDate">Booking Date & Time:</label>
                    <DateTimePicker id="bookingDate" name="bookingDate" value={bookingDate} onChange={setDate}
                        disableClock="true" />
                </div>
                <div>
                    <label htmlFor='services'>Service Type:</label>
                    <select name='services' id='services' value={service} onChange={handleServiceChange}>
                        <option value=''>Choose an option</option>
                        {serviceItems.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='addOns'>Add Ons:</label>
                    <select name='addOns' id='addOns' value={addOns} onChange={handleAddOnChange}>
                        <option value=''></option>
                        {addOnItems.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="email">Email: <span className='red'>*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="disclaimer">
                    <p>Don't need your whole house cleaned? Just looking to get common areas cleaned? Give us a call on <a href="tel:+611300991368"><strong>1300 991 368</strong></a> and we'll give you a custom quote.
                    </p>
                </div>
                <button type="submit" className='background-secondary'>Submit</button>
            </form>
        ): (
            <div>
                <h2>Thank you for submitting the following information:</h2>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <p>Service Type: {formData.servTypeName}</p>
                <p>Add On: {formData.addOn  }</p>
                <p>Booking Date: {formData.bookDate}</p>
                <p>Booking Time: {formData.bookTime}</p>
            </div>
        )}
        </div>
    </section>
  );
}

export default BookingForm;
