import { mapSelectOptionsFrom } from "../../utils"


export const cityTypes = [
  { label: 'Riyadh' },
  { label: 'Eastern Prov' },
  { label: 'Makhkah' },
  { label: 'Hael' },
  { label: 'Northern Borders' },
  { label: 'Najran' },
  { label: 'Jizan' },
  { label: 'Tabuk' },
  { label: 'Qassem' },
  { label: 'Jouf' },
  { label: 'Aseer' },
  { label: 'Baha' },
  { label: 'Madinah' },
]
export const cityOptions = mapSelectOptionsFrom(cityTypes)

export const ownerTypes = [
  { label: 'Restaurant Owner' },
  { label: 'Coffe Shop Owner' },
  { label: 'Bakery Owner' },
  { label: 'Juice Shop Owner' },
  { label: 'Sweets Shop Owner' },
  { label: 'Food Supplier' },
  { label: 'I work in the industry' },
  { label: 'Other' },
]
export const ownerOptions = mapSelectOptionsFrom(ownerTypes)

export const customStyles = {
  control: (css) => ({
    ...css,
    height: '46px',
    borderRadius: '2px',
  }),
  menu: ({ width, ...css }) => ({
    ...css,
    width: "max-content",
    minWidth: "100%",
    zIndex: 2,
  }),
}