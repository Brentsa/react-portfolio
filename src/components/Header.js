import Navigation from "./Navigation";

function Header({currentPage, setPage, menuItems})
{
    return (
        <header className="container background-primary color-tertiary">
            <div className="row d-flex justify-content-around align-items-center">
                <h1 className="col-12 col-md-6 text-center text-md-start my-2">Sean Brent: Developer</h1>
                <Navigation
                    currentPage={currentPage}
                    setPage={setPage}
                    menuItems={menuItems}
                />
            </div>
        </header>
    )
}

export default Header;