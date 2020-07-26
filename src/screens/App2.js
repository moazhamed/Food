
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'hello world',
        }
    }


    componentDidMount() {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({ message: data.message })); // data.message = 'updated message'
    }

    render() {
        return (
            <View>
                {/* 'updated message' will be rendered as soon as fetch return data */}
                <Text>{this.state.message}</Text>
            </View>
        )
    }
}

export default App;