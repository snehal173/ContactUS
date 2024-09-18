


const Buttons = (props) => {

  return (
    <div>
      <button onClick={props.onClick} className={props.isoutline ? "bg-white text-black flex justify-center items-center text-base rounded-[5px] min-h-[30px]  min-w-[200px] px-[10px] py-[18] border border-black w-full gap-2" 
        :"flex justify-center  bg-[#000000] text-white items-center gap-2 min-w-[200px] min-h-[30px] px-[10px] py-[18] rounded-[5px] mb-4" }>
      {props.icon}
      {props.text}
      
      </button>
     
     
    </div>
  )
}

export default Buttons