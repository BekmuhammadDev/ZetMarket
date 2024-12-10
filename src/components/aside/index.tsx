import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutButton } from '@ui';
import { navigation } from '@constants';
import { checkRole } from '@utils';
import type { TnavigationType } from '@ttypes';
import './_style.scss';
import { RootState } from '@store';

let role = localStorage.getItem('role') || 'admin';

const index: FC = () => {
  const { isOpen } = useSelector((state: RootState) => state.toogle);

  const asideStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <aside style={asideStyle}>
      <Link to="/" className="logo">
        <img src="../../../public/zetmarket.png" alt="logo" />
        <p>ZETNARKET</p>
      </Link>
      <ul className="list">
        {checkRole(navigation, role).map((item: TnavigationType) => (
          <li key={item.path}>
            <NavLink to={item.path} className="list-item">
              <i className={item.icon}></i>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="settings">
        <img
          className="avatar"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="user"
        />
        <h3>Super Admin</h3>
        <LogoutButton />
      </div>
    </aside>
  );
};

export default index;
