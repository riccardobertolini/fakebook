import { Link, useParams, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../../globalContext';
import { ProfilePic, ProfileWrapper, ProfileNavBar, ProfileHeader, ProfileName, ProfileDetails, ProfileAddress, BackgroundImage, ClosingButton } from './Profile.styles';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineGift, AiOutlineClose } from 'react-icons/ai';
import { format } from 'date-fns';

const Profile = () => {
	const { userSlug } = useParams();
	const { users } = useGlobalContext();
	const user = users.filter(user => user.login.uuid === userSlug)[0] || null;

	if (!user) return <Navigate to="/" />;

	const randomNumber = Math.floor(Math.random() * 100);

	return (
		<>
			<ProfileWrapper>
				<ProfileHeader>
					<ClosingButton to={'/'}>
						<AiOutlineClose />
					</ClosingButton>
					<BackgroundImage src={`https://picsum.photos/500/250?random=${randomNumber}&blur=2`} />
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
					<ProfileDetails>
						<AiOutlineGift /> {format(new Date(user.dob.date), 'dd/MM/yyyy')}
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
