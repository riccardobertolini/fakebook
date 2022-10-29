import { UserInfo, QuoteLoading, SocialWallTile, EmptyProfileImage, ImageContainerLoading } from './UserTileLoading.styles';
import { SocialInteractions, LikeButton } from './UserTile.styles';
type LoadingProps = {
	times: number;
};

export const UserTileLoading = ({ times }: LoadingProps) => {
	return (
		<>
			{[...Array(times)].map(() => (
				<SocialWallTile key={`rendered_${times}`}>
					<UserInfo>
						<EmptyProfileImage />
						<span></span> <span></span>
						<span></span>
					</UserInfo>
					<QuoteLoading></QuoteLoading>
					<ImageContainerLoading></ImageContainerLoading>
					<SocialInteractions>
						<LikeButton></LikeButton>
						<LikeButton></LikeButton>
					</SocialInteractions>
				</SocialWallTile>
			))}
		</>
	);
};
