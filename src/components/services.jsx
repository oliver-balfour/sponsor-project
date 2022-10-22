import { useState } from 'react'

const initialState = {
  name: '',
  email: ''
}

export const Services = (props) => {
  const [{ name, email}, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name , email: email})
    };
    fetch('https://t3dbgp.deta.dev/talent/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Convertite en sponsor</h2>
          <h3>
            Si te suscribis ahora obtenés AR$500 para que realices tu primera inversión.
          </h3>
          <p>
            Comenza a invertir en algún talento. Suscribite a nuestro newsletter y enterate cuando salen los primeros tokens.
          </p>
        </div>

        <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nombre'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-10'>
                  </div>
                  <button type='submit' className='btn btn-custom col-md-2'>
                  Suscribirme
                  </button>
                </div>
                <div id='success'></div>
              </form>

        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
