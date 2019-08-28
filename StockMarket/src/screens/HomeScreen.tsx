import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../navigation/routes';
import TopPannelConatiner from '../containers/TopPannelConatiner';
import BottomPannelContainer from '../containers/BottomPannelContainer';

interface IProps {
    navigation: any;
}

export default class HomeScreen extends Component<IProps, any> {

    protected static navigationOptions = {
        header: null,
    };

    public handlePress = () => {
        this.props.navigation.navigate(RouteNames.stock);
    }

    public render() {
        return (
            <ScrollView>
                <TopPannelConatiner navigation={this.props.navigation}/>
                <BottomPannelContainer />
            </ScrollView>
        );
    }
};
