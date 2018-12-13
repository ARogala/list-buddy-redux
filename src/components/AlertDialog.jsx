import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
    render() {
        const closeAlert=this.props.closeAlert;
        const alertLogic=this.props.alertLogic;
        return (
            <div>
                <Dialog
                    open={alertLogic}
                    onClose={() => closeAlert()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Please enter a list item."}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          To save a item to your list please enter it in the input field provided.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => closeAlert()} color="primary" autoFocus >
                          OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialog;

AlertDialog.propTypes = {
    closeAlert: PropTypes.func.isRequired,
    alertLogic: PropTypes.bool.isRequired
}