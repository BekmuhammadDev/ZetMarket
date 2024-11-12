import {FC, useEffect} from 'react';
import { message } from 'antd';
import useClipboard from "react-use-clipboard";

interface IcontentType {
    text: string | number;
}

const index: FC<IcontentType> = ({text}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [isCopied, setCopied] = useClipboard(text as string);

   
    useEffect(()=>{
        if(isCopied){
            messageApi.success({
                content: `Copied: ${text}`,
               
            });
        }
    },[isCopied])
    return (
        <div>
            {contextHolder}
            <span onClick={setCopied}>
            <i className='bi bi-copy'></i>
        </span>
        </div>
    );
};

export default index;