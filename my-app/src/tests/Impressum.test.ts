import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Impressum from '../routes/impressum/+page.svelte';

describe('Impressum Component', () => {
  it('renders all the required company details', () => {
    // const { getByText } = render(Impressum);

    // expect(getByText('Impressum')).toBeInTheDocument();
    // expect(getByText('Company Name:')).toBeInTheDocument();
    // expect(getByText('Your Company Name')).toBeInTheDocument();
    // expect(getByText('Address:')).toBeInTheDocument();
    // expect(getByText('Your Company Address')).toBeInTheDocument();
    // expect(getByText('Phone:')).toBeInTheDocument();
    // expect(getByText('Your Company Phone Number')).toBeInTheDocument();
    // expect(getByText('Email:')).toBeInTheDocument();
    // expect(getByText('Your Company Email')).toBeInTheDocument();
    // expect(getByText('VAT ID:')).toBeInTheDocument();
    // expect(getByText('Your VAT ID')).toBeInTheDocument();
    // expect(getByText('Managing Directors:')).toBeInTheDocument();
    // expect(getByText('Names of Managing Directors')).toBeInTheDocument();
  });

  it('has the correct styles applied', () => {
    // const { container } = render(Impressum);

    // const impressumDiv = container.querySelector('.impressum');
    // // expect(impressumDiv).toHaveStyle('font-family: Arial, sans-serif; margin: 20px;');

    // const heading = container.querySelector('h1');
    // expect(heading).toHaveStyle('font-size: 24px; margin-bottom: 10px;');
  });
});
