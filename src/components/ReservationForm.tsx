import React, { useState } from 'react';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            name,
            email,
            date,
            time,
            guests,
            specialRequests,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <h2>Make a Reservation</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    min="1"
                    required
                />
            </div>
            <div>
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                />
            </div>
            <button type="submit">Reserve</button>
        </form>
    );
};

export default ReservationForm;