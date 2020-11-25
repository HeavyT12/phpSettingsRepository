import {Store} from 'vuex';
// TODO: Verify this is the correct import path for your store.
import ${NAME}Store from 'store/${NAME}/${NAME}.js';
import {setupLocalVue} from 'modules/test/test-helpers.js';

// TODO: Add specific api file(s).
import {
	FUNCTION_NAME
} from 'api/API_FILE.js';

setupLocalVue();

let addErrorMessageFromApi;
let addErrorAlertFromApi;

/**
 * Create an instance of the tested store.
 *
 * @param {Object} [options] - Options to override store criteria.
 *
 * @returns {Store<any>}
 */
function storeFactory(options = {}) {
	let {
		state = {},
		getters = {},
		mutations = {},
		actions = {}
	} = options;

	addErrorMessageFromApi = jest.fn();
	addErrorAlertFromApi = jest.fn();

	return new Store({
		state: {
			...${NAME}Store.state(),
			...state
		},
		getters: {
			...${NAME}Store.getters,
			...getters
		},
		mutations: {
			...${NAME}Store.mutations,
			...mutations
		},
		actions: {
			addErrorMessageFromApi,
			addErrorAlertFromApi,
			...${NAME}Store.actions,
			...actions
		}
	});
}

describe('${NAME} Store', () => {
	describe('Getters', () => {
		describe('', () => {
			it('', () => {
				
			});
		});
	});

	describe('Mutations', () => {
		describe('', () => {
			it('', () => {
				
			});
		});
	});

	describe('Actions', () => {
		describe('', () => {
			let promiseResolve,
				promiseReject;

			beforeEach(() => {
				FUNCTION_NAME.mockReset();

				FUNCTION_NAME.mockReturnValueOnce(new Promise((resolve, reject) => {
					promiseResolve = resolve;
					promiseReject = reject;
				}));
			});

			describe('On success', () => {
				it('', async () => {
					let store = storeFactory(),
						promise = store.dispatch('STORE_ACTION', {});

					promiseResolve({
						data: updatedData
					});

					await promise;

					expect(FUNCTION_NAME).toHaveBeenCalledTimes(1);
				});
			});

			describe('On failure', () => {
				it('adds errors', async () => {
					let store = storeFactory(),
						error = Error(),
						promise = store.dispatch('STORE_ACTION', {});

					promiseReject(error);

					await promise;

					expect(FUNCTION_NAME).toHaveBeenCalledTimes(1);
					expect(addErrorMessageFromApi).toHaveBeenCalledTimes(1);

					expect(addErrorMessageFromApi).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
						error
					}));
				});
			});
		});
	});
});
