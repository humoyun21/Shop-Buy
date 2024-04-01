import "./style.scss"

function header() {
    return <>
     <header>
        <div className="container">
            <nav className="nav">
               <div className="nav--left">
                <span></span>
                <a href="#">SHOP <strong>Buy</strong></a>
               </div>
               <ul className="nav--list">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Sale</a></li>
               </ul>
               <div className="nav--right">
                <button>EN</button>
                <button>Liked</button>
                <button>
                    <i className="bi bi-list"></i>
                </button>
               </div>
            </nav>
        </div>
     </header>
    </>
}

export default header;