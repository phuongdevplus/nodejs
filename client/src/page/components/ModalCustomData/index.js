import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import '../ModalCustomData/index.css'
import Swal from "sweetalert2";
import {
  IconRemove,
  BtnImgRemove,
  ImgContentButton,
  ImgContent,
  ImgPreview,
  ImgPreviewItem,
  BtnAdd,
  BtnCancel,
  ModalBtn,
  Input,
  LableInput,
  InPutContainer,
  FormDataInput
} from './style.js'


function ModalCustomData(props) {
  const { input, urlGetData } = props
  const { setCallData, callData,typeForm } = props.handle
  const inputField = document.getElementById('img');
  const inputDescription = document.getElementById('description');
  const [selectedImage, setSelectedImage] = useState();
  const form = document.getElementById('form');
  const addImg = document.getElementById('img');
  const removeSelectedImage = (button, id) => {
    const img = []
    selectedImage.map((e,index)=>{
      if(id !== index){
        img.push(e)
      }
    })
    setSelectedImage(img)
    // inputField.value = ''
  };
  function addImgHandle() {
    addImg.click()
  }
  //form submit
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const url = "http://localhost:5000/"+urlGetData
  const [data, setData] = useState({
    description: "",
    slug: ''
  })
  const fileImg = [];
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    Object.values(e.target.files).forEach((e) => {
      fileImg.push({ preview: URL.createObjectURL(e), data: e })
    })
    setSelectedImage(fileImg)
  }

  async function postData() {
    const formData = new FormData(form)
    console.log('aa', formData)
    await Axios.post(url, formData)
      .then(res => console.log(res.body))
      .catch(err => console.log(err)) 
  }
  async function submit(e) {
    e.preventDefault();
    let timerInterval
    Swal.fire({
      title: "Are you sure sent information?",
      icon: "question",
      iconHtml: "?",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Adding data...!',
          timer: 20000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
          postData()
          .then(() => {
            // setCallData(!callData)
            Swal.fire("Nice to meet you", "", "success");
          })
        reset();
      } else Swal.fire(" Cancelled", "", "error");
      removeSelectedImage()
      inputDescription.value = ''
    });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Our main data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        < FormDataInput id='form' method="POST" onSubmit={(e) => handleSubmit(
          submit(e)
        )}>
          {
            input.map((e, index) => (
              <InPutContainer key={index} className="mb-6">
                <LableInput for={e.name} className="form-label">{e.type === "file" ? '' : e.name}</LableInput>
                <Input multiple required type={e.type} hidden={e.type === "file" ? true : false} className="form-control" id={e.name} name={e.name} onChange={(e) => handle(e)} accept="image/*" />
                {errors.exampleRequired && <span>This field is required</span>}
                {
                  e.type === "file" && (
                    <ImgPreview className='img__preview'>
                      <ImgContentButton type='button' onClick={() => addImgHandle()}>
                        + Thêm Ảnh
                      </ImgContentButton>
                      {selectedImage ? selectedImage.map((e, index) => (
                        <ImgContent key={index} className='img__preview-content'>
                          <ImgPreviewItem
                            className='img__preview-image'
                            src={e.preview}
                            alt='Image Preview'
                          />
                          <BtnImgRemove  onClick={()=>removeSelectedImage(e, index)} className='btn__remove-img'>
                            <IconRemove className="fa-solid fa-xmark"></IconRemove>
                          </BtnImgRemove>
                        </ImgContent>
                      )) : ''
                      }
                    </ImgPreview>
                  )
                }
              </InPutContainer>
            ))

          }
          <ModalBtn className='modal__btn'>
            <BtnAdd type="submit" >Thêm dữ liệu</BtnAdd>
            <BtnCancel variant="danger" onClick={props.onHide}>Hủy</BtnCancel>
          </ModalBtn>
        </ FormDataInput>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCustomData

