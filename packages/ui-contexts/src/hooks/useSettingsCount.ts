import { useContext } from 'react';

import { SettingsContext } from '../SettingsContext';

export const useSettingsCount = (): number => {
	const { countTotalSettings } = useContext(SettingsContext);
	return countTotalSettings();
};
