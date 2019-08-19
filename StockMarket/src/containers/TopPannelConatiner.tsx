import React, { Component } from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RouteNames} from '../navigation/routes';
import axios from 'axios';

interface IState {
    dataSource: object;
    price: object[];
    stockEndPrice: string[] ;
}

interface IProps {
    navigation: {
        navigate: (route: string) => void;
    };
}

class TopPannelConatiner extends Component<IProps, IState> {
    public state = {
        dataSource: {},
        price: [],
        stockEndPrice: [],
    };

    public componentDidMount() {
        axios.get('https://api.airtable.com/v0/appaf01a2JbZoZNee/stock%20market?api_key=keyiMCbcYlCf5VXsP')
            .then((res) => {
                this.setState({
                    price: res.data.records,
                });

            });

        const items = Array.apply(null, Array(30)).map((v, i) => {
            return (i + 1);
        });
        this.setState({
            dataSource: items,
        });
    }

    public handlePress = () => {
        this.props.navigation.navigate(RouteNames.stock);
    }

    public render() {
       const ele =  this.state.price.map(stockPrice => {
          return stockPrice.fields.Close;
        });

       return (
            <View style={styles.container}>
            <FlatList
                data={this.state.dataSource}
                renderItem={this.renderListItem}
                ListHeaderComponent={this.renderHeader}
                numColumns={3}
                keyExtractor={this.keyExtractor}
                extraData={this.state.price}
            />
            </View>
        );
    }

    private renderListItem = ({item}: {item: any, ele: any}): React.ReactElement => {
        // console.log(this.state.stockEndPrice, 'dj')
        return (
            <TouchableOpacity style={styles.dateContainer} onPress={this.handlePress}>
                <View style={styles.box}>
                    <Text style={styles.itemStyle}>
                        {item}
                    </Text>
                    <Text>
                        {this.state.price.map(stockPrice => {
                            return stockPrice.fields.Close;
                        })}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    private renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.textStyle}>
                    JUNE 2019
                </Text>
            </View>
        );
    }

    private keyExtractor = (item: any, index: number) => index.toString();
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },
    textStyle: {
        fontFamily: 'Georgia-Bold',
        fontSize: 25,
        letterSpacing: 0.13,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d2d4d2',
        height: 70,
        margin: 1,
    },
    itemStyle: {
        fontSize: 20,
    },
});

export default TopPannelConatiner;
