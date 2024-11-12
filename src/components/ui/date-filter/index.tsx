import {FC} from 'react';
import { DatePicker, } from 'antd';

const {RangePicker} = DatePicker

export const DateFilter: FC  = () => {
    return (
        <div>
            <RangePicker/>
        </div>
    );
};

