'use client';
import React, { useState } from 'react';
import Image from "next/image";

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        setLoading(true);
        try {
            const res = await fetch('/api/admin-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = '/admin';
                }, 1200);
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Server error. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url('/images/bg3.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', color:'#fff' }}>
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md min-w-[300px]">
                <Image
                    src="/images/logo-white.png"
                    alt="AALAPPEAZ Logo"
                    width={100}
                    height={100}
                    priority
                    className='m-auto flex'
                />
                <h2 className="text-center font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-600 mb-4 text-center font-semibold">Login successful! Redirecting...</p>}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-[1px] block w-full border border-gray-300 rounded-md p-[5px]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-[1px] block w-full border border-gray-300 rounded-md p-[5px]"
                        required
                    />
                </div>
                <button type="submit" 
                    className="bg-blue-500 text-white p-2 rounded flex m-auto mt-[10px]"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;