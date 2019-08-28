import React from 'react';
import axios from 'axios';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

interface IState {
    stockDate: string[];
    stockPrice: string[];
}

class BottomPannelContainer extends React.Component <any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            stockDate: [],
            stockPrice: []
        }
    }
    componentDidMount(){
        axios.get('https://api.airtable.com/v0/appaf01a2JbZoZNee/stock%20market?api_key=keyiMCbcYlCf5VXsP')
            .then((res) => {
                this.setState({
                    stockDate: res.data.records.map((input: any) => {
                        return input.fields.Date;
                    }),
                    stockPrice: res.data.records.map((input: any) => {
                        return input.fields.Close;
                    })
                });

            });
    }

    render () {
        const data = {
            labels: this.state.stockDate,
            datasets: [{
                data: this.state.stockPrice,
            }]
        }

        const screenWidth = Dimensions.get('window').width;
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2 // optional, default 3
        }

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Stock Price Graph</Text>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={300}
                    yAxisLabel={'$'}
                    chartConfig={chartConfig}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%'
    },
    heading: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: '5%',
    }
})

export default BottomPannelContainer;
