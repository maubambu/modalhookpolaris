import React from 'react';
import logo from './logo.svg';
import '@shopify/polaris/styles.css';
import './App.css';
import ModalHook from './components/ModalHook'
import ModalPortal from './components/ModalPortal';
import { AppProvider } from '@shopify/polaris';
import ConfirmationDialog from './components/ConfirmationDialog';

function App() {
  return (
    <AppProvider>
      <div id="App">
        <ModalHook
            toggle={show => <button onClick={show}>Open</button>}
            content={hide => (
              <ModalPortal>
                <ConfirmationDialog close={hide}></ConfirmationDialog>
              </ModalPortal>
            )}
          />
      </div>
    </AppProvider>
  );
}

export default App;
