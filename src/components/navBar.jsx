import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
          <div id="cssmenu">
              <ul>
                <li className="active"><a href="#"><span>Home</span></a></li>
                <li><a href="#"><span>About</span></a></li>
                <li><a href="#"><span>FAQ</span></a></li>
                <li classNAme="last"><a href="#"><span>Contact</span></a></li>
              </ul>
            </div>
      )
    }
}



export default NavBar;
