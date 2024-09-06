import { render, screen } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



//Agrupo Pruebas con describe


describe('GRUPO DE PRUEBAS DE EJEMPLO',()=>{
  test('Primra prueba unitaria de algo',()=>{
    expect(10).toBe(10);
  })
  test('SEGUNDA prueba unitaria de algo',()=>{
    expect(10).toBe(10);
  })
})

describe('SEGUNDO GRUPO DE PRUEBAS DE EJEMPLO',()=>{
  test('Primra prueba SEGUNDO GRUPO unitaria de algo',()=>{
    expect(10).toBe(10);
  })
  test('SEGUNDA prueba SEGUNDO GRUPO  unitaria de algo',()=>{
    expect(10).toBe(10);
  })
})
