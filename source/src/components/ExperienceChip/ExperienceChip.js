import React from 'react';
import styles from "./ExperienceChip.style";

class ExperienceChip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOn: false,
        };
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.setState({
            mouseOn:true,
        })
    };

    handleMouseLeave() {
        this.setState({
            mouseOn:false,
        })
    };

    render() {
        return(
            <div style={this.state.mouseOn ? styles.containerMouseOver : styles.container} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <div style={{...styles.image, backgroundImage: 'url(' + this.props.image + ')'}}>
                    <div style={{...styles.imageGradient, background: 'linear-gradient(to left, rgba(255,255,255,255) 0%, rgba(255,255,255,0) 50%)'}}/>
                </div>
                <div>
                    <p style={styles.title}>{this.props.title}</p>
                    <p style={styles.description}>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default ExperienceChip;