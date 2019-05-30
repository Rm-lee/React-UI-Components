import React from 'react';
import moment from 'moment'
import './Header.css';



const time = moment().format("MMM Do YY");
function HeaderTitle(){
    return (
    <div className="header-title"><h2><strong>Lambda School</strong></h2>
    <p className="user">@LambdaSchool &middot; {time}</p>
    </div>
    );
}
export default HeaderTitle;