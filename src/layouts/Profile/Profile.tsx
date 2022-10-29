import { Link, useParams, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext';
import { ProfilePic, ProfileWrapper, ProfileNavBar, ProfileHeader, ProfileName, ProfileDetails, ProfileAddress } from './Profile.styles';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Profile = () => {
	const { userSlug } = useParams();
	const { users } = useGlobalContext();
	const user = users.filter(user => user.login.uuid === userSlug)[0] || null;

	if (!user) return <Navigate to="/" />;

	return (
		<>
			<ProfileWrapper>
				<ProfileHeader>
					<ProfilePic src={user.picture.large} alt="" />
					<ProfileName>
						{user.name.title} {user.name.first} {user.name.last}
					</ProfileName>
					<ProfileAddress>
						<AiOutlineHome />
						<span> </span>
						{user.location.street.name} {user.location.street.number}, {user.location.city} ({user.location.country})
					</ProfileAddress>
					<ProfileDetails>
						{' '}
						<AiOutlineMail /> <Link to={`mailto:${user.email}`}>{user.email}</Link>
					</ProfileDetails>
					<ProfileDetails>
						<AiOutlinePhone /> {user.phone}
					</ProfileDetails>
				</ProfileHeader>
				<br />
				<ProfileNavBar>
					<Link to={'/'}>Back to Home</Link>
				</ProfileNavBar>
			</ProfileWrapper>
		</>
	);
};

export default Profile;
