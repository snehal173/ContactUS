

const Navbar = () => {
  return (
    <div >
       <div className='flex justify-between width-[1440px] height-[72px] items-center mx-6'>
       <img  src="/images/logo.png" alt="logo" />
        <div className='flex gap-3.5'>
            <h4 className="font-semibold text-base">HOME</h4>
            <h4 className="font-semibold text-base">ABOUT</h4>
            <h4 className="font-semibold text-base">CONTACT</h4>
        </div>
       </div>
    </div>
  )
}

export default Navbar