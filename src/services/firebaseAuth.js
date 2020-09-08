import firebase from 'firebase';

class FirebaseAuth {
	checkedIfLoggedIn = () => {
		firebase.auth().onAuthStateChanged((user) => user);
	};
}

export default new FirebaseAuth();
