import { useState } from 'react';

const Email = () =>{
  const composition_label = 'sr-only'
  const composition_container_input = 'relative w-full'
  const composition_input ='w-full min-h-[48px] text-[14px] pl-6 rounded-[28px] border border-pink-100 placeholder-pink-100 placeholder:text-[14px]'
  const composition_input_xl = 'min-h-[56px] xl:pl-8 xl:placeholder:text-[16px]'
  const composition_button = 'absolute inset-y-0 right-0 w-[64px] rounded-[28px] flex justify-center items-center bg-gradient-to-tl from-pink-300 to-pink-200 shadow-button-shadow cursor-pointer'
  const composition_button_xl = 'xl:w-[100px]'
  const composition_icon_error ='absolute top-1/4 right-16'
  const composition_icon_error_xl = 'xl:right-24'
  const composition_error_input = 'border-[2px] border-red-100'
  const composition_msg_error = 'msg__error text-red-100 pl-6 text-[12px] mt-2'

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || !email || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return(
    <>
      <form id="myForm" onSubmit={handleSubmit}>
        <fieldset>
          <label className={`${composition_label}`} htmlFor="email">Email address</label>
            <div className={`container__input ${composition_container_input}`}>
              <input className={`${composition_input} ${composition_input_xl} ${error && composition_error_input}`} type="email" id="email" name="email" placeholder="Email address" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              {error && (
                <img className={`icon__error ${composition_icon_error} ${composition_icon_error_xl}`}  src="./images/icon-error.svg" alt="exclamation mark" loading="lazy" decoding="async"/>
              )}
              <button className={`arrow_container ${composition_button} ${composition_button_xl} transition-transform duration-300 ${error && 'transform translate-x-4'}`}>
                <img src="./images/icon-arrow.svg" alt="icon arrow" loading="lazy" decoding="async"/>  
              </button>
            </div>
            {error && (
              <div className={`${composition_msg_error}`} role="alert">
                <p>please provide a valid email</p>
              </div>
            )}
        </fieldset>
      </form>
    </>
  )
}

export default Email