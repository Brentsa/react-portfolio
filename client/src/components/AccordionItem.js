import {useState} from 'react';

function AccordionItem({open, name, parameters, content}){

    const [isActive, setActive] = useState(open);

    function accordianClick(){
        setActive(!isActive);
    }

    return (
        <div>
            <h3 className="paragraph-description" onClick={accordianClick} style={{cursor: 'pointer'}}>
                {!isActive ? '+' : '-'}<span> function </span>{name}<span>({parameters})</span>{' {'}{!isActive && ` · · · }`}
            </h3>
            {isActive && <><p className="paragraph-content indent">{content}</p>
            <h3 className="paragraph-description-closure">{'}'}</h3></>}
        </div>
    )
}

export default AccordionItem;