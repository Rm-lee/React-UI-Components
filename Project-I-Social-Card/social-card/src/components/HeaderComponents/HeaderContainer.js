import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail'
import './Header.css';

function HeaderContainer() {
    return (

    <div className="header-container">
        <ImageThumbnail />
        <div className="content-wrapper">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    
    );
}
export default HeaderContainer;