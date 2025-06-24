import { useState } from 'react'
import { Link } from 'react-router-dom'
export function Header(props) {
    return (

        <>
            <header>
                <div className='d-flex justify-content-around bg-dark'>
                    <div className='ps-lg-5'>
                        <span className='bi bi-geo-alt-fill text-success'> 90, Khaitan Nagar Rd, Jinkal</span>
                    </div>
                    <div className='navbar navbar-dark bg-dark navbar-expand-lg ps-lg-5'>
                        <div className='navbar-collapse collapse ps-lg-5' id="btn">
                            <ul className='navbar-nav ps-lg-5'>
                                <li className='nav-item'><span className='text-success'></span></li>
                                <li className='nav-item'><span className='bi bi-telephone-fill text-white'> <span >+918651295487</span></span></li>
                                <li className='nav-item ps-4'>
                                    <select className='form-select form-select-sm bg-dark text-white'>
                                        <option selected>English</option>
                                        <option value={1}>Hindi</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg ps-lg-5'>
                    <div className='container-fluid ps-lg-5'>
                        <Link to="/" className='navbar-brand pe-lg-5 text-success fw-bold'>Doctorswalla</Link>
                        <button className='navbar-toggler' data-bs-target="#menu" data-bs-toggle="collapse">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='navbar-collapse collapse ps-lg-5' id='menu'>
                            <ul className='navbar-nav pe-lg-5'>
                                <li className='navbar-item'><Link to="/" className='nav-link'><button className='btn btn-dark nav-item-text text-white'>Home</button></Link></li>
                                <li className='navbar-item'><Link to="/medicine" className='nav-link'><button className='btn btn-dark nav-item-text text-white'>Categories</button></Link></li>
                                <li className='navbar-item'><Link to="/lab" className='nav-link'><button className='btn btn-dark nav-item-text text-white'>Stores</button></Link></li>
                            </ul>
                        </div>
                        <div className='navbar-collapse collapse ps-lg-5' id="btn">
                            <ul className='navbar-nav ps-lg-5'>
                                <li className='navbar-item'><Link to="/"><button className='nav-item-text bi bi-truck btn btn-dark'></button></Link></li>
                                <li className='navbar-item'><Link to="/"><button className='nav-item-text bi bi-cart4 btn btn-dark'></button></Link></li>
                                <li className='navbar-item'><Link to="/"><button className='nav-item-text bi bi-lock-fill btn btn-success'><span className='px-3'>SigIn</span></button></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}