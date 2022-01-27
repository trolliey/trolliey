import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'
import { SearchIcon } from '@heroicons/react/outline';
import { set_search_query_Action } from '../../redux/actions/searchAction';

function NavSearch() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [search_query, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const search_handler = () => {
        dispatch(set_search_query_Action(search_query))
        history.push('/explore')
    }
    return <>
        <div onClick={onOpen} className="flex p-2 hover:bg-gray-200 cursor-pointer rounded-full">
            <SearchIcon height={20} width={20} className="text-gray-700" />
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className="flex flex-row items-center">
                        <input
                            type="text"
                            onChange={e => setSearchQuery(e.target.value)}
                            className='md:p-4 p-2 rounded outline-none border-none w-full '
                            placeholder='Search product, store, category...' />
                        <div className="span" onClick={search_handler} className='cursor-pointer'>
                            <SearchIcon height={20} width={20} className="text-gray-500" />
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>;
}

export default NavSearch;
