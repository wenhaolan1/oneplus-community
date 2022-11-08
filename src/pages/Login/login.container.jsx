import React from 'react'
import { isValidLogin } from '@/api/login'
import { useNavigate } from 'react-router'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import LoginComponent from './login.components'

const useFormStyles = makeStyles(() => 
    createStyles({
        card: {
            maxWidth: 400,
            margin: '0 auto'
        }
    })    
)

const LoginContainer = () => {
    const navigate = useNavigate()
    const classes = useFormStyles()
    const handleLogin = async (login) => {
        const isLoginSuccess = await isValidLogin(login)
            if (isLoginSuccess) {
                navigate('/home')
            }
        // console.log('111')
        }
  return (
    <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
            <LoginComponent onLogin={handleLogin}/>
        </CardContent>
    </Card>
  )
}

export default LoginContainer
