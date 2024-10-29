import { useState } from 'react';
import ModalComponent from './ModalComponent';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils/getError';

/* eslint-disable react/prop-types */
const CellPreviewImg = ({ dataRow, endpoint = "news" }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  const updateImage = useMutation({
    mutationFn: (instructorInfo) =>
      axios.patch(
        `${import.meta.env.VITE_BASE_URL}/${endpoint}/${dataRow?._id}`,
        instructorInfo
      ),

    onSuccess: () => {
      queryClient.invalidateQueries(['news']);
      toast.success(`Exitosamente editado!`);
    },

    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleChangeImg = (e) => {
    const confirmChange = confirm('Estas seguro de cambiar la imagen?');

    if (!confirmChange) return;

    const dataSend = new FormData();

    const file = e.target.files[0];
    dataSend.append('uploadImages', file);

    updateImage.mutate(dataSend);
  };

  console.log(dataRow);
  return (
    <div>
      <button onClick={() => setShowModal(true)} className='w-full'>
        <img
          src={dataRow.image[0].cloudinary_url}
          alt="test"
          className="max-w-[10rem] max-h-[5rem] rounded-lg mx-auto"
        />
      </button>

      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        showBtn={false}
        titleModal={'Preview Imagen'}
      >
        <p className='mb-3 text-center bg-yellow-300'>Click en imagen para modificarla</p>
        <label className={`${updateImage.isPending ? `opacity-25` : null} cursor-pointer`}>
          <img
            src={dataRow.image[0].cloudinary_url}
            alt="test"
            className="w-full max-h-[20rem] object-contain rounded-lg"
          />

          <input
            type="file"
            name="uploadImages"
            hidden
            onChange={handleChangeImg}
            accept="image/*"
            disabled={updateImage.isPending}
          />
        </label>
      </ModalComponent>
    </div>
  );
};

export default CellPreviewImg;
