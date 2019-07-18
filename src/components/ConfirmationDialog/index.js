import React from 'react';

import {Modal, TextContainer} from '@shopify/polaris';

const ConfirmationDialog = (props)=>{
    return (
        <Modal
          open={true}
          title="Prueba de modal polaris"
          onClose={props.close}
          primaryAction={{
            content: 'Boton 1',
          }}
          secondaryActions={[
            {
              content: 'Boton 2',
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
                Prueba de modal
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
    )
}

export default ConfirmationDialog;