import React, { useState } from 'react';
import './Tabs.css';
import ConfigureTab from './ConfigureTab/ConfigureTab';
import ConsoleTab from './ConsoleTab/ConsoleTab';
import HistoryTab from './HistoryTab/HistoryTab';

const CONSTANTS = {
  CONFIGURE: 'configure',
  CONSOLE: 'console',
  HISTORY: 'history',
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('configure');

  const changeTabHandler = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div className="tabs-container">
        <div
          className={activeTab === CONSTANTS.CONFIGURE ? 'tab active' : 'tab'}
          onClick={() => changeTabHandler(CONSTANTS.CONFIGURE)}
        >
          Configure
        </div>
        <div
          className={activeTab === CONSTANTS.CONSOLE ? 'tab active' : 'tab'}
          onClick={() => changeTabHandler(CONSTANTS.CONSOLE)}
        >
          Console
        </div>
        <div
          className={activeTab === CONSTANTS.HISTORY ? 'tab active' : 'tab'}
          onClick={() => changeTabHandler(CONSTANTS.HISTORY)}
        >
          History
        </div>
        <div className="tab empty"></div>
      </div>
      <ConfigureTab status={(activeTab === CONSTANTS.CONFIGURE) ? 'show' : 'hide'} />
      <ConsoleTab status={(activeTab === CONSTANTS.CONSOLE) ? 'show' : 'hide'} />
      <HistoryTab status={(activeTab === CONSTANTS.HISTORY) ? 'show' : 'hide'} />
    </div>
  );
};

export default Tabs;
