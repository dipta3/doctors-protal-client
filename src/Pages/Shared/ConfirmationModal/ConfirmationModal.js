import React from 'react';

const ConfirmationModal = ({ title, msg, closeModal, modalData, successAction, successBtnName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{msg}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)
                        } htmlFor="confirmation-modal" className="btn btn-primary">{successBtnName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;