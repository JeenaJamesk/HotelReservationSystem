"use client";
import { useState } from "react";

export default function BookingPage() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [guests, setGuests] = useState(1);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const times = [
		"12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
		"6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
	];

	function validate() {
		const errs: { [key: string]: string } = {};
		if (!name.trim()) errs.name = "Name is required.";
		if (!phone.match(/^\d{10,15}$/)) errs.phone = "Enter a valid phone number (10-15 digits).";
		if (!email.match(/^\S+@\S+\.\S+$/)) errs.email = "Enter a valid email address.";
		if (!date) errs.date = "Date is required.";
		if (!time) errs.time = "Time is required.";
		return errs;
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const errs = validate();
		setErrors(errs);
		if (Object.keys(errs).length === 0) {
			// Submit logic here
			alert("Booking submitted!");
		}
	}

	return (
		<div className="flex items-center bg-[#000] p-[2%] min-h-[98vh]">
			<div className="grid bg-white rounded-lg shadow-2xl border-[#00b6bd] grid-cols-[1fr_2fr]" style={{ backgroundColor: "#fff" }}>
				<div className="md:w-1/2 w-full flex items-center justify-center p-[2%] p-6 min-h-[90vh]">
					<img src="/images/resturant.png" alt="Restaurant" className="rounded-[5px] w-full h-[97%] object-cover" />
				</div>
				<div className="w-[95%] mx-auto p-8 flex flex-col justify-center">
					<div className="flex flex-col items-center mb-6 ">
						<hr className="w-full border-t border-black mb-2" style={{ height: '1px' }} />
						<h3 className="text-2xl font-extrabold text-center text-[#000] tracking-wide">Make a Booking</h3>
						<hr className="w-full border-t border-black mt-2" style={{ height: '1px' }} />
						<h1 className="text-2xl font-extrabold text-center text-[#000] tracking-wide">Book a Table</h1>
					</div>
					<form className="space-y-6 grid gap-[2%]" onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								className="w-full border-0 border-b-2 border-gray-300 bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400 p-[1%]"
								value={name}
								onChange={e => setName(e.target.value)}
								placeholder="Name"
							/>
							{errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
						</div>
						<div>
							<input
								type="tel"
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400"
								value={phone}
								onChange={e => setPhone(e.target.value)}
								pattern="\d{10,15}"
								placeholder="Phone Number"
							/>
							{errors.phone && <div className="text-red-400 text-sm mt-1">{errors.phone}</div>}
						</div>
						<div>
							<input
								type="email"
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400"
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="Email"
							/>
							{errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
						</div>
						<div>
							<select
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-[#00363a] focus:outline-none focus:border-blue-400"
								value={guests}
								onChange={e => setGuests(Number(e.target.value))}
							>
								<option value="" disabled>Number of Guests</option>
								{[...Array(10)].map((_, i) => (
									<option key={i + 1} value={i + 1}>{i + 1}</option>
								))}
							</select>
						</div>
						<div className="relative">
							<input
								type="date"
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-[#00363a] focus:outline-none focus:border-blue-400"
								value={date}
								onChange={e => setDate(e.target.value)}
								min={new Date().toISOString().split("T")[0]}
							/>
							{errors.date && <div className="text-red-400 text-sm mt-1">{errors.date}</div>}
						</div>
						<div>
							<select
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-[#00363a] focus:outline-none focus:border-blue-400"
								value={time}
								onChange={e => setTime(e.target.value)}
							>
								<option value="" disabled>Select Time</option>
								{times.map(t => (
									<option key={t} value={t}>{t}</option>
								))}
							</select>
							{errors.time && <div className="text-red-400 text-sm mt-1">{errors.time}</div>}
						</div>
						<div>
							<textarea
								name="message"
								id="contact-message"
								value={message}
								onChange={e => setMessage(e.target.value)}
								rows={4}
								className="w-full border-0 border-b-2 border-gray-300 p-[1%] bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
								placeholder="Message"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white font-bold p-[1%] rounded hover:bg-blue-600 transition size-max m-auto"
						>
							Book Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
