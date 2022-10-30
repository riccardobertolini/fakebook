import { InteractiveWrapper, InteractiveInput, InteractivePicture, SubmitButton } from './UserInteractiveTile.styles';
import { AiOutlineRight } from 'react-icons/ai';
import * as React from 'react';
import { useGlobalContext } from '../../globalContext';
import xss from 'xss';

export const UserInteractiveTile = () => {
	const { userPosts, updateUserPosts } = useGlobalContext();
	const [content, updateContent] = React.useState<string>('');

	const submitContent = (event: string) => {
		if (event === 'Enter' || event === 'button') {
			content.length > 0 && updateUserPosts([xss(content), ...userPosts]);
			updateContent('');
		}
	};

	return (
		<InteractiveWrapper>
			<InteractivePicture>
				<img src="/generic-user.png" alt="" />
			</InteractivePicture>
			<InteractiveInput
				type="text"
				placeholder={"What's in your Mind, John?"}
				alt="input_interaction"
				value={content}
				onChange={event => updateContent(event.target.value)}
				onKeyDown={event => submitContent(event.key)}
			/>
			<SubmitButton onClick={() => submitContent('button')}>
				<AiOutlineRight />
			</SubmitButton>
		</InteractiveWrapper>
	);
};
