import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import { history } from '../../../../utils'
import validateUserForm from './UserFormValidation'
import { fetchEditUserFormData, resetUser, submitUserFormData } from '../../store'
import { Button, EmailField, PasswordField, Submit, TextField } from '../../../../components'

export const UserForm = () => {
    const { id } = useParams()
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})
    const [applyCheck] = useState(id ? false : true)

    /**fetched data from redux store */
    const userData = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    /**hook equivalent to componentdidmount lifecycle */
    useEffect(() => {
        if(id) 
            dispatch(fetchEditUserFormData(id)) // action is called to fetch record

        // returned function will be called on component unmount
        return () => {
            dispatch(resetUser())
        }
    }, [])

    /**section to be executed when we open the form in edit mode */
    if (typeof userData != 'undefined' && _.size(userData) > 0)
        if (_.size(userData) !== _.size(fields)) 
            setFields({ ...userData })
    /**end of section to be executed when we open the form in edit mode */

    /* validate form */
    const _validateForm = () => {
        let formFields = fields
        let response = validateUserForm(formFields, applyCheck)

        setErrors(response.errors)
        return response.formIsValid
    }

    /* handle input field changes */
    const _handleChange = (event) => {
        const { name, value } = event.target
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    /* submit form */
    const _handleSubmit = (event) => {
        event.preventDefault()

        if (_validateForm()) {
            const { first_name, last_name, email, password, username } = event.target
            const postData = {
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                username: username.value,
            }

            if (id) {
                dispatch(submitUserFormData({id, postData})) //action is called to submit data
            } else {
                postData.password = password.value
                dispatch(submitUserFormData({id : '', postData})) // action is called to submit data
            }
        }
    }

    /**method called when form is cancelled */
    const _handleCancelForm = () => history.push('/user')

    return (
        <Fragment>
            <h1 className="display-4 d-none d-sm-block">User Details</h1>

            <form onSubmit={(event) => _handleSubmit(event)} className="user-form">
                <div className="row clearfix mb-3">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row clearfix">
                            <div className="col-md-6 mb-3">
                                <b className="required">First Name</b>
                                <div className="form-group">
                                    <TextField
                                        name="first_name"
                                        value={fields.first_name || ''}
                                        onChange={(event) => _handleChange(event)}
                                        minLength="5"
                                    />
                                    <div className="errorMsg">{errors.first_name}</div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <b className="required">Last Name</b>
                                <div className="form-group">
                                    <TextField
                                        name="last_name"
                                        value={fields.last_name || ''}
                                        onChange={(event) => _handleChange(event)}
                                        minLength="5"
                                    />
                                    <div className="errorMsg">{errors.last_name}</div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <b className="required">Username</b>
                                <div className="form-group">
                                    <TextField
                                        name="username"
                                        value={fields.username || ''}
                                        onChange={(event) => _handleChange(event)}
                                        minLength="3"
                                    />
                                    <div className="errorMsg">{errors.username}</div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <b className="required">Email</b>
                                <div className="form-group">
                                    <EmailField
                                        name="email"
                                        onChange={(event) => _handleChange(event)}
                                        value={fields.email || ''}
                                        required={true}
                                    />
                                    <div className="errorMsg">{errors.email}</div>
                                </div>
                            </div>

                            {!id ? (
                                <>
                                    <div className="col-md-6">
                                        <b className="required">Password</b>
                                        <div className="form-group">
                                            <PasswordField
                                                name="password"
                                                value={fields.password || ''}
                                                onChange={(event) => _handleChange(event)}
                                                minLength="6"
                                                required={true}
                                            />
                                            <div className="errorMsg">{errors.password}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <b className="required">Confirm Password</b>
                                        <div className="form-group">
                                            <PasswordField
                                                name="confirm_password"
                                                value={fields.confirm_password || ''}
                                                onChange={(event) => _handleChange(event)}
                                                minLength="6"
                                                required={true}
                                            />
                                            <div className="errorMsg">{errors.confirm_password}</div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>

                <Submit className="btn btn-success" text="Submit" />
                <Button className="btn btn-danger ms-2" onClick={_handleCancelForm} text="Cancel" />
            </form>
        </Fragment>
    )
}

UserForm.propTypes = {
    match: PropTypes.objectOf(PropTypes.any),
}