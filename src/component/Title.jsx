const Title = () =>{
  const composition_h1 = 'text-[40px] text-pink-100 font-light leading-[100%] tracking-[10.83px] text-center uppercase' 
  const composition_span = 'font-semibold text-black-100'
  return(
    <>
      <article className="flow__title">
        <h1 className={`title ${composition_h1}`}>
          We&apos;re<br/> <span className={`${composition_span}`}>coming soon</span> 
        </h1>
        <p className="text-[14px] leading-[170%] text-center text-pink-100">
          Hello fellow shoppers! We&apos;re currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </article>
    </>
  )
}

export default Title