import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Avatar, Button } from '@material-ui/core';
import { Event, Gif, Image, SentimentVeryDissatisfiedRounded } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export default function TweetDialog({ dialog, setDialog }) {

    return (
        <>
            <Dialog onClose={() => setDialog(false)} aria-labelledby="customized-dialog-title" open={dialog}>
                <DialogTitle id="customized-dialog-title" onClose={() => setDialog(false)}></DialogTitle>

                <DialogContent>
                    {/* <TweetBox /> */}
                    <div className='tweet-dialog-box'>
                        <form>
                            <div className='tweetbox-input'>
                                <Avatar src='https://i.ibb.co/3v4qVhN/pro-nazmul.jpg' />
                                <input type='text' placeholder="What's happening?" />
                            </div>
                            <div className='tweet-input-button'>
                                <div className='tweet-input-icons'>
                                    <Image fontSize='small' />
                                    <Gif fontSize='small' />
                                    <SentimentVeryDissatisfiedRounded fontSize='small' />
                                    <Event fontSize='small' />
                                </div>
                                <Button className='tweetBox-tweetButton'>Tweet</Button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
