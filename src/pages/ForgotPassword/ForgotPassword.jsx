import React from 'react'
import { ForgotContainer, ForgotWrapper, Form } from './ForgorPasswordStyles'
import { Formik } from 'formik'
import LoginInput from '../../components/UI/LoginInput/LoginInput'
import { registerInitialValues } from '../../formik/initialValues'
import { registerValidationSchema } from '../../formik/validationSchema'
import Submit from '../../components/UI/Sumit/Submit'

const ForgotPassword = () => {
  return (
    <ForgotWrapper>
    <ForgotContainer>
        <h1>Reestablece tu contraseña</h1>
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
        >
            <Form>
            <LoginInput type='text' name="email" placeholder='Mail de recuperación' />
            <Submit type='button' onClick={e => e.preventDefault()}>Enviar</Submit>
            </Form>  
              
        </Formik>    
    </ForgotContainer>
    </ForgotWrapper>
  )
}

export default ForgotPassword