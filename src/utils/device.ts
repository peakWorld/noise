import {Platform} from 'react-native';
import DeviveInfo from 'react-native-device-info';

if (Platform.OS === 'android') {
  const anrId = DeviveInfo.getAndroidId();
  console.log('anrId', anrId);
}

const deviceInfo: Record<string, any> = {};
const brand = DeviveInfo.getDeviceId();
console.log('brand', brand);

deviceInfo.brand = brand;

export default deviceInfo;
