import uuid from 'react-native-uuid';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export function getUserId() {
  let userId;
  const hasUserId = storage.contains('userId');
  if (hasUserId) {
    userId = storage.getString('userId');
  } else {
    userId = uuid.v4();
    storage.set('userId', userId as string);
  }
  return userId;
}
