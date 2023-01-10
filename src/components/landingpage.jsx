import { Link } from 'react-router-dom';
import '../styles/landingpage.css'
const Landingpage = () => {
    return (
        <div className="page">
            <img src="images/logo.png" alt="" className='logo'/>
            <div className='text'>
                <h1 className='welcome' style={{ color: ' #088a6b' }}>Discover the Best Books !</h1>
                <h3 className='welcome1'>There is more Treasure in books than in all the Pirate's loot on</h3> <h3 className='caption'> TREASURE ISLAND !</h3>
            </div>
            <Link to='/admin-login' className='btn' id='btn1'>Admin Login</Link>
            <Link to='/user-login' className='btn' id='btn2'>User Login </Link>

        </div>
    );
}

export default Landingpage;