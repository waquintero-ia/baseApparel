const Navigation = () =>{
  const composition_image = 'w-[26.66vw]'
  const composition_image_xl = 'lg:w-[10.98vw]'
  return(
    <>
      <div id="nav" role="banner">
        <picture>
          <img className={`${composition_image} ${composition_image_xl}`} src="./images/logo.svg" alt="base apparel" loading="lazy" decoding="async"/>
        </picture>
      </div>
    </>
  )
}

export default Navigation