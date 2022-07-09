import React from 'react'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight, UploadImageIcon } from '../Shared/SvgIcons'
import { 
  FormBottomContainerInPost, 
  FormControllerInPost, 
  FormControllerUpload, 
  PostBody, 
  PostForm, 
  PostHeader } from './new-post.styled'
import { FullEditor } from './FullEditor'
import { useRef } from 'react'
import { useState } from 'react'
import { isLess200MB } from '../../utils'
import { Controller, useForm } from 'react-hook-form'
import { schema } from './schema';


const topicOptions = [
  { value: 'GENERAL', label: 'General' },
  { value: 'CLOUD_KITCHENS', label: 'Cloud Kitchens' },
  { value: 'MARKETING', label: 'Marketing' },
  { value: 'SUPPLY_CHAIN', label: 'Supply Chain' },
  { value: 'SALES', label: 'Sales' },
  { value: 'DELIEVERY_APPS', label: 'Delievery Apps' },
  { value: 'MENU_ENGINEERING', label: 'Menu Engineering' },
  { value: 'Funiture_MACHINE', label: 'Funiture & Machine' },
  { value: 'LEGAL', label: 'Legal' },
]

const customStyles = {
  // indicatorSeparator: () => { }, 
  control: (css) => ({
    ...css,
    width:  "240px",
    height: '46px',
    color: 'black'
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 2,
  }),
  
}

export const NewPost = (props) => {
  
  const imageRef = useRef(null)
  const [fileInfo, setFileInfo] = useState(null)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      topic: {}
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleImageChange = () => {
    // check if file sze is less then 200MB
    const file =  imageRef.current.files[0]
    if(file && isLess200MB(file)) {
      setFileInfo(imageRef.current.files[0])
    }
  }

  console.log(errors)
  return (
    <Layout>
      <PostForm onSubmit={handleSubmit(onSubmit)}>
         <PostHeader>
          <FormControllerInPost isValidate={!!errors?.title}>
            <label>Title</label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </FormControllerInPost>
          <FormControllerInPost>
            <label>Topic</label>
            <Select
              styles={customStyles}
              defaultValue={topicOptions[0]}
              onChange={(newValue) => {console.log(newValue)}}
              options={topicOptions} 
            />
          </FormControllerInPost>
        </PostHeader>
        <PostBody>
          <FullEditor />
        </PostBody>
        <FormControllerUpload>
          {fileInfo && 
          <div className='file-info'>
            <span>{fileInfo?.name} {isLess200MB(fileInfo).toFixed(2)}MB</span>
          </div>
          }
          <label htmlFor='image'>
            <UploadImageIcon />
          </label>
          <input 
            ref={imageRef}
            id='image' 
            name="image" 
            type={'file'} 
            onChange={() => handleImageChange()}
          />
          
        </FormControllerUpload>
        <FormBottomContainerInPost>
          <Button
            color='rainbow'
            type={'submit'}
          >
            <span>Post</span>
            <div className='svg-wrapper'>
              <ArrowRight />
            </div>
          </Button>
          </FormBottomContainerInPost>
      </PostForm>
    </Layout>
  )
}