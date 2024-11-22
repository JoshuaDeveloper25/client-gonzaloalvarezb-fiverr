/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa';

const ModalComponent = ({
  onClick = () => {},
  textBtn,
  titleModal,
  children,
  className = 'bg-primary-color text-white hover:bg-gray-800/50 hover:scale-105 animation-fade rounded px-2 py-1 flex items-center gap-2',
  SecondaryBtn = null,
  showModal,
  setShowModal,
  onClose = () => {},
  showBtn = true,
}) => {
  const mostrarModal = () => {
    onClick();
    {
      setShowModal(!showModal);
      onClose();
    }
  };

  return (
    <>
      {/* <!-- Modal button --> */}
      <div className="flex gap-5">
        {showBtn && (
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            onClick={mostrarModal}
            className={className}
            type="button"
          >
            {textBtn} <FaPlus />
          </button>
        )}

        {SecondaryBtn && <SecondaryBtn />}
      </div>

      {showModal && (
        <>
          <div
            id="default-modal"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center z-[999] items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div
              className="h-[100vh] fixed top-0 w-full bg-black/40"
              onClick={() => {
                setShowModal(!showModal);
                onClose();
              }}
            ></div>
            <div className="relative p-4 w-full mx-auto mt-20 max-w-lg max-h-full z-40">
              {/* <!-- Modal content --> */}
              <div className="bg-white rounded-lg shadow text-black z-40 py-5">
                {/* <!-- Modal header --> */}
                <div className="relative pt-5">
                  <h3 className="text-3xl font-bold text-gray-700 text-center">
                    {titleModal}
                  </h3>

                  <button
                    type="button"
                    data-modal-hide="default-modal"
                    className="absolute -top-3 right-2"
                    onClick={() => {
                      setShowModal(!showModal);
                      onClose();
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalComponent;
