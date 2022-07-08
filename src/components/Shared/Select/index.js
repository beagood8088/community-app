import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import {
  Container,
  Selected,
  OptionList,
  Option
} from './styles'

export const Select = (props) => {
  const {
    options,
    defaultValue,
    notAsync,
    onChange,
    placeholder
  } = props

  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const dropdownReference = useRef()

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  const handleChangeOption = (option) => {
    setSelectedOption(option)
    setValue(option.value)
    onChange && onChange(option.value)
    setOpen(false)
  }

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(option => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  useEffect(() => {
    document.addEventListener('mouseup', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mouseup', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <Container>
      <Selected onClick={() => setOpen(true)} noValue={!selectedOption}>
        {selectedOption ? (
          <span>{selectedOption?.name}</span>
        ) : (
          <span>{placeholder || 'Select a option'}</span>
        )}
        <img src={theme.icons.downArrow} alt='' />
      </Selected>
      {options && open && (
        <OptionList ref={dropdownReference}>
          {options.map((option, i) => (
            <Option
              key={i}
              selected={value === option.value}
              onClick={() => handleChangeOption(option)}
            >{option?.name}</Option>
          ))}
        </OptionList>
      )}

    </Container>
  )
}
