import React from "react";

const Header = () => {
    return(
        <header className="bg-danger py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">MARVEL</h1>
                    <p className="lead fw-normal text-white mb-0">Comic Collection</p>
                </div>
            </div>
        </header>
    );
}

export default Header;