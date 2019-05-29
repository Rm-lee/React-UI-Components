import React from 'react';
import HeaderTitle from './HeaderTitle'

import HeaderContent from './HeaderContent'
import './Header.css';

function HeaderContainer() {
    return <div className="header-container"> <HeaderTitle /><HeaderContent /></div>;
}
export default HeaderContainer;