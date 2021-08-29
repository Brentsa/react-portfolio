
function ButtonLink(props){
    const {children, href, icon} = props;

    return (
        <a href={href} target="_blank" rel="noreferrer" className="btn-a">
            {icon && <i className={icon}></i>} {children}
        </a>)
}

export default ButtonLink;
