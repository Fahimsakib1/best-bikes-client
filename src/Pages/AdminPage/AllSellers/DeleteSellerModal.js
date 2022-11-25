import React from 'react';

const DeleteSellerModal = ({handleDeleteSeller, closeModal, deleteSeller}) => {
    
    const {name, email, _id} = deleteSeller
    
    return (
        <div>
            <input type="checkbox" id="delete-seller-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-seller-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-4 text-center"> Want To Delete {name} From Seller List?</h3>
                    <p className=" text-red-700 mb-4 text-center">*** Seller information will be lost after delete *** </p>
                    <div className='flex justify-between'>
                        <button onClick={closeModal} className='btn  bg-blue-700 text-white btn-sm border-0'> Cancel</button>
                        <label
                            onClick={() => handleDeleteSeller(_id, name)}
                            htmlFor="delete-seller-modal" className="btn btn-sm bg-red-600  border-0 text-white">Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteSellerModal;