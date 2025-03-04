import type { V2_MetaFunction } from '@remix-run/node'
import { useLocation } from '@remix-run/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const meta: V2_MetaFunction = () => {
  return [
    { title: '4RTH' },
    { name: 'description', content: 'Pickleball mixer, but better!' },
  ]
}

export default function Index() {
  const { pathname } = useLocation(),
    navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/players')
    }
  }, [])

  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
    ></div>
  )
}
