import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmDialog extends React.Component {
    render() {
        const closeAlert = this.props.closeAlert;
        const alertLogic = this.props.alertLogic;
        const confirm = this.props.confirm;
        return (
            <div>
                <Dialog
                    open={alertLogic}
                    onClose={() => closeAlert()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Do you want to delete your list?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Click Yes to delete your list.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => closeAlert()}
                            color="primary"
                            autoFocus
                        >
                          No
                        </Button>
                        <Button
                            onClick={() => {
                                confirm();
                                closeAlert();
                            }}
                            color="secondary"
                        >
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ConfirmDialog;

ConfirmDialog.propTypes = {
    closeAlert: PropTypes.func.isRequired,
    alertLogic: PropTypes.bool.isRequired,
    confirm: PropTypes.func.isRequired
}