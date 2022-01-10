import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserNameExsit(username) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return results.docs.map((user) => user.data().length > 0);
}

export async function getUserById(userId) {
  const results = await firebase
    .firestore()
    .collection('users')
    .where('userId ' === userId)
    .get();

  const user = results
    .docs()
    .map((user) => ({ ...user.data(), docId: user.id }));
  return user;
}
