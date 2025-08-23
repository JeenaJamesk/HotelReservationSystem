"use client";
import React, { useState, useEffect } from 'react';

interface Reservation {
    id: number;
    name: string;
    email: string;
    phone?: number | null;
    nofguest: number;
    comment?: string;
    date: string;
    time: string;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
}

const Dashboard = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [activeTab, setActiveTab] = useState('pending');
    const [loading, setLoading] = useState(true);

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

    const updateReservationStatus = async (id: number, status: 'approved' | 'rejected') => {
        try {
            const response = await fetch('/api/reservations', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status }),
            });

            if (response.ok) {
                setReservations(prev => 
                    prev.map(reservation => 
                        reservation.id === id 
                            ? { ...reservation, status } 
                            : reservation
                    )
                );
            }
        } catch (error) {
            console.error('Error updating reservation:', error);
        }
    };

    const filterReservations = (reservations: Reservation[], filter: string) => {
        const today = new Date().toISOString().split('T')[0];
        
        switch (filter) {
            case 'pending':
                return reservations.filter(r => r.status === 'pending');
            case 'approved':
                return reservations.filter(r => r.status === 'approved');
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
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const tabs = [
        { id: 'pending', label: 'Pending', count: filterReservations(reservations, 'pending').length },
        { id: 'approved', label: 'Approved', count: filterReservations(reservations, 'approved').length },
        { id: 'today', label: 'Today', count: filterReservations(reservations, 'today').length },
        { id: 'past', label: 'Past', count: filterReservations(reservations, 'past').length },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col space-y-4 py-6 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-500">
                                Manage hotel reservations
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-100 rounded-lg px-3 py-2 w-full sm:w-auto text-center">
                                <span className="text-sm font-medium text-blue-800">
                                    Total: {reservations.length} reservations
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-2 sm:space-x-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`whitespace-nowrap py-3 px-3 sm:px-1 border-b-2 font-medium text-sm min-h-[44px] flex items-center justify-center ${
                                    activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <span className="flex items-center">
                                    {tab.label}
                                    <span className={`ml-2 py-1 px-2 rounded-full text-xs ${
                                        activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-900'
                                    }`}>
                                        {tab.count}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content */}
                <div className="mt-4 sm:mt-6">
                    {filteredReservations.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-lg">No reservations found for {activeTab}</div>
                        </div>
                    ) : (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredReservations.map((reservation) => (
                                <div key={reservation.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                    <div className="p-4 sm:p-6">
                                        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 break-words">
                                                {reservation.name}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium self-start sm:self-auto ${getStatusColor(reservation.status)}`}>
                                                {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-3 text-sm text-gray-600">
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                <span className="font-medium text-gray-900 mb-1 sm:mb-0 sm:w-20">Email:</span>
                                                <span className="break-all text-gray-600">{reservation.email}</span>
                                            </div>
                                            {reservation.phone && (
                                                <div className="flex flex-col sm:flex-row sm:items-center">
                                                    <span className="font-medium text-gray-900 mb-1 sm:mb-0 sm:w-20">Phone:</span>
                                                    <span className="text-gray-600">{reservation.phone}</span>
                                                </div>
                                            )}
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                <span className="font-medium text-gray-900 mb-1 sm:mb-0 sm:w-20">Date:</span>
                                                <span className="text-gray-600">{formatDate(reservation.date)}</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                <span className="font-medium text-gray-900 mb-1 sm:mb-0 sm:w-20">Time:</span>
                                                <span className="text-gray-600">{reservation.time}</span>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center">
                                                <span className="font-medium text-gray-900 mb-1 sm:mb-0 sm:w-20">Guests:</span>
                                                <span className="text-gray-600">{reservation.nofguest}</span>
                                            </div>
                                            {reservation.comment && (
                                                <div className="mt-3">
                                                    <span className="font-medium text-gray-900 block mb-2">Comment:</span>
                                                    <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-md">
                                                        {reservation.comment}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {reservation.status === 'pending' && (
                                            <div className="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                                                <button
                                                    onClick={() => updateReservationStatus(reservation.id, 'approved')}
                                                    className="w-full sm:flex-1 bg-green-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-green-700 transition-colors min-h-[44px]"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => updateReservationStatus(reservation.id, 'rejected')}
                                                    className="w-full sm:flex-1 bg-red-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-red-700 transition-colors min-h-[44px]"
                                                >
                                                    Reject
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
    );
};

export default Dashboard;