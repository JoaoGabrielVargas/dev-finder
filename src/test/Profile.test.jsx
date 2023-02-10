import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

jest.moch(axios);

describe('Home', () => {
  it('should render the title', () => {
    const { getByText } = render(<Home />);
    const title = getByText('Dev_Finder');
    expect(title).toBeInTheDocument();
  });

  it('should update the state with the input value on change', () => {
    const { getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('should make a request to the API on submit', async () => {
    const { getByText, getByPlaceholderText } = render(<Home />);
    const input = getByPlaceholderText('Search');
    const submitButton = getByText('Search');

    axios.get.mockResolvedValue({ data: { avatar_url: 'test.jpg', login: 'testuser', bio: 'test bio' } });

    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(submitButton);

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/testuser');
  });

  it('should render the profile card after submitting the form', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<Home />);
    const input = getByPlaceholderText('Search');
    const submitButton = getByText('Search');

    axios.get.mockResolvedValue({ data: { avatar_url: 'test.jpg', login: 'testuser', bio: 'test bio' } });

    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(submitButton);

    const profileCard = await findByText('test bio');
    expect(profileCard).toBeInTheDocument();
  });
});
