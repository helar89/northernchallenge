import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Register extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <Formik
                initialValues={{ email: '' }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                })}
                onSubmit={(fields,{setSubmitting}) => {
                    let signUpBtn = document.getElementById('btn-sign-up');
                    signUpBtn.innerHTML = 'Submiting...';
                    setTimeout(() => {
                        history.push('/home');
                        console.log("Logging in", fields);
                        
                        setSubmitting(false);
                    }, 2000);
                    
                   
                    
                   
                }}
                render={({ errors, status, touched }) => (


                    <div>

                        <p id="main-text">Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northen.</p>
                        <Form>

                            <div className="inputs">
                                
                                    <div className="left-col">
                                     
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} id="input-email" placeholder="Your Email Address *"/>
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="right-col">
                                        <Field name="interest" as="select" defaultValue="Your Interests">
                                            <option>Your Interests</option>
                                            <option>Web Developer</option>
                                            <option>Digital Marketing</option>
                                            <option>UX UI</option>
                                        </Field>

                                    </div>
                                

                            </div>

                            <div className="form-group">
                                <button id="btn-sign-up" type="submit" className="">Sign Up Now <i className="material-icons">arrow_right</i></button>

                            </div>
                        </Form>
                    </div>

                )}
            />
        )
    }
}
