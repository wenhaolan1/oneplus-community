import React, { useState } from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createEmptyLogin } from '@/api/login'


const useFormStyles = makeStyles((theme) => 
    createStyles({
        formContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center'
        }
    })
)
const  LoginComponent= (props) => {
    const { onLogin } = props
    const [ loginInfo, setLoginInfo ] = useState(
        createEmptyLogin()
    )

    const onTexFieldChange = (fieldId) => 
        (e) => {
            setLoginInfo({
                ...loginInfo,
                [fieldId]:e.target.value
            })
        }

    const classes = useFormStyles()
    return (
        <div className={classes.formContainer}>
            <TextField 
                label="Name"
                margin="normal"
                value={loginInfo.login}
                onChange={onTexFieldChange("login")}
            />
            <TextField 
                label="Password"
                type="password"
                margin="normal"
                value={loginInfo.password}
                onChange={onTexFieldChange("password")}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => onLogin(loginInfo)}
            >
                login
            </Button>
        </div>
    )
}

export default LoginComponent
