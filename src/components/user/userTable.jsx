import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import errorFunction from '../../helpers/errorHandling';
import Search from '../search';
import Loader from '../loader';
import Popup from './popUp';

function UserTable() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axiosInstance.get('/users').then(res => {
                setUserData(res.data);
                setLoading(false);
            }).catch(err => {
                errorFunction(err);
            });
        }, 2000);
    }, []);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredData = userData.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase()) ||
            user.website.toLowerCase().includes(search.toLowerCase());
    });

    const indexOfLastData = currentPage * 5;
    const indexOfFirstData = indexOfLastData - 5;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    const closePopup = () => {
        setSelectedUser(null);
    };

    return (
        loading ? <Loader /> :
            <div className="flex flex-col justify-between my-5 md:p-10">
                <div className="h-full mt-5">
                    <div className="flex justify-center items-center">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-16 md:m-10 w-full bg-slate-950">
                            <div className="p-5 text-2xl font-semibold text-left rtl:text-right text-gray-900 dark:text-white flex flex-col  lg:flex-row lg:items-center relative">
                                <div className="lg:flex-grow align-middle text-white">
                                    <p>User Data</p>
                                    <p className="mt-1 text-sm font-normal">Browse a list of user data featuring basic details to help you quickly access information. Click on a User to view more details.</p>
                                </div>
                                <div className="mt-5">
                                    <Search setSearch={setSearch} />
                                </div>
                            </div>
                            {filteredData.length === 0 ? (
                                <div className="text-center p-4 text-gray-900">No data found</div>
                            ) : (
                                <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="uppercase bg-gray-50 dark:bg-gray-700 text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Username
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Phone
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Website
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map(user => {
                                            return (
                                                <tr key={user.id} onClick={() => handleRowClick(user)} className="bg-white border-b dark:bg-gray-800 cursor-pointer dark:border-gray-700">
                                                    <td className="px-6 py-4">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.username}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.phone}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.website}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                            <div className="flex justify-center my-4">
                                {Array.from({ length: Math.ceil(filteredData.length / 5) }, (_, index) => (
                                    <button key={index} className="mx-1 px-3 py-1 bg-gray-200 rounded" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                            {/* Popup */}
                            {selectedUser && (
                                <Popup selectedUser={selectedUser} closePopup={closePopup} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default UserTable;
