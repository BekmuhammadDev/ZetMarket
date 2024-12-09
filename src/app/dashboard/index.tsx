import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Aside, Header } from '@components';
import { setSearchAction } from '../../stores/search-slice';
import './_style.scss';
import { useDispatch } from 'react-redux';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const { pathname }: { pathname: any } = useLocation();

  // useEffect(() => {
  //   dispatch(setSearchAction(pathname));
  //   if (!localStorage.getItem('token')?.trim()){
  //     window.location.href = '/login';
  //     return;
  //   }
  // }, [pathname]);

  return (
    <>
      <main>
        <Aside />
        <section className="wrapper">
          <Header />
          <section id="route">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};
