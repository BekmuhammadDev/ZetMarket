import { FC } from 'react';
import { cardStats } from '@constants';
import './_style.scss';
import { StatCard } from '@ui';
import { BarChart } from '@charts';

const index: FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="grid-card">
          {cardStats.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>

        <div className="chart">
          <BarChart />
        </div>
      </div>
    </section>
  );
};

export default index;
