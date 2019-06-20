import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../src/styles';
import firebase from 'firebase';

export default class Splash extends Component{

    constructor(){
        super();
        this.unsubscriber = null;
        this.state = {
            user : null,
        }
    }

    componentDidMount(){
        this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
            this.setState({user});
        })
        if(this.state.user){
            if (this.state.user.email === 'itachi1611@gmail.com'){
                setTimeout(() => {
                    this.props.navigation.navigate('ListPost');
                }, 1500)
            } else {
                setTimeout(() => {
                    this.props.navigation.navigate('User');
                }, 1500)
            }
        } else {
            setTimeout(() => {
                this.props.navigation.navigate('Login');
            },1500)
        }
    }

    componentWillMount(){
        if(this.unsubscriber){
            this.unsubscriber();
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }
}