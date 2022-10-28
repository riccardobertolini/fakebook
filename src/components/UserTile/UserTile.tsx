import { useEffect, useState } from 'react';
import { User } from '../../models/User';
import { QuoteProps } from '../../models/Quotes';
import { SocialWallTile, UserInfo, ImagePosted, Quote, ImageContainer, SocialInteractions, LikeButton, CommentButton } from './UserTile.styles';
import { getQuotes } from '../../api/getQuote';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

type UserProps = {
	user: User;
	index: number;
};

export function UserTile({ user, index }: UserProps) {
	const [quote, updateQuote] = useState<QuoteProps>();
	const [liked, isLiked] = useState<boolean>(false);
	const [likesNumber, updateLikes] = useState<number>(0);

	useEffect(() => {
		const fetchQuote = async () => {
			await getQuotes().then(result => {
				updateQuote(result);
			});
		};

		fetchQuote();

		updateLikes(Math.floor(Math.random() * 100));
	}, []);

	const userLikedPost = () => {
		isLiked(!liked);
		updateLikes(liked ? likesNumber - 1 : likesNumber + 1);
	};

	return (
		<SocialWallTile>
			<UserInfo>
				<img src={user.picture.medium} alt="" />
				{user.name.first} {user.name.last}
			</UserInfo>
			<Quote>{(quote && quote[index]?.text) || ''}</Quote>
			<ImageContainer>
				<ImagePosted src={`https://picsum.photos/400/450?random=${index}`} />
			</ImageContainer>
			<SocialInteractions>
				<LikeButton onClick={() => userLikedPost()}>
					{liked ? <AiFillLike /> : <AiOutlineLike />}
					{likesNumber} Like(s)
				</LikeButton>
				<CommentButton to={`/${user.login.uuid}`}>Open Profile</CommentButton>
			</SocialInteractions>
		</SocialWallTile>
	);
}
