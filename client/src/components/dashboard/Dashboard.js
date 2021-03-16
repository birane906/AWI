import { React, useState } from 'react';
import "./Dashboard.css"

const Dashboard = (props) => {

    const [navWidth, setNavWidth] = useState(0)

    function openNav() {
        setNavWidth(250)
      }
      
      function closeNav() {
        setNavWidth(0)
      }

    return (
        <div>
            <div id="mySidenav" class="sidenav" style={{ width: navWidth}}>
                {
                    props.children.map((value, index) => {
                        return (
                            <a href={value.props.path} key={index}>{value.props.title}</a>
                        )
                    })
                }
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
            </div>
            <span style={{"fontSize":"30px","cursor":"pointer"}} onClick={openNav}>&#9776;</span>
        </div>
    );
};

export default Dashboard;