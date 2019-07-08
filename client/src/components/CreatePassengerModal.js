import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class CreatePassengerModal extends Component {
  constructor(props) {
    super(props);
    this.sexOptions = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ];
  }

  render() {
    if (this.props.createdPassenger) {
      return (
        <div>
          <Modal trigger={<Button>List Unknown Passenger</Button>} closeIcon>
            <Modal.Header>Enter Passenger Information</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
              <Form onSubmit={this.props.createPassengerSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' value={this.props.passengerFirstName} onChange={this.props.handlePassengerFirstNameChange} />
                  <Form.Input fluid label='Last name' placeholder='Last name' value={this.props.passengerLastName} onChange={this.props.handlePassengerLastNameChange} />
                  <Form.Select fluid label='Sex' options={this.sexOptions} value={this.props.passengerSex} onChange={this.props.handlePassengerSexChange} placeholder='Male' />
                </Form.Group>
                <div className="ui checkbox">
                  <input type="checkbox" tabIndex="0" value={this.props.passengerSurvived} onClick={this.props.handlePassengerSurvivalChange} />
                  <label>Survived</label>
                </div>
                <div className="ui divider"></div>
                <div>
                  <div class="ui success message">
                    <div class="content">
                      <div class="header">Data was successfully added</div>
                      <p>We now have another passenger in the Titanic database!</p>
                    </div>
                  </div>
                </div>
                <div className="ui divider"></div>
                <Form.Button>Submit</Form.Button>
              </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Modal trigger={<Button>List Unknown Passenger</Button>} closeIcon>
            <Modal.Header>Enter Passenger Information</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
              <Form onSubmit={this.props.createPassengerSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' placeholder='First name' value={this.props.passengerFirstName} onChange={this.props.handlePassengerFirstNameChange} />
                  <Form.Input fluid label='Last name' placeholder='Last name' value={this.props.passengerLastName} onChange={this.props.handlePassengerLastNameChange} />
                  <Form.Select fluid label='Sex' options={this.sexOptions} value={this.props.passengerSex} onChange={this.props.handlePassengerSexChange} placeholder='Male' />
                </Form.Group>
                <div className="ui checkbox">
                  <input type="checkbox" tabIndex="0" value={this.props.passengerSurvived} onClick={this.props.handlePassengerSurvivalChange} />
                  <label>Survived</label>
                </div>
                <div className="ui divider"></div>
                <Form.Button>Submit</Form.Button>
              </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      );
    }
  }
}

export default CreatePassengerModal;
