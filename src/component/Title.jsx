const Title = () =>{
  const composition_h1 = 'text-40 text-pink-100 font-light leading-[100%] tracking-[10.83px] text-center uppercase' 
  const composition_h1_xl = 'lg:text-64 lg:text-left lg:leading-[110%] lg:tracking-[17.32px]'
  const composition_span = 'font-semibold text-black-100'
  const composition_description = 'text-14 leading-[170%] text-center text-pink-100'
  const composition_description_xl = 'lg:text-16 lg:text-left lg:leading-[175%]'
  return(
    <>
      <article className="title__container flow__title">
        <h1 className={`title  ${composition_h1} ${composition_h1_xl}`}>
          We&apos;re<br/> <span className={`${composition_span}`}>coming soon</span> 
        </h1>
        <p className={`${composition_description} ${composition_description_xl}`}>
          Hello fellow shoppers! We&apos;re currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </article>
    </>
  )
}

export default Title