import React from 'react';
import reactLogo from "../../images/1200px-React-icon.svg.png";

class RotatingLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angle : 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            let angle = this.state.angle;
            angle += 0.3;
            if(angle === 360) angle = 0;
            this.setState({
                angle:angle,
            })
        },50)
    }

    render(){
        return(
        <img alt={"reactLogo"} src={reactLogo} style={{objectFit: 'cover', transform: 'rotate('+this.state.angle+'deg)'}}/>
    )}
}

export default RotatingLogo;