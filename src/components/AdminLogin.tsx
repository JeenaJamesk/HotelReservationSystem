
"use client";
import React, { useState } from 'react';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement your authentication logic here
        if (password === process.env.ADMIN_PASS) {
            // Redirect to admin dashboard
            window.location.href = '/admin';
        } else {
            setError('Invalid password. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;