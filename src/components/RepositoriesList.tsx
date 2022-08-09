import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
	const [word, setWord] = useState('');
	const { searchRepositories } = useActions();
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(word);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='text' value={word} onChange={(e) => setWord(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};

export default RepositoriesList;
