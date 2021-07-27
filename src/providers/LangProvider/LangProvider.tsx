import { IntlProvider } from 'react-intl';
import en from '../../lang/en.json';
import fr from '../../lang/fr.json';
import { useStoreState } from '../../hooks';

export function LangProvider(props: any) {
  const lang = useStoreState((state) => state.lang);
  console.log('PROVIDER lang : ', lang);
  /* Define your translations */
  const langObjEn = {
    locale: 'en',
    messages: en,
  };
  const langObjFr = {
    locale: 'fr',
    messages: fr,
  };
  let i18nConfig = [
    langObjFr,
    langObjEn
  ];
  console.log('PROVIDER i18nConfig : ', i18nConfig);


  const localeConfig = i18nConfig.filter((config) => config.locale === lang)[0];
  return (
    <IntlProvider
      locale={localeConfig.locale}
      defaultLocale={localeConfig.locale}
      messages={localeConfig.messages}
    >
      {props.children}
    </IntlProvider>
  );
}
