import {shallowMount} from '@vue/test-utils';
import {setupEnvironmentVars#if (${Store} != ""), mockStore#end} from 'modules/test/test-helpers.js';

// TODO: Verify this is the correct import path for your component.
import ${NAME} from '${NAME}/${NAME}.vue';
#if (${Store} != "")
import {Store} from 'vuex';
// TODO: Verify this is the correct import path for your store.
import ${Store}Store from '${Store}/${Store}Store.js';
#end

const environmentVars = setupEnvironmentVars();
#if (${Store} != "")

let storeData;
#end

/**
 * Creates a mounted wrapper of the component for easier multiple tests.
 *
 * @param {Object} [options] - See https://vue-test-utils.vuejs.org/api/options.html for valid options.
#if (${Store} != "")
 * @param {Object} [storeOptions] - See test-helpers::mockStore for valid options.
#end
 *
 * @returns {Wrapper<Vue>}
 */
const factory = (options = {}#if (${Store} != ""), storeOptions = {}#end) => {
#if (${Store} != "")
	storeData = mockStore(${Store}Store, storeOptions);

#end
	return shallowMount(${NAME}, {
		...options,
		...environmentVars,
#if (${Store} != "")
		store: new Store(storeData),
#end
		sync: false
	});
};

describe('${NAME}', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = factory();
	});

	describe('Props', () => {
		describe('', () => {
			it('', () => {
				
			});
		});
	});

	describe('Slots', () => {
		describe('', () => {
			it('', () => {
				
			});
		});
	});

	describe('Events', () => {
		describe('', () => {
			it('', () => {
				
			});
		});
	});
});