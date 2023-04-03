import AsyncStorage from "@react-native-async-storage/async-storage"
import { HOMEDATA } from "../../constants/constants"
import { api } from "../../http/api"

export const HomeData = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('token')
        await fetch(`${api}categories`, { method: "GET", headers: { authorization: value } }).then((response) => response.json()).then((data) => {
            console.log('Request succeeded with JSON response', data)
            console.log("response==", data)
            dispatch(
                {
                    type: HOMEDATA,
                   payload: data
                }
            )
        }
        )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}
