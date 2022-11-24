import LayoutAdmin from '../page/components/LayoutAdmin'
const Navigate = [
  {
    path: "/",
    component: < LayoutAdmin input = {[{name:'description', type:'text'},{name:'img', type:'file'}]} urlGetData = {'home/HomeSlide'} name={'Our main data'}/>,
    name: 'Right Menu'
  },
  {
    path: "/whoweare",
    component: < LayoutAdmin input = {[{name:'description', type:'text'},{name:'title', type:'text'},{name:'name', type:'text'}]} urlGetData = {'home/HomeText'}/>,
    name: 'About Devplus'
  },
  {
    path: "/test",
    component: < LayoutAdmin input = {[{name:'name', type:'text'}]} urlGetData = {'home/HomeText'}/>,
    name: 'About Devplus'
  },
  
]

export default Navigate