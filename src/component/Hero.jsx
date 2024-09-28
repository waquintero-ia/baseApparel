const Hero = () =>{
  const composition_img = 'w-full'
  const composition_img_xl = 'xl:w-[610px] xl:ml-auto'
  return(
    <>
      <picture id="hero">
        <source srcSet="./images/hero-desktop.jpg" media="(min-width: 64rem)" />
        <img className={`${composition_img} ${composition_img_xl}`} src="./images/hero-mobile.jpg" alt="Young woman with wavy brown hair in a coral button-up shirt, standing in front of large green leaves and a pinkish-red wall." loading="lazy" decoding="async"/>
      </picture>
    </>
  )
}

export default Hero