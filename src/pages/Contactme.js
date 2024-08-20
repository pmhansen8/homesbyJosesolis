import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import NavBar from '../Components/navbar'
// Assuming useSubmit hook handles form submission


export const ContactUs = () => {

    const useSubmit = ( ) =>{
        console.log("hello")
    }


    const [isLoading, response, submit ] = React.useState(null);



    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            comment: "",
            number: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            number: Yup.number().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            comment: Yup.string().required('Required')
        }),
        onSubmit: (values, { resetForm }) => {
            // Assuming submit function sends a POST request to backend service
            submit(values);
            resetForm();
        },
    });

    return (
        <div style={{ padding: '4rem 0'}}>
            <NavBar></NavBar>
            <div style={{maxWidth: '1024px', margin: '0 auto', padding: '2rem'}}>
                <h1 id="contactme-section" style={{textAlign: 'center'}}>Contact me</h1>
                <div style={{padding: '1.5rem', backgroundColor: '#fff', borderRadius: '0.375rem'}}>
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{marginBottom: '1rem'}}>
                            <label htmlFor="firstName" style={{display: 'block', fontWeight: 'bold'}}>Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem'
                                }}
                            />
                            {formik.errors.firstName && formik.touched.firstName && (
                                <div style={{color: 'red', fontSize: '0.875rem'}}>{formik.errors.firstName}</div>
                            )}
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            <label htmlFor="email" style={{display: 'block', fontWeight: 'bold'}}>Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem'
                                }}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div style={{color: 'red', fontSize: '0.875rem'}}>{formik.errors.email}</div>
                            )}
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            <label htmlFor="number" style={{display: 'block', fontWeight: 'bold'}}>Number</label>
                            <input
                                id="number"
                                name="number"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem'
                                }}
                            />
                            {formik.errors.number && formik.touched.number && (
                                <div style={{color: 'red', fontSize: '0.875rem'}}>{formik.errors.number}</div>
                            )}
                        </div>
                        <div style={{marginBottom: '1rem'}}>
                            <label htmlFor="comment" style={{display: 'block', fontWeight: 'bold'}}>Your message</label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows="10"
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '0.375rem'
                                }}
                            ></textarea>
                            {formik.errors.comment && formik.touched.comment && (
                                <div style={{color: 'red', fontSize: '0.875rem'}}>{formik.errors.comment}</div>
                            )}
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.375rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

