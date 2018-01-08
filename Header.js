import React from 'react';

export class Header extends React.Component {

    render() {
        const x = 5;
        return (
            <div>
                <p style={{color: 'red'}}>This is header: {x}</p>
            </div>
        );
    }
}


//export Header;
