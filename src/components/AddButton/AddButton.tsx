import React from 'react';
type Props = {
  onClick: () => void;
};

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        cursor-pointer
        mt-4 rounded-xl bg-[#5f7f6a] text-white py-2 text-sm
        transition-all
        hover:shadow-[0_0_0_3px_rgba(95,127,106,0.35)]
      "
    >
      Добавить
    </button>
  );
};
