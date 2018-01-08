import React from 'react';

export class Header extends React.Component {

    render() {
        const x = 5;
        const style = {color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'};
        return (
            <div className="abc">
                <p style={{color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'}}>This is header: {x}</p>
                <p style={style}>This is header: {x}</p>
            </div>
        );
    }
}


//export Header;
