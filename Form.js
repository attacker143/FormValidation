import { useState } from "react";

import style from './Form.module.css';

function Form() {

    const [Values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confpassword: ''
    });

    const [Error, setError] = useState({})

    const getvalues = (e) => {

        const name = e.target.name
        const value = e.target.value
        // console.log(name +':'+ value)

        setValues((prev) => {
            return { ...prev, [name]: value }
        });




    }

    const validate = (val) => {

        console.log(val)

        if (!val.name.trim()) {
            setError((prev) => { return { ...prev, ['name']: 'Name is required' } })
        }
        if (!val.email.trim()) {
            setError((prev) => { return { ...prev, ['email']: 'Email is required' } })
        }
        if (!val.password) {
            setError((prev) => { return { ...prev, ['password']: 'Password is required' } })
        }
        if (val.password) {
            if (val.password.length < 6) {
                // console.log('password is morethan 6 charcter')
                setError((prev) => { return { ...prev, ['pass1len']: 'Password is morethan 6 charcter' } })
            }

        }

        if (!val.confpassword) {
            setError((prev) => { return { ...prev, ['confpassword']: 'Confirm Password is required' } })
        }

        if (val.confpassword) {
            if (val.confpassword.length < 6) {
                // console.log('confirm password is morethan 6 charcter')
                setError((prev) => { return { ...prev, ['pass2len']: 'Password is morethan 6 charcter' } })
            }

        }
        if (val.password !== val.confpassword) {
            setError((prev) => { return { ...prev, ['passcom']: 'Confirm Password is not match' } })
        }
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        // console.log(Values);
        validate(Values)

    }

    return (
        <>
            <div className={style.container}>
                <h1 className={style.heading}>BlackTechY</h1>
                <form onSubmit={handlesubmit}>

                    <label className={style.input}>
                        Enter Your Name :
                    </label>
                    <input type="text" name="name" onChange={getvalues} ></input>
                    {Error.name && <span>{Error.name}</span>}
                    

                    <label className={style.input}>
                        Enter Your Email :
                    </label>
                    <input type="email" name="email" onChange={getvalues}></input>
                    {Error.email && <span>{Error.email}</span>}

                    <label className={style.input}>
                        Enter Your Password :
                    </label>
                    <input type="password" name="password" onChange={getvalues}></input>
                    {Error.password && <span>{Error.password}</span>}
                    {Error.pass1len && <span>{Error.pass1len}</span>}
         
                    <label className={style.input}>
                        Enter Confirm Password :
                    </label>
                    <input type="password" name="confpassword" onChange={getvalues}></input>
                    {Error.confpassword && <span>{Error.confpassword}</span>}
                    {Error.pass2len && <span>{Error.pass2len}</span>}
                    {Error.passcom && <span>{Error.passcom}</span>}
                    
                    <div>
                        <input type="submit" value='Submit'></input>
                    </div>

                </form>
            </div>
        </>

    )
}


export default Form;
