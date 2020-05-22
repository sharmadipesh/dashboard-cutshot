import React from 'react';
import Responsive from 'react-responsive';
import Constants from 'config/Constants';

const Desktop = props => <Responsive {...props} minWidth={Constants.desktop_min} />;

const TabletMobile = props => <Responsive {...props} maxWidth={Constants.tablet_mobile_max} />;

export { Desktop, TabletMobile };
