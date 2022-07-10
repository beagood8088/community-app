import React, { useState, useRef } from 'react'
import Select from 'react-select'
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form'
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { Button } from '../Shared/Buttons'
import { Input } from '../Shared/Inputs'
import { Layout } from '../Shared/Layout'
import { ArrowRight, UploadImageIcon } from '../Shared/SvgIcons'
import {
  ErrorWrapper,
  FormBottomContainerInPost,
  FormControllerWrapper,
  FormControllerUpload,
  InputController,
  PostBody,
  PostForm,
  PostHeader
} from './new-post.styled'
import { FullEditor } from './FullEditor'
import { isLess200MB } from '../../utils'
import { schema } from './schema';
import { topicOptions } from './data';

const customStyles = {
  control: (css) => ({
    ...css,
    width: "240px",
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
  const [fileInfoError, setFileInfoError] = useState('')
  const [editorState, setEditorState] = useState()

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      topic: topicOptions[0]
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const initialForm = () => {
    reset()
    setEditorState(null)
    setFileInfo(null)
  }

  const onSubmit = (data) => {
    const newPost = {
      ...data,
      topic: data.topic.value,
      file: fileInfo,
      detail: editorState ? draftToMarkdown(convertToRaw(editorState.getCurrentContent())) : null
    }
    console.log(newPost);
    /** after storing newPost into db */
    initialForm()
  }

  const handleImageChange = () => {
    /** check if file sze is less then 200MB */
    const file = imageRef.current.files[0]
    const allowedExtension = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp']
    if (!file) {
      setFileInfoError('File is not exist')
      return
    }
    if (!(allowedExtension.indexOf(file.type) > -1)) {
      setFileInfoError('The file is only accepted image format!')
      return
    }
    if (!isLess200MB(file)) {
      setFileInfoError('File is too big. please upload less then 200MB')
      return
    }
    setFileInfoError('')
    setFileInfo(imageRef.current.files[0])
  }

  return (
    <Layout>
      <PostForm onSubmit={handleSubmit(onSubmit)}>
        <PostHeader>
          <FormControllerWrapper>
            <InputController isInValidate={!!errors?.title}>
              <label>Title</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </InputController>
            <ErrorWrapper>
              <label>&nbsp;</label>
              <p>{errors?.title && errors?.title.message}</p>
            </ErrorWrapper>
          </FormControllerWrapper>
          <InputController style={{ color: 'black' }}>
            <label>Topic</label>
            <Controller
              name="topic"
              control={control}
              render={({ field }) =>
                <Select
                  {...field}
                  styles={customStyles}
                  defaultValue={topicOptions[0]}
                  options={topicOptions}
                />
              }
            />
          </InputController>
        </PostHeader>
        <PostBody>
          <FullEditor
            editorState={editorState}
            setEditorState={setEditorState}
          />
        </PostBody>
        <FormControllerUpload>
          {fileInfo &&
            <div className='file-info'>
              <span>{fileInfo?.name} {isLess200MB(fileInfo).toFixed(2)}MB</span>
            </div>
          }
          {fileInfoError &&
            <div className='error-msg'>{fileInfoError}</div>
          }
          <label htmlFor='image'>
            <UploadImageIcon />
          </label>
          <input
            ref={imageRef}
            id='image'
            name="image"
            type={'file'}
            accept='.png, .jpg, .jpeg'
            onChange={() => handleImageChange()}
          />
        </FormControllerUpload>
        <FormBottomContainerInPost>
          <Button
            disabled={false}
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