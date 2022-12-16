import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

//import Form from './Form'
describe('Form', () => {
    it('render component Form', () => {
      render(<button type="submit" className="btn btn-primary">Submit</button>)
    })
  
    it('render with snapshot', () => {
      const {asFragment} = render(<button type="submit" className="btn btn-primary">Submit</button>)
      expect(asFragment()).toMatchSnapshot()
    })
  
    it('render component with text name Form', () => {
      render(<button type="submit" className="btn btn-primary">Submit</button>)
      expect(screen.getByText(/Submit/)).toBeInTheDocument()
    })
  
    it('button is disable', () => {
      render(<button type="submit" className="btn btn-primary">Submit</button>)
      expect(screen.getByText(/Submit/)).toBeEnabled()
    })

  })