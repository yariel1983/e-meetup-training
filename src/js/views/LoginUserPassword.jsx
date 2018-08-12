import React from 'react';
import Modal from 'react-responsive-modal';

export default class CustomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false  };
    this.myRef = React.createRef();
    
    this.onOpenModal = this.onOpenModal.bind(this);    
    this.onCloseModal = this.onCloseModal.bind(this);
  }


    onOpenModal () {
        this.setState({ open: true });
    }


    onCloseModal () {
    this.setState({ open: false });
    }
    
    handleSubmit () {
        this.setState({ open: false });
        }

  render() {
    const { open } = this.state;
    return (
        <div className="example">
            <h4>Custom container</h4>
            <div ref={this.myRef} />
            <button className="btn btn-action" onClick={this.onOpenModal}>Open</button>{' '}
            <a href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/custom-container.js" target="blank">
                See source code
            </a>
            <Modal open={open} onClose={this.onCloseModal} center container={this.myRef.current}>
                <p>Take a look with the devtools you will see that this modal is
                    rendered in a custom container.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className=" col-7 col-sm-10 m-0 ">
                            <input className="inputUserModal form-control-sm" type="text" name="user" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />&nbsp;&nbsp;
                            <style>{'.inputUserModal {width: 334px;}'}</style>
                        </div>
                        <div className="col-7 col-sm-10 m-0">
                            <input className="inputPasswordModal form-control-sm" type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                            <style>{'.inputPasswordModal {width: 334px;}'}</style>
                        </div>
                        <div className="d-flex float-right" id="buttonModal" >
                            <input className="btn btn-primary text-white" type="submit" value="Login" id="submitbotton"/>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </form>    
            </Modal>
        </div>
    );
  }
}