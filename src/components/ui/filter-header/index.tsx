import {FC} from 'react';
import "./_style.scss"
import { ParnterDropdown } from '../partner-dropdown';
import { DateFilter } from '../date-filter';

const index: FC = () => {
    return (
        <div className='filter'>
            <span>+</span>
            <div className="filter_actions">
            <DateFilter/>
            <ParnterDropdown/>
            </div>
        </div>
    );
};

export default index;