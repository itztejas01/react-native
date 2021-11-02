import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


class AsyncStore  {
    async storeData(key,value){
        try{
            console.log("Storing");
            await AsyncStorage.setItem(key,value);
        }catch (e){
            console.log('Something went wrong in storing',e)
            return false;
        }
    }

    async getData(key){
        try{
            console.log('Getting the data');
            return await AsyncStorage.getItem(key);
        }
        catch (e){
            console.log('Something went wrong in getting the data',e)
            return false;
        }
    }
}

export default AsyncStore
