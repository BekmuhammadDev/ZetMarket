import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import { AgChartOptions } from 'ag-charts-community';
import { barchart } from '@constants';

export const BarChart = (): React.JSX.Element => {
  const [options] = useState<AgChartOptions>({
    title: {
      text: 'Sotuvning yillik hisoboti',
    },
    subtitle: {
      text: 'www.zetmarket.uz',
    },
    data: barchart,
    series: [
      {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'totalPrice',
        yName: 'totalPrice',
      },
    ],
  });

  return <AgCharts options={options} />;
};
