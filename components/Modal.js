const Modal = ({ imageUrl, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <img className="w-full h-full" src={imageUrl} alt="Enlarged Image" />
        <button
          className="absolute top-0 right-0 m-4 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  };
  
  export default Modal;