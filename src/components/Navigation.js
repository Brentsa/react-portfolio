
function Navigation({currentPage, setPage, menuItems})
{
    return (
        <nav className="col-12 col-md-6 col-lg-5 col-xl-4">
            <ul className="nav d-flex justify-content-evenly align-items-stretch">
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