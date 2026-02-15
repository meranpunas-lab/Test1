import React from 'react';
import { connect } from 'react-redux';
import { NavModel } from '@grafana/data';
import Page from '../../core/components/Page/Page';
import { getNavModel } from '../../core/selectors/navModel';
import { LicenseChrome } from './LicenseChrome';
import { StoreState } from '../../types';
import { ServerStats } from './ServerStats';

interface Props {
  navModel: NavModel;
}

export function UpgradePage({ navModel }: Props) {
  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <ServerStats />
        <UpgradeInfo />
      </Page.Contents>
    </Page>
  );
}

interface UpgradeInfoProps {
  editionNotice?: string;
}

export const UpgradeInfo: React.FC<UpgradeInfoProps> = ({ editionNotice }) => {
  return (
    <>
      <LicenseChrome header="AKMind Solutions" editionNotice={editionNotice} />
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, 'upgrading'),
});

export default connect(mapStateToProps)(UpgradePage);
