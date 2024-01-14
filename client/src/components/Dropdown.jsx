import { Dropdown as DropDownComponent, DropdownItem } from 'flowbite-react'
import { useSelector } from 'react-redux'

function Dropdown({ filter, sort, text, onChange, onClick }) {
  const { active } = useSelector((state) => state.category)
  console.log(active, 'sjkadfha')
  return (
    <DropDownComponent label={text} dismissOnClick={false} inline>
      {filter && (
        <>
          <DropdownItem>
            <>
              <input
                onChange={(e) => onChange(e)}
                type="checkbox"
                id="watches"
                checked={!!active.includes('watches')}
              />{' '}
              Watches
            </>
          </DropdownItem>
          <DropdownItem>
            <>
              <input
                type="checkbox"
                onChange={(e) => onChange(e)}
                id="bags"
                checked={active.includes('bags')}
              />{' '}
              Bags
            </>
          </DropdownItem>
          <DropdownItem>
            <>
              <input
                type="checkbox"
                onChange={(e) => onChange(e)}
                id="shoes"
                checked={active.includes('shoes')}
              />{' '}
              Shoes
            </>
          </DropdownItem>
        </>
      )}
      {sort && (
        <>
          <DropdownItem onClick={() => onClick('creaTedAt')}>By Date</DropdownItem>
          <DropdownItem onClick={() => onClick('price')}>By Price</DropdownItem>
        </>
      )}
    </DropDownComponent>
  )
}

export default Dropdown
