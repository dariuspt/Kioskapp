import React from 'react';

interface DeleteItemModalProps {
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = ({ itemName, onConfirm, onCancel }) => {
  return (
    <div id="popup-modal" tabIndex={-1} className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-4">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onCancel}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete {itemName} from the cart?</h3>
            <button onClick={onConfirm} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 mr-2">
              Yes, delete
            </button>
            <button onClick={onCancel} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
