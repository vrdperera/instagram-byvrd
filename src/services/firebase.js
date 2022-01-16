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

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isUserFollowing
) {
  await firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isUserFollowing
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}
export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isUserFollowing
) {
  await firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isUserFollowing
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });
}
