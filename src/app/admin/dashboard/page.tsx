"use client";
import React, { useState, useEffect } from 'react';
import { FiLogOut } from "react-icons/fi";

interface Reservation {
    id: number;
    name: string;
    email: string;
    phone?: number | null;
    nofguest: number;
    comment?: string;
    date: string;
    time: string;
    status: 'pending' | 'approved' | 'rejected' | 'cancelled';
    created_at: string;
}

const Dashboard = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [activeTab, setActiveTab] = useState('pending');
    const [loading, setLoading] = useState(true);
    const [statusUpdating, setStatusUpdating] = useState(false);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await fetch('/api/reservations');
            const data = await response.json();
            // Convert date strings to Date objects for easier filtering
            const processedData = data.map((reservation: any) => ({
                ...reservation,
                date: reservation.date,
                created_at: reservation.created_at
            }));
            setReservations(processedData);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateReservationStatus = async (id: number, status: 'approved' | 'rejected' | 'cancelled') => {
        setStatusUpdating(true);
        try {
            const response = await fetch('/api/reservations/update-status', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status }),
            });

            if (response.ok) {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error updating reservation:', error);
        } finally {
            setStatusUpdating(false);
        }
    };

    const filterReservations = (reservations: Reservation[], filter: string) => {
        const today = new Date().toISOString().split('T')[0];
        switch (filter) {
            case 'pending':
                return reservations.filter(r => r.status === 'pending');
            case 'approved':
                return reservations.filter(r => r.status === 'approved');
            case 'closed':
                return reservations.filter(r => r.status === 'cancelled' || r.status === 'rejected');
            case 'today':
                return reservations.filter(r => {
                    const reservationDate = new Date(r.date).toISOString().split('T')[0];
                    return reservationDate === today;
                });
            case 'past':
                return reservations.filter(r => {
                    const reservationDate = new Date(r.date).toISOString().split('T')[0];
                    return reservationDate < today;
                });
            default:
                return reservations;
        }
    };

    const filteredReservations = filterReservations(reservations, activeTab);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'approved':
                return 'bg-green-100 text-green-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            case 'cancelled':
                return 'bg-gray-400 text-gray-900';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const tabs = [
        { id: 'pending', label: 'Pending', count: filterReservations(reservations, 'pending').length },
        { id: 'approved', label: 'Approved', count: filterReservations(reservations, 'approved').length },
        { id: 'closed', label: 'Closed', count: filterReservations(reservations, 'closed').length },
        { id: 'today', label: 'Today', count: filterReservations(reservations, 'today').length },
        { id: 'past', label: 'Past', count: filterReservations(reservations, 'past').length },
    ];

    if (loading || statusUpdating) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mb-4"></div>
                    <span className="text-blue-700 text-lg font-semibold">{statusUpdating ? 'Updating status...' : 'Loading...'}</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 pt-20"
                style={{ backgroundImage: `url('/images/bg4.JPG')` }}>
                <div className='flex justify-between items-center mx-[3%] my-[1%]'>
                    <h1>Admin dashboard</h1>
                    <button
                        onClick={() => window.location.href = '/admin'}
                        className='bg-transparent'
                    >
                        <FiLogOut className="text-lg" />
                    </button>
                </div>
                <div className="bg-white/80 shadow-lg backdrop-blur-md m-[3%]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-8">
                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-200 rounded-xl px-5 py-3 shadow">
                                    <span className="text-lg font-semibold text-blue-900">
                                        Total: {reservations.length} reservations
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8" style={{color: '#fff'}}>
                    <div className="border-b-2 border-blue-300 m-[3%]">
                        <nav className="-mb-px flex gap-3 sm:gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 justify-start sm:justify-center px-1"
                            style={{ WebkitOverflowScrolling: 'touch' }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`whitespace-nowrap py-3 px-5 sm:py-4 sm:px-8 border-b-4 font-bold text-base sm:text-lg rounded-t-lg transition-all duration-200 shadow-sm ${activeTab === tab.id
                                            ? 'border-blue-600 text-blue-900 bg-white/90'
                                            : 'border-transparent text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-white/70'
                                        }`}
                                    style={{ minWidth: '110px' }}
                                >
                                    {tab.label}: {tab.count}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="mt-10 m-[3%]">
                        {filteredReservations.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-lg">No reservations found for {activeTab}</div>
                            </div>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {filteredReservations.map((reservation) => (
                                    <div key={reservation.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {reservation.name}
                                                </h3>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                                                    {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                                                </span>
                                            </div>

                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <span className="font-medium w-20">Email:</span>
                                                    <span className="truncate">{reservation.email}</span>
                                                </div>
                                                {reservation.phone && (
                                                    <div className="flex items-center">
                                                        <span className="font-medium w-20">Phone:</span>
                                                        <span>{reservation.phone}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center">
                                                    <span className="font-medium w-20">Date:</span>
                                                    <span>{formatDate(reservation.date)}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="font-medium w-20">Time:</span>
                                                    <span>{reservation.time}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="font-medium w-20">Guests:</span>
                                                    <span>{reservation.nofguest}</span>
                                                </div>
                                                {reservation.comment && (
                                                    <div className="mt-3">
                                                        <span className="font-medium">Comment:</span>
                                                        <p className="mt-1 text-gray-700 text-sm bg-gray-50 p-2 rounded">
                                                            {reservation.comment}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {reservation.status === 'pending' && (
                                                <div className="mt-4 flex gap-2 sm:flex-row sm:space-x-2">
                                                    <button
                                                        onClick={() => updateReservationStatus(reservation.id, 'approved')}
                                                        className="flex-1 bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => updateReservationStatus(reservation.id, 'rejected')}
                                                        className="flex-1 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                                                    >
                                                        Reject
                                                    </button>
                                                    <button
                                                        onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                                                        className="flex-1 bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;