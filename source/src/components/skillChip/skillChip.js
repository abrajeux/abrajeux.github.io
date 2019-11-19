import React from 'react';
import styles from "./skillChip.styles";

class SkillChip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mouseOn : false,
        };
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver(){
        this.setState({
            mouseOn : true
        })
    }

    handleMouseLeave(){
        this.setState({
            mouseOn:false,
        })
    }

    render() {
        return(
            <div style={this.state.mouseOn ? styles.skillMouseOver : styles.skill} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <p style={{marginTop : '0px'}}>{this.props.skill}</p>
                <div style={{...styles.skillLogo, backgroundImage: 'url('+this.props.image+')'}}/>
                <div style={{...styles.level,background: 'linear-gradient(to right,rgba(110, 212, 111,255) '+ this.props.progress + '%, rgba(110, 212, 111,0) '+ this.props.progress + '%)'}}/>
            </div>
        );
    }
}

export default SkillChip;