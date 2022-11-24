import ModalCustomData from "./ModalCustomData";
import Admin from "./Admin/Admin";
import React from "react";
import AdminContainer from "./styles";

function LayoutAdmin(props) {
  const {input, urlGetData} = props
  const [modalShow, setModalShow] = React.useState(false);
  const [callData, setCallData] = React.useState(false);
  const [typeForm, setTypeForm] = React.useState(false);
  return(
    <AdminContainer  className="container-fluid p-0">
      <Admin handle={{callData, setCallData,modalShow, setModalShow, typeForm, setTypeForm}} urlGetData={urlGetData}/>
      <ModalCustomData show={modalShow} input = {input}
        onHide={() => setModalShow(false)} handle={{callData, setCallData, typeForm, setTypeForm}} urlGetData={urlGetData}/>
    </AdminContainer>    
  )
}

export default LayoutAdmin;