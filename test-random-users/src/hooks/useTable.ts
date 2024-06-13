import { useState } from 'react';

export function useTable() {
  const [showRowColors, setshowRowColors] = useState(false);

  const toggleShowRowColors = (): void => {
    setshowRowColors((prevState) => !prevState);
  };

  return {
    showRowColors,
    toggleShowRowColors,
  };
}
