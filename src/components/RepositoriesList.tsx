import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
const RepositoriesList: React.FC = () => {
	const [word, setWord] = useState('');
	const { searchRepositories } = useActions();
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(word);
	};

	const { data, loading, error } = useTypedSelector((state) => state.repositories);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='text' value={word} onChange={(e) => setWord(e.target.value)} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
		</div>
	);
};

export default RepositoriesList;
