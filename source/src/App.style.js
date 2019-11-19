import photo from "./images/ma_photo.png"

let styles = {
    app: {
        height:'100%',
        backgroundColor: '#5b7495',
        paddingBottom:'15em'
    },

    header: {
        backgroundColor : '#272d3a',
        width:'100%',
        height: '10%',
        minHeight: '18em',
        backgroundSize:'cover',
        backgroundPosition:'center',
        display: 'flex',
        zIndex:0,
        overflow:'hidden',
        marginBottom: '6em'
    },

    logoContainer:{
        height: '16em',
        width:'fit-content',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        zIndex: 1,
        marginLeft:'50%',
        marginRight: 'auto',
    },

    infosContainer: {
        color:'#ffffff',
        textShadow : '10px 5px 5px #000000',
        marginLeft : '10%',
        marginTop: '3%',
        position:'absolute',
        display:'flex',
        zIndex:2,
    },

    photo: {
        backgroundImage: 'url(' + photo + ')',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        height: '17em',
        width: '14em',
        backgroundRepeat: 'no-repeat',
        boxShadow : '10px 5px 5px #000000',
        marginRight: '10%'
    },

    name:{
        fontFamily:'Oswald, sans-serif',
        fontSize:'3em',
        marginBottom:'0px',
        marginTop:'0px',
        color:'rgb(167,222,255)'
    },

    job : {
        fontFamily:'Roboto, sans-serif',
        fontSize: '1.8em',
        marginTop:'0px'
    },

    linkIconsContainer : {
        marginLeft:'auto',
        alignSelf: 'flex-end',
        padding: '5px',
        display:'flex',
        justifyContent:'space-around',
        width:'20%',
        minWidth:'15em',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        zIndex:2,
        position: 'absolute',
        right: 0
    },

    linkIcon : {
        width: '3.5em',
        height: '3.5em'
    },

    content : {
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
    },

    sectionContainer: {
        width: '80%',
        backgroundColor:'#ffffff',
        marginBottom:'4em'
    },

    title: {
        fontFamily: 'Oswald, sans-serif',
        fontSize:'2.5em',
        paddingLeft : '1em',
        marginTop : '0px',
        marginBottom:'0px',
        color:'white',
    },

    chipContainer: {
        display:'flex',
        width:'100%',
        flexWrap:'wrap',
        justifyContent:'center'
    },

    experienceContainer : {
        display:'flex',
        flexDirection: 'column',
        width:'100%',
        alignItems:'center',
    }
};

export default styles;