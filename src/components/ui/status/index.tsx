import {FC} from 'react';
import './_style.scss'

interface ItypeStatus {
    type: string;
}

const index:FC<ItypeStatus> = ({type}) => {
    switch (type.toLocaleLowerCase()) {
        case'pending':
        return <div className='pending status'>
            <i className='bi bi-hourglass-split'></i>
            <span>Pending</span>
        </div>
        case 'processing':
        return <div className='processing status'>
            <i className="bi bi-slash-circle"></i>
            <span>Processing</span>
        </div>
        case 'completed':
            return <div className='completed status'>
                <i className='bi bi-check2-square'></i>
                <span>Completed</span>
            </div>
        case 'cancelled':
            return <div className='cancelled status'>
                <i className='bi bi-x-circle'></i>
                <span>Cancelled</span>
            </div>
        default:
            return <div className='unknown status'>
                <i className='bi bi-question-circle'></i>
                <span>Unknown</span>
                 </div>
    }
};

export default index;