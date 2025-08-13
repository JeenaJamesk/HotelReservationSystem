"use client";
import { useState } from "react";

export default function BookingPage() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [guests, setGuests] = useState(1);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
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
		<div className="min-h-screen flex items-center justify-center bg-[#fff] px-2 py-8">
			<div className="flex flex-row md:flex-row bg-white rounded-lg shadow-2xl w-full max-w-3xl overflow-hidden border-2 border-[#00b6bd]">
				{/* Left: Image */}
				<div className="md:w-1/2 w-full flex items-center justify-center bg-[#00363a] p-6">
					<img src="/images/resturant.png" alt="Restaurant" className="rounded-lg w-full h-auto object-cover max-h-[400px]" />
				</div>
				{/* Right: Form */}
				<div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
					<div className="flex flex-col items-center mb-6">
						<hr className="w-full border-t border-black mb-2" style={{ height: '1px' }} />
						<h3 className="text-2xl font-extrabold text-center text-[#00b6bd] tracking-wide">Make a Booking</h3>
						<hr className="w-full border-t border-black mt-2" style={{ height: '1px' }} />
                        <h1 className="text-2xl font-extrabold text-center text-[#00b6bd] tracking-wide">Book a Table</h1>
					</div>
					<form className="space-y-6" onSubmit={handleSubmit}>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Name</label>
									<input
										type="text"
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd] placeholder-gray-400"
										value={name}
										onChange={e => setName(e.target.value)}
										placeholder="Your Name"
									/>
									{errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
								</div>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Phone Number</label>
									<input
										type="tel"
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd] placeholder-gray-400"
										value={phone}
										onChange={e => setPhone(e.target.value)}
										pattern="\d{10,15}"
										placeholder="Phone Number"
									/>
									{errors.phone && <div className="text-red-400 text-sm mt-1">{errors.phone}</div>}
								</div>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Email</label>
									<input
										type="email"
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd] placeholder-gray-400"
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder="Email Address"
									/>
									{errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
								</div>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Number of Guests</label>
									<select
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd]"
										value={guests}
										onChange={e => setGuests(Number(e.target.value))}
									>
										{[...Array(10)].map((_, i) => (
											<option key={i+1} value={i+1}>{i+1}</option>
										))}
									</select>
								</div>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Select Date</label>
									<input
										type="date"
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd] placeholder-gray-400"
										value={date}
										onChange={e => setDate(e.target.value)}
										min={new Date().toISOString().split("T")[0]}
									/>
									{errors.date && <div className="text-red-400 text-sm mt-1">{errors.date}</div>}
								</div>
								<div>
									<label className="block mb-2 font-semibold text-[#00b6bd]">Select Time</label>
									<select
										className="w-full border border-[#00b6bd] bg-white text-[#00363a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00b6bd]"
										value={time}
										onChange={e => setTime(e.target.value)}
									>
										<option value="">Select a time</option>
										{times.map(t => (
											<option key={t} value={t}>{t}</option>
										))}
									</select>
									{errors.time && <div className="text-red-400 text-sm mt-1">{errors.time}</div>}
								</div>
								<button
									type="submit"
									className="w-full bg-[#00b6bd] text-[#00363a] py-2 rounded font-extrabold hover:bg-[#005b66] hover:text-white transition border-2 border-[#00b6bd] shadow-md"
								>
									Book Now
								</button>
				</form>
			</div>
		</div>
	</div>
);
}
