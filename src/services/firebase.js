import { firebase, FieldValue } from '../lib/firebase';

export async function doesUserNameExsit(username) {
  console.log(username);
  const results = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  console.log(results);

  return results.docs.map((user) => user.data().length > 0);
}
