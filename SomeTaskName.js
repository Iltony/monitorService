import { AsyncStorage } from 'react-native';

export const SuperStoreServerConfig = '@monitorService:serverConfig';

const internalWritting = null;

export default async (taskData) => {
    // do stuff
    console.log("received task data", taskData);
    // console.log("configured timeout", taskData.defaultTimeout);
    // console.log("configured timeout", time);

    setInterval(async () => {
        await AsyncStorage.getItem(SuperStoreServerConfig)
        .then(success => JSON.parse(success))
        .then((storedItem) => {
            if (storedItem) {
                console.log('next data', JSON.stringify(storedItem + 1));
                
                AsyncStorage.setItem(SuperStoreServerConfig, JSON.stringify(storedItem + 1))
                .catch(err => {console.log(`error setting local storage ${err}`)});
                return true;
            } else {

                console.log('first data');
                AsyncStorage.setItem(SuperStoreServerConfig, JSON.stringify(1))
                .catch(err => {console.log(`error setting local storage ${err}`)});
                return true;
            }
            return false;
        })
        .catch(err => {console.log(`error ${err}`)});
    }, taskData.defaultTimeout);
    //}, 1000);
};