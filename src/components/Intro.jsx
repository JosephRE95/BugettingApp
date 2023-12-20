import React from 'react'

export const Intro = () => {
  return (
    <div className='intro'>
    <div>
      <h1>
        Take control of
         <span className='accent'>Your money

        </span>
      </h1>
      <p>
        personal budgeting is the secret to 
        finacial freedom. Start your journey today.
      </p>
      <Form method="post">
        <input
         type="text"
         name='userName'
         required
         placeholder='What is your name?'
         aria-label='Name'
         autoComplete='given-name'
          
        />
         
      </Form>
    </div>
    </div>
  )
}

export default Intro