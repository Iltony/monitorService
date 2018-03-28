import { AsyncStorage } from 'react-native';
export const SuperStoreServerConfig = '@monitorService:serverConfig';

const internalWritting = null;


export default async (taskData) => {
		// do stuff
		console.log("TASK REGISTER DATA", taskData);

		this.intervalWritting = setInterval(async () => { 
			await AsyncStorage.getItem(SuperStoreServerConfig)
			.then(success => JSON.parse(success))
			.then((storedItem) => {
				if (storedItem) {
					AsyncStorage.setItem(SuperStoreServerConfig, JSON.stringify(storedItem + 1))
					.catch(err => {console.log(`error setting local storage ${err}`)});
					return true;
				} else {
					AsyncStorage.setItem(SuperStoreServerConfig, JSON.stringify(1))
					.catch(err => {console.log(`error setting local storage ${err}`)});
					return true;
				}
				return false;
			})
			.catch(err => {console.log(`error ${err}`)});
		}, 1000);
};