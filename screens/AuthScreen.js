import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TextInput, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import Card from '../components/commoms/Card'
import * as authAction from '../redux/actions/auth'

const LoginSchema = yup.object().shape({
    username: yup.string().required().min(6),
    password: yup.string().required().min(6)
})

const AuthScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState()

    useEffect(() => {
        if (isError) {
            Alert.alert('An Error occured!', isError, [{ text: 'Okay' }])
        }
    }, [isError])


    const dispatch = useDispatch()
    const loginHandler = async ({ username, password }) => {
        setIsError(null)
        setIsLoading(true)

        try {
            await dispatch(authAction.login(
                username,
                password
            ))
            props.navigation.navigate('Stocks')
        }
        catch (error) {

            setIsError(error.message)
            setIsLoading(false)
        }

    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.screen}>
            <Card style={styles.authContainer}>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={values => loginHandler(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={styles.authContainer}>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <Text style={styles.errorText}>{errors.username}</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <Text style={styles.errorText}>{errors.password}</Text>
                            <Button onPress={handleSubmit} title="Submit" style={styles.buttonContainer} />
                        </View>
                    )}
                </Formik>
            </Card>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 10
    },

    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 40
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10
    },
    errorText: {

        color: 'red',
        fontSize: 13
    }

})

export default AuthScreen