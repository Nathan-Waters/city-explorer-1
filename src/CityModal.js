import React from 'react';
import { Modal, Image } from 'react-bootstrap';

class CityModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Image 
          src={this.props.beast.image_url} 
          alt={this.props.beast.title}
          style={{width: '100%'}}
          />
        </Modal.Body>
        <Modal.Footer>{this.props.beast.description}</Modal.Footer>
      </Modal>
    )
  }
}

export default CityModal;