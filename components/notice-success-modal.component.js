import { memo } from "react"
import styles from "../assets/styles/notice-success-modal.module.scss"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_NOTICEMODAL } from "../actions/index.action";

const NoticeSuccessModal = () => {
    let { isShowNoticeModal } = useSelector(state => state.index)

    let dispatch = useDispatch();
    let dispatchToStore = (action) => {
        dispatch(action);
    }

    const handleClose = () => {
        console.log("close button")
        dispatchToStore({
            type: CLOSE_NOTICEMODAL
        })
    }

    const customStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

    return <Modal
    hideBackdrop
        open={isShowNoticeModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
    >
        <Box sx={{ ...customStyles, width: 400  }}>
            <p id="child-modal-description">Booking successfully !!!</p>
            <Button
                variant="contained"
                color="error"
                className={styles.btn}
                sx={{
                    fontSize: 14,
                    fontWeight: '700'
                }}
                onClick={() => { handleClose() }}
            >
                OK
            </Button>
        </Box>


    </Modal>
}

export default memo(NoticeSuccessModal)