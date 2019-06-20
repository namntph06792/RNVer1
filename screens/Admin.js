import React, { Component } from 'react';
import { TouchableOpacity, Image, View, FlatList, Text, ActivityIndicator } from 'react-native';
import styles from '../src/styles';
import { firebaseApp } from '../config/FirebaseConfig';
import PostItem from '../components/PostItem';

export default class Admin extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        }

        thisState = this;
    }

    componentDidMount(){
        this.readPostData();
    }

    readPostData() {
        firebaseApp.database().ref('posts/').on('value', function (snapshot) {
            let array = [];
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                array.push({
                    id: childSnapshot.key,
                    title: childData.title,
                    content: childData.content,
                    like: childData.like,
                    comment: childData.comment
                });
            });
            thisState.setState({
                isLoading: false,
                data: array
            })
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.listpost_container}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.listpost_container}>
                <View style={styles.listpost_btnGroup}>
                    <TouchableOpacity style={styles.listpost_btn}>
                        <Text>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listpost_btn}>
                        <Text>Follows</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList
                    style={{flex:1}}
                    data={this.state.data}
                    renderItem={({item}) => <PostItem dat={item}/>}
                    keyExtractor={(item,index) => item.id}
                />
            </View>
        );
    }
}
