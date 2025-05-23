import { Tabs } from 'antd';
import Spinner from 'components/Spinner';
import { useAppContext } from 'providers/App/App';
import { useTranslation } from 'react-i18next';

import ApplyLicenseForm from './ApplyLicenseForm';

function Licenses(): JSX.Element {
	const { t, ready: translationsReady } = useTranslation(['licenses']);
	const { activeLicenseRefetch } = useAppContext();

	if (!translationsReady) {
		return <Spinner tip={t('loading_licenses')} height="90vh" />;
	}

	const tabs = [
		{
			label: t('tab_current_license'),
			key: 'licenses',
			children: <ApplyLicenseForm licenseRefetch={activeLicenseRefetch} />,
		},
	];

	return (
		<Tabs destroyInactiveTabPane defaultActiveKey="licenses" items={tabs} />
	);
}

export default Licenses;
