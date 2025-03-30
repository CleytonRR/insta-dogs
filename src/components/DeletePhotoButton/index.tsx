import deleteAction from '@/actions/deleteAction';
import { useState } from 'react';

type DeletePhotoButtonProps = {
  id: string;
};

export default function DeletePhotoButton({ id }: DeletePhotoButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClicked = async () => {
    setLoading(true);

    const isConfirm = window.confirm('Tem certeza que deseja deletar?');

    if (isConfirm) {
      await deleteAction(id);
    }

    setLoading(false);
  };

  return (
    <button
      className="cursor-pointer rounded-[0.4rem] border border-solid border-transparent bg-[#ddd] px-[0.6rem] py-[0.3rem] font-spectral text-sm transition-all hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee] hover:outline-0 focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee] focus:outline-0"
      disabled={loading}
      onClick={handleClicked}
    >
      {loading ? 'Deletando...' : 'Deletar'}
    </button>
  );
}
