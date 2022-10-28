import axios from 'axios';
import { QuoteProps } from '../models/Quotes';

export const getQuotes = async () => {
	const { data } = await axios.get<QuoteProps>(`https://type.fit/api/quotes`, {
		headers: {
			Accept: 'application/json',
		},
	});
	return data;
};
