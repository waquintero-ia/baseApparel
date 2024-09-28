const Hero = () =>{
  return(
    <>
      <picture>
        <source srcSet="./images/hero-desktop.jpg" media="(min-width: 80rem)" />
        <img className="w-full" src="./images/hero-mobile.jpg" alt="Young woman with wavy brown hair in a coral button-up shirt, standing in front of large green leaves and a pinkish-red wall." loading="lazy" decoding="async"/>
      </picture>
    </>
  )
}

export default Hero