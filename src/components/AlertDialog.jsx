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
        const alertTitle=this.props.alertTitle;
        const alertContentText=this.props.alertContentText;
        return (
            <div>
                <Dialog
                    open={alertLogic}
                    onClose={() => closeAlert()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          {alertContentText}
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
    alertLogic: PropTypes.bool.isRequired,
    alertTitle: PropTypes.string.isRequired,
    alertContentText: PropTypes.string.isRequired
}