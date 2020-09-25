import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalTemplate = ({ className, modal, setModal, modalHandler }) => {
  const toggle = () => setModal(!modal);

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
        <ModalBody>
          <p>If you cancel, your changes will not save.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="light" onClick={toggle}>Cancel</Button>
          <Button color="success" onClick={modalHandler}>Ok, don't save</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalTemplate;