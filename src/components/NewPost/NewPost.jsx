import React from 'react'
import Select from 'react-select'
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight, FilterIcon, UploadIcon } from '../Shared/SvgIcons'
import { 
  FormBottomContainerInPost, 
  FormControllerInPost, 
  FormControllerUpload, 
  PostBody, 
  PostForm, 
  PostHeader } from './new-post.styled'
import TextEditor from './TextEditor'


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
  
  const handleSubmit = () => {

  }

  return (
    <Layout>
      <PostForm onSubmit={handleSubmit}>
         <PostHeader>
          <FormControllerInPost>
            <label>Title</label>
            <Input />
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
          <TextEditor />
        </PostBody>
        <FormControllerUpload>
          <label htmlFor='input'>
            <UploadIcon />
          </label>
          <input id='input' type={'file'} />
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