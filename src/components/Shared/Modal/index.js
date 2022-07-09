import React, { useEffect } from 'react'
import { Close } from '../SvgIcons'
import { Popup } from './Popup'
import {
  ModalDialog,
  ModalTitle,
  ModalIcon,
  ModalHeader
} from './styles'

const ModalUI = (props) => {
  const {
    open,
    title,
    children,
    onClose,
    isTransparent,
    hideCloseDefault
  } = props

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose && onClose()
    }
  }

  useEffect(() => {
    if (window.innerWidth > document.body.clientWidth) {
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      const bodyPaddingRight = window.document.body.style.paddingRight
      document.body.style.paddingRight = props.open ? `${bodyPaddingRight + scrollbarWidth}px` : `${bodyPaddingRight}px`
    }
    document.body.style.overflow = props.open ? 'hidden' : 'auto'
    if (props.open) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <ModalDialog
      className='popup-dialog'
      width={props.width}
      height={props.height}
      padding={props.padding}
      isTransparent={isTransparent}
    >
      {!hideCloseDefault && (
        <ModalIcon>
          <Close onClick={() => onClose()} />
        </ModalIcon>
      )}
      <ModalHeader>
        {title && (
          <ModalTitle>
            {title}
          </ModalTitle>
        )}
      </ModalHeader>
      {children}
    </ModalDialog>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Popup {...ModalProps} />
  )
}
