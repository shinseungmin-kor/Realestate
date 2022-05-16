import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import sms from 'react-native-sms-linking'

const supportedURL = "http://www.ksilbo.co.kr/news/articleView.html?idxno=930736";
const supportedURL2 = "https://www.itbiznews.com/news/articleView.html?idxno=68346";
const supportedURL3 = "http://www.apnews.kr/news/articleView.html?idxno=3001239";


const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};

const News = () => {
    return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>여의도 주거형 오피스텔 '그랑리세' ...</OpenURLButton>
      <OpenURLButton url={supportedURL2}>여의도 오피스텔 '그랑리세' 선착순 공급 진행중 ...</OpenURLButton>
      <OpenURLButton url={supportedURL3}>여의도 주거형 오피스텔 '그랑리세' 공급 진행</OpenURLButton>
    </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default News;
