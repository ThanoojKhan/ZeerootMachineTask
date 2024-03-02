import React from 'react';

function Popup({ selectedUser, closePopup }) {
    return (
        <div className="popup-container z-50">
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-header">
                        <h2>{selectedUser.name}</h2>
                    </div>
                    <div className="popup-body">
                        <div className="user-details">
                            <div className="user-section">
                                <h3>User Details</h3>
                                <p>Username: {selectedUser.username}</p>
                                <p>Email: {selectedUser.email}</p>
                                <p>Phone: {selectedUser.phone}</p>
                                <p>Website: {selectedUser.website}</p>
                            </div>
                            <div className="address-section">
                                <h3>Address</h3>
                                <ul>
                                    <li>Street: {selectedUser.address.street}</li>
                                    <li>Suite: {selectedUser.address.suite}</li>
                                    <li>City: {selectedUser.address.city}</li>
                                    <li>Zipcode: {selectedUser.address.zipcode}</li>
                                    <li>Geo: Lat: {selectedUser.address.geo.lat}, Lng: {selectedUser.address.geo.lng}</li>
                                </ul>
                            </div>
                            <div className="company-section">
                                <h3>Company</h3>
                                <ul>
                                    <li>Name: {selectedUser.company.name}</li>
                                    <li>Catch Phrase: {selectedUser.company.catchPhrase}</li>
                                    <li>BS: {selectedUser.company.bs}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="popup-footer">
                    <button onClick={closePopup}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
