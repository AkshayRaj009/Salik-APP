import { StyleSheet } from "react-native"
import { colors } from "./colors"
import { HEIGHT, WIDTH } from "./Dimensions"

const commonStyle = StyleSheet.create({
    flexDirection: (lang) => {
        return { flexDirection: `rows${lang == "en" ? "" : "-reverse"}` }
    },
    textAlign: (lang) => {
        return { textAlign: `${lang == "en" ? "left" : "right"}` }
    },
    alignSelf: (lang) => {
        return { alignSelf: `flex-${lang == "en" ? "start" : "end"}` }
    },
    alignItems: () => {
        return { alignItems: `flex-${lang == "en" ? "start" : "end"}` }
    }


})
export { commonStyle }