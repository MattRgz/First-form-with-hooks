import React from 'react';

const style={
    boxes:{
        display:'flex',
        justifyContent:'space-between',
        marginTop:'15px',
        padding:'10px',
        backgroundColor:'lightblue',
        borderRadius:'12px',
        boxShadow:'2px 2px 5px 1px grey'
    },
    inputBoxes:{
        borderRadius:'7px',
        width:'70%'
    }
}
const Inputboxes = ({value,name,onValueChange,shown}) => {
    return (
        <div style={style.boxes}> 
            <span>{value}</span> <input type={shown?'text':'password'} id='input' onChange={onValueChange} name={name} style={style.inputBoxes}/>
        </div>
    );
}

export default Inputboxes;
