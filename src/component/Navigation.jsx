const Navigation = () =>{
  const composition_image = 'w-[26.66vw]'
  return(
    <>
      <nav>
        <picture>
          <img className={`${composition_image}`} src="./images/logo.svg" alt="base apparel" loading="lazy" decoding="async"/>
        </picture>
      </nav>
    </>
  )
}

export default Navigation