import { mockAppRoot } from '@rocket.chat/mock-providers';
import { renderHook } from '@testing-library/react';

import { useSettingSelectOptions } from './useSettingSelectOptions';

// TODO: check if the return of items matches the settings we mocked
describe('useSettingSelectOptions', () => {
	it('should return the list of options', () => {
		const { result } = renderHook(() => useSettingSelectOptions(), {
			wrapper: mockAppRoot()
				.withSettings([
					{ _id: 'Accounts_AllowAnonymousRead', value: false },
					{ _id: 'Accounts_AllowFeaturePreview', value: false },
					{ _id: 'Accounts_AllowRegistration', value: false },
					{ _id: 'Accounts_AllowSignup', value: false },
				])
				.build(),
		});

		expect(result.current.itemsList.items).toBeDefined();
	});
});
