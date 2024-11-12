import { FC } from 'react';
import './_style.scss'
import { uzumlogo, aliflogo, zoodpaylogo, clicklogo, payzeelogo, opencartlogo, paymelogo } from '@icons'

type TPartnerType = {
    type: string;
}

const index: FC<TPartnerType> = ({ type }) => {
    switch (type) {
        case 'UZUM':
            return <img src={uzumlogo} alt="uzum" />;
        case 'ALIF':
            return <img src={aliflogo} alt="alif" />;
        case 'ZOODPAY':
            return <img src={zoodpaylogo} alt="zoodpay" />;
        case 'PAYZEE':
            return <img src={payzeelogo} alt="payzee" />;
        case 'CLICK':
            return <img src={clicklogo} alt="clicklogo" />;
        case 'OPENCARD':
            return <img src={opencartlogo} alt="opencartlogo" />;
        case 'PAYME':
            return <img src={paymelogo} alt="paymelogo" />;
        default:
            return <div>ZETPay</div>
    }

};

export default index;