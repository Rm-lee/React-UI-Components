import React from 'react';
import moment from 'moment'
import './Header.css';
import HeaderContainer from './HeaderContainer';


const time = moment().format("MMM Do YY");
function HeaderTitle(){
    return <p className="header-title"><strong>Lambda School</strong> @LambdaSchool &middot; {time}</p>
}
export default HeaderTitle;