import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import YAML from 'yaml'
import { RedocStandalone, styled } from 'redoc'

type Spec = { name: string; url: string }

export default function Redocly() {
  const [searchParams, setSearchParams] = useSearchParams()
  const specDropDown = useRef<HTMLSelectElement>(null)

  const { error, data } = useQuery({
    queryKey: ['spec'],
    queryFn: () => fetch('swagger-config.yaml').then(async res => YAML.parse(await res.text())),
  })

  useEffect(() => {
    if (searchParams.has('urls.primaryName') && data?.urls) {
      specDropDown.current!.value = data.urls.find((url: Spec) => {
        return url.name === searchParams.get('urls.primaryName')
      }).url
    }
  })

  const OnDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      'urls.primaryName': data.urls.find((url: Spec) => {
        return url.url === e.target.value
      }).name,
    })
  }

  return (
    <>
      <TopBar>
        <NavSection>
          <img src="https://github.com/Redocly/redoc/raw/main/docs/images/redoc.png" alt="Redoc logo" height={40} />

          {data && (
            <NavDropDown htmlFor="select">
              <NavDropDownLabel>Select a definition</NavDropDownLabel>
              <NavDropDownSelect id="select" ref={specDropDown} onChange={OnDropDownChange}>
                {data.urls.map((url: Spec, i: number) => (
                  <option value={url.url} key={i}>
                    {url.name}
                  </option>
                ))}
              </NavDropDownSelect>
            </NavDropDown>
          )}
        </NavSection>
      </TopBar>

      <RedocStandalone
        specUrl={
          specDropDown.current?.value ||
          'https://raw.githubusercontent.com/kms0219kms/tosspayments-api-spec/main/specs/coreApi/2022-11-16.json'
        }
      />
    </>
  )
}

const TopBar = styled.nav({
  width: '100%',
  padding: '10px 0',
  backgroundColor: '#ffffff',
})

const NavSection = styled.section({
  display: 'flex',
  justifyContent: 'space-between',

  margin: '0 auto',
  padding: '0 30px',

  width: '100%',
})

const NavDropDown = styled.label({
  display: 'inline-flex',
  alignItems: 'center',
  color: '#3b4151',
})

const NavDropDownLabel = styled.span({
  fontSize: 16,
  fontWeight: 700,
  textAlign: 'right',
  padding: '0 10px 0 0',
})

const NavDropDownSelect = styled.select({
  flex: 2,
  outline: 'none',
  appearance: 'none',
  boxShadow: 'none',

  borderRadius: 4,
  padding: '5px 40px 5px 10px',

  background:
    '#f7f7f7 url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11z"/></svg>\') right 10px center no-repeat',
  backgroundSize: 20,
})
