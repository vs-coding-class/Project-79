import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            allRequests: [],
        };

        this.requestRef = null;
    }

    componentDidMount() {
        this.requestRef = db.collection("requests")
            .onSnapshot((snapshot) => {
                var allRequests = [];

                snapshot.forEach((doc) => {
                    allRequests.push(doc.data());

                    this.setState({
                        allRequests: allRequests,
                    });
                });
            });
    }

    componentWillUnmount(){
        this.requestRef();
    }

    renderItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.item}
                subtitle={item.reason}
                titleStyle={{ color: 'black', fontWeight: 'bold', }}
                rightElement={
                    <TouchableOpacity style={styles.flatList}>
                        <Text>Exchange</Text>
                    </TouchableOpacity>
                }
            />
        );
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()} />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        alignSelf: 'right',
        height: 10,
        width: '5%',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#827838',
    }
});