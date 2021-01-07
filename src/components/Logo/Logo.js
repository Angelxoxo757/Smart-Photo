import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma3 mt0'>
            <Tilty className="Tilty br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilty-inner pa3"><img style={{paddingTop: '5px'}} alt='logo' src={brain}
                />
                </div>
            </Tilty>
        </div> 
    );
}
export default Logo;