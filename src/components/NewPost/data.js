
export const topicOptions = [
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

export const customStyles = {
  control: (css) => ({
    ...css,
    height: '46px',
    color: 'black'
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 2,
  }),
}