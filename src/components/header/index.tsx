import { FC } from 'react';
import { ToogleButton } from '@ui';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import './_style.scss';

const index: FC = () => {
  const { placeholder } = useSelector((state: RootState) => state.search);
  return (
    <header>
      <ToogleButton />
      <div className="search">
        <input type="search" placeholder={placeholder} />
        <span>
          <i className="bi bi-search"></i>
        </span>
      </div>
    </header>
  );
};

export default index;
