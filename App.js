export const SuperStoreServerConfig = '@monitorService:serverConfig';

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View, 
	AsyncStorage
} from 'react-native';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { value: 0 };
	}

	componentDidMount(){
		this.interval = setInterval(async () => { 
			await AsyncStorage.getItem(SuperStoreServerConfig)
			.then(success => JSON.parse(success))
			.then((storedItem) => {

				if (storedItem) {
					this.setState({ value: storedItem });
					return true;
				}

				return false;
			})
			.catch(err => {console.log(`error ${err}`)});
		}, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const msg = `The current value is: ${this.state.value}`;
		
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Value readed from local storage x!
				</Text>
				<Text style={styles.instructions}>
					{msg}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default App;