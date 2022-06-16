import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
const useOutside = (ref: any, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

export default useOutside;
