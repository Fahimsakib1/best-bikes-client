import React from 'react';

const DeleteProductModal = ({ deleteProduct, closeModal, handleDeleteProduct }) => {

    const { _id, product_name, category_name } = deleteProduct;

    


    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-4 text-center"> Want to Delete {product_name} From List ?</h3>
                    <p className=" text-red-700 mb-4 text-center">*** Once you delete a product it can not be retrieved *** </p>
                    <div className='flex justify-between'>
                        <button onClick={closeModal} className='btn  bg-blue-700 text-white btn-sm border-0'> Cancel</button>
                        <label
                            onClick={() => handleDeleteProduct(_id, product_name)}
                            htmlFor="confirmation-modal" className="btn btn-sm bg-red-600  border-0 text-white">Delete
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProductModal;