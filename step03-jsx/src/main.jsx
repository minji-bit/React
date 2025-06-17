import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import JSX_Test from './jsx_Test.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> 개발 상태에서만 실행됨
    <JSX_Test />
  // </StrictMode>,
)
