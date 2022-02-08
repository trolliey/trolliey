import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../../components/alerts/Error';
import SuccessAlert from '../../../components/alerts/SuccessAlert';
import BlueButton from '../../../components/buttons/BlueButton';
import RedButton from '../../../components/buttons/RedButton';
import { approve_store_Action } from '../../../redux/actions/storeActions';

function ApproveStoreModal({ isOpen, onClose, body_text, modal_heading, action, store_id }) {
    const dispatch = useDispatch()
    const approve_store = useSelector(state => state.approve_store)
    const {loading, error, message} = approve_store

    const handle_modal = () => {
        if (action === 'approve') {
            dispatch(approve_store_Action(store_id))
        } else {
            dispatch(approve_store_Action(store_id))
        }
    }

    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='capitalize'>{modal_heading}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='text-center'>
                        {body_text}
                    </ModalBody>
                    {error && <Error error={error} />}
                    {message && <SuccessAlert message={message} />}
                    {
                        action === 'approve' ? (
                            <ModalFooter className="flex flex-row items-center gap-4">
                                <RedButton text='Close' onClick={onClose} />
                                <BlueButton text={'Approve'} onClick={handle_modal} loading={loading} />
                            </ModalFooter>
                        ) : (
                            <ModalFooter className="flex flex-row items-center gap-4">
                                <RedButton outline text='Close' onClick={onClose} />
                                <RedButton text={'Reject'} onClick={handle_modal} loading={loading} />
                            </ModalFooter>
                        )
                    }
                </ModalContent>
            </Modal>
        </>
    );
}

export default ApproveStoreModal;
