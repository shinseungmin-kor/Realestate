import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    Image,
    Platform,
    Alert,
} from 'react-native';
import { SafeContainer } from '../../components/container/SafeContainer';
import RNFetchBlob from 'rn-fetch-blob';

const SalesHelperDetail = () => {

    // const REMOTE_IMAGE_PATH = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png'

    // const downloadTest = async () => {
    //     if (Platform.OS === 'ios') {
    //         downloadImage();
    //     } else {
    //         try {
    //             const granted = await PermissionsAndroid.request(
    //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                 {
    //                     title: 'Storage Permission Required',
    //                     message:
    //                         'App needs access to your storage to download Photos',
    //                 }
    //             );
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 console.log('Storage Permission Granted.');
    //                 downloadImage()
    //             } else {
    //                 Alert('Storage Permission Not Granted');
    //             }
    //         } catch (err) {
    //             // To handle permission related exception
    //             console.warn(err);
    //         }
    //     }
    // }

    // const downloadImage = () => {
    //     let date = new Date();
    //     let image_URL = REMOTE_IMAGE_PATH;    
    //     let ext = getExtention(image_URL);

    //     ext = '.' + ext[0];

    //     const { config, fs } = RNFetchBlob;
    //     let PictureDir = fs.dirs.PictureDir;
    //     let options = {
    //       fileCache: true,
    //       addAndroidDownloads: {
    //         // Related to the Android only
    //         useDownloadManager: true,
    //         notification: true,
    //         path:
    //           PictureDir +
    //           '/image_' + 
    //           Math.floor(date.getTime() + date.getSeconds() / 2) +
    //           ext,
    //         description: 'Image',
    //       },
    //     };
    //     config(options)
    //       .fetch('GET', image_URL)
    //       .then(res => {
    //         // Showing alert after successful downloading
    //         console.log('res -> ', JSON.stringify(res));
    //         alert('Image Downloaded Successfully.');
    //       });
    //   };

    // const getExtention = (filename) => {
    //     return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
    // };


    return (
        <SafeContainer>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 20 }}>
                    <Text>?????? 1. ????????? ????????????</Text>
                    <Text>???????????? ??? : 2022.03.16</Text>
                </View>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <View>
                        <Text>????????????</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>????????????</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeContainer>
    );
};

export default SalesHelperDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      width: '80%',
      padding: 10,
      backgroundColor: 'orange',
      margin: 10,
    },
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
    },
  });

