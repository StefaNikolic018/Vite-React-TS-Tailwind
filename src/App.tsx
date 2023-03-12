import React, { ReactElement, useState } from 'react'
import logo from './assets/logo.svg'
import viteLogo from './assets/vite.svg'
import tailwindLogo from './assets/tailwind.svg'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className="rounded-xl border border-gray-50 p-20 shadow-xl">
      <header>
        <div className="flex justify-center">
          <img src={viteLogo} className="h-32 w-32" alt="vite logo" />
          <img src={logo} className="h-32 w-32" alt="React logo" />
          <img
            src={tailwindLogo}
            className="h-32 w-32"
            alt="Tailwind CSS logo"
          />
        </div>
        <p className="pb-3 text-2xl">Hello Vite + React + Tailwind CSS!</p>
        <p>
          <button
            className="rounded bg-purple-400 pt-1 pb-1 pl-2 pr-2 text-sm text-purple-100"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="pt-3 pb-3">
          Edit{' '}
          <code className="border-1 rounded border border-purple-400 bg-purple-100 pl-1 pr-1 pb-0.5 pt-0.5 font-mono text-sm text-purple-900">
            src/App.tsx
          </code>{' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-purple-400 underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="text-purple-400 underline"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
