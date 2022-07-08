import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePopper } from 'react-popper'
import { UserIcon, LogoutIcon } from '../Shared/SvgIcons'
import { useSession } from '../../contexts/SessionContext'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  PopoverListItem,
} from './styles'

export const UserPopover = (props) => {
  const navigate = useNavigate()
  const [, { logout }] = useSession()
  const [open, setOpen] = useState(false)
  const referenceElement = useRef()
  const popperElement = useRef()


  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-end',
    modifiers: [
      { name: 'arrow' },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, update } = popper

  useEffect(() => {
    update && update()
  }, [open])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '227px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  const handleGoToPage = (index) => {
    navigate(index)
    setOpen(false)
  }

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <HeaderItem
          ref={referenceElement}
          onClick={() => setOpen(!open)}
        >
          <div className='user-name'>{'Michal Jhon'}</div>
          <div className='is-verified'>{'verified'}</div>
        </HeaderItem>
        <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
          <PopoverList>
            <PopoverListItem
              onClick={() => handleGoToPage('/my-profile')}
            >
              <div className='icon-wrapper'><UserIcon /></div>
              <span>My Profile</span>
            </PopoverListItem>
          </PopoverList>
          <PopoverListItem onClick={() => logout()}>
            <div className='icon-wrapper'>
              <LogoutIcon />
            </div>
            <span>Sign Out</span>
          </PopoverListItem>
        </PopoverBody>
      </div>
    </>
  )
}
