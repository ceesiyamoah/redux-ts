interface RepositoriesState {
	data: string[];
	loading: boolean;
	error: string | null;
}

type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

interface SearchRepositoriesAction {
	type: 'search_repositories';
	payload: string;
}
interface SearchRepositoriesSuccessAction {
	type: 'search_repositories_success';
	payload: string[];
}
interface SearchRepositoriesErrorAction {
	type: 'search_repositories_error';
	payload: string;
}

enum ActionType {
	SEARCH_REPOSITORIES = 'search_repositories',
	SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
	SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
}

const reducer = (state: RepositoriesState, { type, payload }: Action): RepositoriesState => {
	switch (type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case 'search_repositories_success':
			return { loading: false, error: null, data: payload };
		case 'search_repositories_error':
			return { loading: false, error: payload, data: [] };

		default:
			return state;
	}
};

export default reducer;
