import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Picker } from 'react-native'
import { Icon, Button, Image, Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { COUNTRIES } from '../shared/country'
import { CITIES } from '../shared/city'
import { useForm } from 'react-hook-form'
import Footer from './footer'

function AccountPage(props) {
    const [countries, setCountries] = useState(COUNTRIES)
    const [cities, setCities] = useState(CITIES)
    // const [date, setDate] = useState('')
    // const [title, setTitle] = useState('')
    // const [firstname, setFirstname] = useState('')
    // const [lastname, setLastname] = useState('')
    const [country, setCountry] = useState('')
    // const [city, setCity] = useState('')
    // const [email, setEmail] = useState('')
    // const [code, setCode] = useState('')
    // const [phone, setPhone] = useState('')
    // const [gender, setGender] = useState('')
    const onSubmit = data => {
        console.log(data)
    }
    const {register, handleSubmit, setValue} = useForm()

    useEffect(() => {
        register('title')
        register('firstname')
        register('lastname')
        register('country')
        register('city')
        register('email')
        register('code')
        register('phone')
        register('gender')
        register('date')
    }, [register])
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         countries: COUNTRIES,
    //         cities: CITIES,
    //         date: '',
    //         title: 'Title',
    //         firstname: 'First Name',
    //         lastname: 'Last Name',
    //         country: 'Country',
    //         city: 'City',
    //         email: 'Email Address',
    //         code: '',
    //         phone: '',
    //         gender: 'Gender'
    //     }
    // }
    

    function addCountry() {
        return (
            countries.map((item, index) => {
                return <Picker.Item key={index} value={item.id} label={item.name} />
            })
        )
    }
    function addCity() {
        return (
            cities.filter((item) => item.country_id === country).map((item, index) => {
                return <Picker.Item key={index} value={item.id} label={item.name} />
            })
        )
    }
    
    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/tibLogoPng.png')}
                        style={styles.image} />
                    <View style={{ margin: 20 }}>
                        <Button title='Sign In' type='clear' titleStyle={{ color: 'black', fontWeight: "bold" }} />
                    </View>
                </View>
                <Text style={{ fontSize: 24, margin: 10, fontWeight: "bold" }}>Account Information</Text>
                <View>
                    <View style={styles.formInput, { borderBottomColor: '#86939e', margin: 10, borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <Picker prompt='Title' style={styles.formInput, { borderStyle: "none", margin: 5 }}
                            onValueChange={(itemValue) =>  setValue('title', itemValue)} >
                            <Picker.Item value='0' label='Title' />
                            <Picker.Item value='Dr.' label='Dr.' />
                            <Picker.Item value='Mr.' label='Mr.' />
                            <Picker.Item value='Mrs.' label='Mrs.' />
                            <Picker.Item value='Ms.' label='Ms.' />
                            <Picker.Item value='Prof.' label='Prof.' />
                        </Picker>
                    </View>
                    <Input placeholder='First Name' labelStyle={{ color: 'black' }} placeholderTextColor='black'
                        containerStyle={styles.formInput} inputStyle={{ paddingHorizontal: 10 }}
                        onChangeText={(firstname) => setValue('firstname', firstname)} />
                    <Input placeholder='Last Name' labelStyle={{ color: 'black' }} placeholderTextColor='black'
                        containerStyle={styles.formInput} inputStyle={{ paddingHorizontal: 10 }}
                        onChangeText={(lastname) => setValue('lastname', lastname)} />
                    <View style={styles.formInput, { borderBottomColor: '#86939e', margin: 10, borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <Picker prompt='Country' style={styles.formInput, { borderStyle: "none", margin: 5 }}
                            onValueChange={(itemValue) => {setValue('country', itemValue); setCountry(itemValue)}} >
                            <Picker.Item key='0' value='0' label='Add a Country' />
                            {addCountry()}
                        </Picker>
                    </View>
                    <View style={styles.formInput, { borderBottomColor: '#86939e', margin: 10, borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <Picker prompt='City' style={styles.formInput, { borderStyle: "none", margin: 5 }} 
                        onValueChange={(itemValue) => setValue('city', itemValue)} >
                            <Picker.Item key='0' value='0' label='Add a City' />
                            {addCity}
                        </Picker>
                    </View>
                    <Input placeholder='Email' labelStyle={{ color: 'black' }} placeholderTextColor='black'
                        containerStyle={styles.formInput} inputStyle={{ paddingHorizontal: 10 }}
                        onChangeText={(email) => setValue('email', email)} />
                    <View style={styles.phoneContainer}>
                        <Icon name='plus' size={22} type='font-awesome' style={{ marginTop: 10, marginLeft: 5 }} />
                        <Input placeholder='' 
                            inputContainerStyle={{ borderColor: '#86939e', borderStyle: 'solid', borderWidth: 1 }}
                            containerStyle={styles.formInput, { width: '30%' }}
                            onChangeText={(code) => setValue('code', code)} />
                        <Input placeholder='' inputContainerStyle={{ borderColor: '#86939e', borderStyle: 'solid', borderWidth: 1 }}
                            containerStyle={styles.formInput, { width: '65%' }}
                            onChangeText={(phone) => setValue('phone', phone)} />
                    </View>
                    <View style={styles.formInput, { margin: 10 }}>
                        <DatePicker
                            style={{ width: '100%', margin: 5 }}
                            // date={date}
                            mode="dialog"
                            placeholder="Date of Birth"
                            format=""
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => { setValue('date', date) }} />
                    </View>
                    <View style={styles.formInput, { borderBottomColor: '#86939e', margin: 10, borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <Picker prompt='Gender' style={styles.formInput, { borderStyle: "none", margin: 5 }} 
                        onValueChange={(itemValue) => setValue('gender', gender)} >
                            <Picker.Item label="Gender" value="0" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Do not wish to tell" value="no" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.imageContainer} >
                    <Icon name='arrow-left' type='font-awesome' onPress={() => props.navigation.navigate('Home')} />
                    <Icon name='arrow-right' type='font-awesome' onPress={() => { navigation.navigate('Home')}, handleSubmit(onSubmit)} />
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 5
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    image: {
        margin: 10,
        width: 80,
        height: 60
    },
    formInput: {
        width: '100%',
    },
    formCheckbox: {
        margin: 40,
        backgroundColor: null
    },
    formButton: {
        margin: 60
    },
    phoneContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    }
})

export default AccountPage