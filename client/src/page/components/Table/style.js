import styled from "styled-components"
const Container = styled.div``
const Content = styled.div``
const H3 = styled.h3`
`
const TableContainer = styled.div`
`
const TableShow = styled.table`
`
const Thead = styled.thead``
const Tbody = styled.tbody`
display: block;
max-height: 50vh;
overflow: auto;`
const TableHeader = styled.tr`
position: relative;
`
const Tr = styled.tr`
display:flex;
position: relative;
margin: auto;`
const TableIndex = styled.th`
width: 5%;`
const TableImg = styled.td`
width: 15%;
max-height: 100px;`
const TableDescription = styled.td`
width: 68%;
word-wrap: break-word;`
const TableOption = styled.td``

const BtnUpdate = styled.button`
position: relative;
right:14px;
border: none;
background-color: #198754;
color: #fff;
padding: 8px;
border-radius: 5px;
&:hover{
  opacity: .8;
}
`
const BtnAdd = styled.button`
position: relative;
right:14px;
border: none;
background-color: #0D6EFD;
color: #fff;
padding: 8px;
border-radius: 5px;
&:hover{
  opacity: .8;
}
`
const BtnDelete = styled.button`
margin-left: 17px;
position: relative;
right:14px;
border: none;
background-color: #DC3545;
color: #fff;
padding: 8px;
border-radius: 5px;
&:hover{
  opacity: .8;
}
`

const Img = styled.img`
width: 120px;
height: 100%;`

export {
  Img, BtnDelete, BtnAdd, BtnUpdate, TableContainer,
  TableDescription, TableOption, TableImg, TableIndex, Tr, Tbody, Thead, TableHeader, TableShow, Content, Container, H3
}