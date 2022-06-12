import React, {useState} from 'react';
import Inputboxes from './Inputboxes';
import Outputdata from './Outputdata';

const style={
    boxesContainer:{
        display:'flex',
        justifyContent:'center',
        width:'40%',
        alignContent:'center',
        flexDirection:'column',
        marginTop:'15px'
    }
}

const Form = (props) => {

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[eMail,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[secondPassword,setSecondPassword] = useState('')

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstName,lastName,eMail,password,secondPassword}
        console.log(`Welcome, ${firstName}`)
        return(newUser)
    }

    const firstNameHandler=(e)=>{
        setFirstName(e.target.value)
    }
    const lastNameHandler =(e)=>{
        setLastName(e.target.value)
    }
    const eMailHandler =(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler =(e)=>{
        setPassword(e.target.value)
    }
    const secondPasswordHandler =(e)=>{
        setSecondPassword(e.target.value)
    }


        return (
            <>
                <div style={style.boxesContainer}>
                    <Inputboxes value={'First Name'} name={firstName} onValueChange={firstNameHandler} shown={'!'} />
                    <Inputboxes value={'Last Name'} name={lastName} onValueChange={lastNameHandler} shown={'!'}/>
                    <Inputboxes value={'E-Mail'} name={eMail} onValueChange={eMailHandler} shown={'!'}/>
                    <Inputboxes value={'Password'} name={password} onValueChange={passwordHandler}/>
                    <Inputboxes value={'Confirm Password'} name={secondPassword} onValueChange={secondPasswordHandler}/>
                </div>
                <div style={style.boxesContainer}>
                    <Outputdata firstName={firstName} lastName={lastName} eMail={eMail} password={password} secondPassword={secondPassword}  />
                </div>
            </>
        );
}

export default Form;

