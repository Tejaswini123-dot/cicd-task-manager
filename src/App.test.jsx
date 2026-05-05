import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders app title', () => {
  render(<App />)
  expect(screen.getByText(/CI\/CD Task Manager/i)).toBeInTheDocument()
})

test('shows initial tasks', () => {
  render(<App />)
  expect(screen.getByText(/Setup CI\/CD Pipeline/i)).toBeInTheDocument()
})

test('adds a new task', () => {
  render(<App />)
  const input = screen.getByPlaceholderText('Add a new task...')
  fireEvent.change(input, { target: { value: 'New Task' } })
  fireEvent.click(screen.getByText('Add'))
  expect(screen.getByText(/New Task/i)).toBeInTheDocument()
})

test('deletes a task', () => {
  render(<App />)
  const deleteButtons = screen.getAllByText('✕')
  fireEvent.click(deleteButtons[0])
  expect(screen.queryByText(/Setup CI\/CD Pipeline/i)).not.toBeInTheDocument()
})

test('shows task stats', () => {
  render(<App />)
  expect(screen.getByText('Total')).toBeInTheDocument()
  expect(screen.getByText('Done')).toBeInTheDocument()
  expect(screen.getByText('Pending')).toBeInTheDocument()
})
