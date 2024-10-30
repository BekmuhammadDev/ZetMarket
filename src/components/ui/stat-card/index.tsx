import { FC } from 'react';
import './_style.scss';
import type { TCardPropsType } from '@ttypes';

const index: FC<TCardPropsType> = ({ icon, title, value, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="stat-card" style={cardStyle}>
      <h3>{title}</h3>
      <div className="count">
        <h1>{value}</h1>
        <small>count</small>
      </div>
      <div className="circle">
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default index;
