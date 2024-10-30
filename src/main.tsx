import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { globalThemeConfig } from './theme';
import { AppRouter } from '@router';
import { Provider } from 'react-redux';
import { store } from '@store';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalThemeConfig}>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </ConfigProvider>
);
