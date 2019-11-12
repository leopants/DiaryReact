import React from 'react';
import Clock from 'react-live-clock';

function Navigation() {
    var today = new Date();
    var date = today.getMonth() + "/" + today.getDay() + "/" + today.getFullYear();

    return (
        <div style={{display:'flex', padding:'10px', justifyContent:'space-around'}}>
            <Clock style={{fontSize:'25px'}} format={'h:mm A'} ticking={true} timezone={'US/Pacific'}/>
            <div  
                style={{textAlign:'left', fontSize:'25px'}} 
                href="https://www.google.com/search?q=google+weather&oq=google+weather&aqs=chrome.0.0l4j69i60l2.1827j0j9&sourceid=chrome&ie=UTF-8" target="_blank">
                {date}
            </div>
        </div>
    );
}

export default Navigation;