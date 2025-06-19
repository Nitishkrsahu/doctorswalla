import './header.css'
import {Link} from 'react-router-dom'
export function Header(){
    return (
        <>
        <header className='d-flex align-items-center justify-content-between' style={{height: '60px'}}>
            <div>
                <h2>DoctorsWalla</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/lab">Lab</Link></li>
                    <li><Link to="/medicine">Medicines</Link></li>
                    <li><Link to="/neurology">NeuroLogy</Link></li>
                    <li><Link to="/cardiology">Cardiology</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}