import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/ar';

import enTranslation from './locales/en/translation.json';
import enMenu from './locales/en/menu.json';
import esTranslation from './locales/es/translation.json';
import esMenu from './locales/es/menu.json';
import arTranslation from './locales/ar/translation.json';
import arMenu from './locales/ar/menu.json';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		resources: {
			en: {
				translation: enTranslation,
				menu: enMenu,
			},
			es: {
				translation: esTranslation,
				menu: esMenu,
			},
			ar: {
				translation: arTranslation,
				menu: arMenu,
			},
		},
		fallbackLng: 'en',
		lng: 'en',
		// debug: true,

		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})
	.then();

export default i18n;
