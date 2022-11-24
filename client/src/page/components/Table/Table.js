
import React, { useEffect, useInsertionEffect, useState } from 'react';
import {
Img, BtnDelete, BtnAdd, BtnUpdate, TableContainer,
TableDescription, TableOption, TableImg, TableIndex,Tr,Tbody, Thead, TableHeader, 
TableShow, Content, Container, H3} from'./style.js'

function Table(props) {
 
  const {urlGetData} = props
  const { setModalShow, callData, setTypeForm } = props.handle
  const [dataStatus, setDataStatus] = useState(false)
  const [score, setScore] = useState(null);
  async function fetchData() {
    await fetch('http://localhost:5000/'+ urlGetData, {method: "GET"})
      .then((response) => response.json())
      .then((data) => setScore(data))
      .catch(() => {
      })
  }

  function handleForm(option){
    if(option){
      setTypeForm(true)
    }else{
      setTypeForm(false)
    }
    setModalShow(true)
  }
  useEffect(() => {
    fetchData();
  }, [urlGetData]);
  // console.log(callData)
  return (
    <Container className='container-fluid'>
      <Content className="mt-4">
        <H3>Our main data</H3>
        <TableContainer>
          <TableShow className="table m-auto">
            <Thead >
              <TableHeader className="d-flex">
                <TableIndex  scope="col">stt</TableIndex>
                <TableImg  scope="col">img</TableImg>
                <TableDescription  scope="col" colSpan="2">description</TableDescription>
                <TableOption  scope="col" colSpan="2">
                  <BtnAdd  onClick={() => handleForm(true)}>Thêm dữ liệu</BtnAdd>
                </TableOption>
              </TableHeader>
            </Thead>
            <Tbody>
              {
                score ? score.map((score, index) => (
                  <Tr key={index}>
                    <TableIndex  scope="row">{index + 1}</TableIndex>
                    <TableImg >
                      <Img  alt='imgages-data' src={score.img}></Img>
                    </TableImg>
                    <TableDescription >{score.description}</TableDescription>
                    <TableOption>
                      <BtnUpdate variant="success"  onClick={() =>  handleForm(false)}>sửa</BtnUpdate>
                      <BtnDelete variant="danger">xóa</BtnDelete>
                    </TableOption>
                  </Tr>
                )) : ''
              }
              
            </Tbody>
          </TableShow >
        </TableContainer>
      </Content>
    </Container>
  );
}

export default Table;