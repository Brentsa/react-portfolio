
function Navigation({currentPage, setPage, menuItems}){
    return (
        <nav className="col-12 col-md-4">
            <ul className="nav d-flex justify-content-between">

                {menuItems.map(item => (
                    <li className={`navigation-item ${currentPage === item && 'navigation-active'}`} key={item}>
                        <span
                           onClick={()=>setPage(item)} 
                        >{item}</span>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navigation;