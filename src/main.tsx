import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { globalThemeConfig } from './theme';
import { AppRouter } from '@router';
import { Provider } from 'react-redux';
import { store } from '@store';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalThemeConfig}>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
    <RouterProvider router={AppRouter} />
    </QueryClientProvider>

      
    </Provider>
  </ConfigProvider>
);
