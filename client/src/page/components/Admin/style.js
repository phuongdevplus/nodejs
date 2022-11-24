import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
`

const SideBar = styled.div`
background: #000;
color: #fff;
height: 100vh;
width: 200px;
transition: all 0.5s;
 a{
  text-decoration: none;
  }
`

const TopSection = styled.div`
display: flex;
  align-items:center;
  padding:20px 15px;  
`
const LinkNav = styled.div`
  display: flex;
  color: #fff;

  padding: 10px 10px 10px 5px;
  gap: 15px;
  transition: all 0.5s;
  border-bottom:1px solid #fff;
  &:hover{
    background:lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
`
const LinkText = styled.div`
  font-size: 16px;
`
const Main = styled.main`
width: 100%;
padding: 20px;
`

const H1 = styled.h1`
`

export{
Main,
H1,
LinkText,
LinkNav,
TopSection,
Container,
SideBar
}