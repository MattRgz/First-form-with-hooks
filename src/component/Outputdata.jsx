import React from 'react';

const style={
    Outputdata:{
        display:'flex',
        justifyContent:'center',
        padding:'5px',
        flexDirection:'Column',
        alignItems:'center'
    },
    Datadisplay:{
        display:'flex',
        justifyContent:'space-between',
        padding:'5px',
        alignItems:'space-between',
        flexDirection:'column',
        width:'50%',
    }
}

const Outputdata = (props) => {
    return (
        <div style={style.Outputdata}>
            <h1>Your Form Data</h1>
            <div style={style.Datadisplay}>
            <p>First Name: <span>{props.firstName}</span></p>
            <p>Last Name: <span>{props.lastName}</span></p>
            <p>E-Mail: <span>{props.eMail}</span></p>
            <p>Password: <span>{props.password}</span></p>
            <p>Confirm Password: <span>{props.secondPassword}</span></p>
            </div>
        </div>
    );
}

export default Outputdata;
