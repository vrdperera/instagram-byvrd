import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserNameExsit(username) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return results.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));
  return user;
}

// export async function getUserByUserId(userId) {
//   const result = await firebase
//     .firestore()
//     .collection('users')
//     .where('userId', '==', userId)
//     .get();
//   const user = result.docs.map((item) => ({
//     ...item.data(),
//     docId: item.id,
//   }));

//   return user;
// }

export async function getSuggestedProfiles(userId) {
  const result = await firebase.firestore().collection('users').limit(10).get();
  console.log(result);
}
