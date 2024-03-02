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
                console.log(res.data);
                setUserData(res.data);
                setLoading(false);
            }).catch(err => {
                errorFunction(err);
            });
        }, 3000);
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

    // Function to handle click on a row
    const handleRowClick = (user) => {
        setSelectedUser(user);
    };

    // Function to close the popup
    const closePopup = () => {
        setSelectedUser(null);
    };

    return (
        loading ? <Loader /> :
            <div className="relative overflow-x-auto md:mx-5 sm:mx-3 mx-1">
                <Search setSearch={setSearch} />
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
    );
}

export default UserTable;
