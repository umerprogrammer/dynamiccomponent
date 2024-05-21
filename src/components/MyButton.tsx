
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function MyButton(props: {
    btnValue: string;
    btnClick?: () => void;
    btnClass?: string;
    btnIcon?:IconProp;
}) {
    const { btnValue, btnClick, btnClass,btnIcon } = props;
    return (
        <button className={btnClass} onClick={btnClick} type="button" style={{height:"30px"}}>
           <span style={{display: btnIcon == undefined ? 'none':'inline-block'}}> <FontAwesomeIcon icon={btnIcon as IconProp} className='pe-2' ></FontAwesomeIcon></span>
           <span>{btnValue}</span>
        </button>
    )
}