import React, {useState } from 'react';
import Navigate from '../../../router/Navigate';
import Navbar from '../Navbar/index'
import { Link } from 'react-router-dom';
import Table from '../Table/Table'

import {
    Main,
    H1,
    LinkText,
    LinkNav,
    TopSection,
    Container,
    SideBar
} from './style'

const Admin = (props) => {
    const handler = props
    const { callData, setCallData, modalShow, setModalShow, typeForm, setTypeForm } = handler.handle
    const { urlGetData } = props
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container className="container-fluid d-flex p-0 m-0">
            <SideBar style={{ width: isOpen ? "200px" : "0px" }} className="sidebar">
                <TopSection className="top_section">
                    <H1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</H1>
                </TopSection>
                {
                    Navigate.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <LinkNav style={{ display: isOpen ? "block" : "none" }} className="link" onClick={setCallData(!callData)}>
                                <LinkText style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</LinkText>
                            </LinkNav>
                        </Link>
                    ))
                }
            </SideBar>
            <Main className='p-0'>
                <Navbar value={{ setIsOpen, isOpen }} />
                <Table handle={{ callData, setCallData, modalShow, setModalShow, typeForm, setTypeForm }} urlGetData={urlGetData} />
            </Main>
        </Container>
    );
};

export default Admin;