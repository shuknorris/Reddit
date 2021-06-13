import React from 'react';
import './Header.css';
function Header(){
    return(
        <div className='header'>
            <div className='header-left'>
                <ul className=''>
                    <li><a href="/r/popular">Popular</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">Controversial</a></li>
                    <li><a href="/r/glided>Glided">Glided</a></li>
                </ul>
            </div>
            <div className='header-right'>
                    <i className='fas fa-bell'></i>
                    {/* <img alt="gio" */}
          {/* src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg" */}
        {/* /> */}
                <div className='header-user'>
                    <span>Amir Vhora</span> 
                    <i className='fa fa-caret-down'></i>
               </div>
            </div>
        </div>
    )
}
export default Header;