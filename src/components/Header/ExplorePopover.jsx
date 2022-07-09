import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePopper } from 'react-popper'
import { CommunityIcon, MenuIcon, StoreIcon } from '../Shared/SvgIcons'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  PopoverListItem,
  IconWrapper
} from './ExplorePopover.styled'

export const ExplorePopover = (props) => {
  const navigate = useNavigate()
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
    // navigate(index)
    setOpen(false)
  }

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <HeaderItem
          ref={referenceElement}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </HeaderItem>
        <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
          <PopoverList>
            <PopoverListItem
              bgColor='#e6375a'
              onClick={() => handleGoToPage('/community')}
            >
              <IconWrapper className='icon-wrapper'>
                <CommunityIcon />
              </IconWrapper>
              <span>Community</span>
            </PopoverListItem>
            <PopoverListItem
              bgColor='#9270c2'
              onClick={() => handleGoToPage('/store')}
            >
              <IconWrapper className='icon-wrapper'>
                <StoreIcon />
              </IconWrapper>
              <span>Store</span>
            </PopoverListItem>
          </PopoverList>
        </PopoverBody>
      </div>
    </>
  )
}
