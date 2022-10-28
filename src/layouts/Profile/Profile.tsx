import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext';

const Profile = () => {
	const { userSlug } = useParams();
	const { users } = useGlobalContext();
	console.log(users.filter(user => user.login.uuid === userSlug));
	console.log('userSlug', userSlug);
	console.log('users', users);
	return <div> </div>;
};

export default Profile;
