import { FC } from 'react';
import './_style.scss';
import { ToogleButton } from '@ui';

const index: FC = () => {
  return (
    <header>
      <ToogleButton />
      <div className="search">
        <input type="search" placeholder="Enter search text" />
        <span>
          <i className="bi bi-search"></i>
        </span>
      </div>
    </header>
  );
};

export default index;
