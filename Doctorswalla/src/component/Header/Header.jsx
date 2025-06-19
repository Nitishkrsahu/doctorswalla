import './header.css'
import {Link} from 'react-router-dom'
export function Header(props){
    return (
        <>
        <header style={{
            top: '-25px',
            position: "sticky",
            zIndex: "9999",
            transition: "0.4s"
        }}
            >
            <div className='text-white row'>
                <div className='col-8'>
                    <span className='bi bi-geo-alt-fill text-success pe-2'></span>
                    <span>{props.location}</span>
                </div>
                <div className='col-4 text-end'>
                    <span className='bi bi-telephone-fill pe-2'></span>
                    <span>{props.tel}</span>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center text-white fs-4' style={{
                height: '60px'
            }}>
                <div className='text-white'>
                    <h3>{props.brand}</h3>
                </div>
                <div>
                    <button className='btn btn-dark bi bi-truck me-3'></button>
                    <button className='btn btn-dark bi bi-cart4 me-3'></button>
                    <button className='btn btn-success px-4'><span className='bi bi-lock-fill pe-2'>SignIn</span></button>
                </div>
            </div>
        </header>
        </>
    )
}