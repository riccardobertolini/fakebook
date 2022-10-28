import { ImageContainer, UserInfo, LikeButton, QuoteLoading, SocialInteractions, SocialWallTile, EmptyProfileImage } from './UserTileLoading.styles';

type LoadingProps = {
	times: number;
};

export const UserTileLoading = ({ times }: LoadingProps) => {
	return (
		<>
			{[...Array(times)].map(() => (
				<SocialWallTile>
					<UserInfo>
						<EmptyProfileImage />
						<span></span> <span></span>
						<span></span>
					</UserInfo>
					<QuoteLoading></QuoteLoading>
					<ImageContainer></ImageContainer>
					<SocialInteractions>
						<LikeButton></LikeButton>
						<LikeButton></LikeButton>
					</SocialInteractions>
				</SocialWallTile>
			))}
		</>
	);
};
