import {shallowMount} from '@vue/test-utils';
import {setupLocalVue, mockStore} from 'test-helpers';
import 'vue-unit-test.js';
import {stubMerger} from 'test-stubs';

import ${NAME}Store from './${NAME}Store';
import ${NAME} from '${NAME}/${NAME}.vue';
import {Store} from 'vuex';

const localVue = setupLocalVue();

let storeData;

/**
 * Creates a mount wrapper of the component for easier multiple tests.
 *
 * @param state
 * @returns {Wrapper<Vue>}
 */
const factory = (state = {}) => {
	Object.assign(storeData.modules.${NAME}.state, state);
	storeData.modules.Errors.getters.errors.mockReturnValue([]);

	return shallowMount(${NAME}, {
		localVue,
		store: new Store(storeData),
		attachToDocument: true,
		sync: false,
		stubs: stubMerger()
	});
};

describe('${NAME}', () => {
	let wrapper;

	beforeEach(() => {
		storeData = mockStore(${NAME}Store);
		wrapper = factory();
	});

	it('', () => {
	
	});
});