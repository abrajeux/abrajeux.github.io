let styles = {
    container: {
        width: '80%',
        height: 'fit-content',
        border:'2px solid rgba(196, 31, 56,255)',
        marginTop:'1em',
        marginBottom:'1em',
        transition:'all .5s',
        display:'flex',
    },

    containerMouseOver : {
        width: '80%',
        height: 'fit-content',
        border:'3px solid rgba(196, 31, 56,255)',
        marginTop:'1em',
        marginBottom:'1em',
        boxShadow: '5px 5px 10px rgba(196, 31, 56,255)',
        transition:'all .5s',
        display:'flex',
    },

    title : {
        fontFamily:'Oswald, sans-serif',
        fontSize:'1.2em'
    },

    description: {
        fontFamily: 'Roboto, sans-serif',
    },

    image:{
        minHeight:'4em',
        width:'12em',
        backgroundPosition:'center',
        backgroundSize:'cover',
        marginRight : '3%'
    },

    imageGradient: {
        width:'12em',
        height:'100%'
    }

};
export default styles;