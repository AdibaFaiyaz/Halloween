import './App.css'

function App() {

  return (
    <>
      <nav className='bg-gray-800 text-white flex text-sm justify-between xl:text-xl'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jack-o%27-Lantern_2003-10-31.jpg/800px-Jack-o%27-Lantern_2003-10-31.jpg" className="h-12 pt-3 px-3 rounded-xl" alt="" />
        <ul className='px-5 py-4 flex space-x-10 xl:px-20 '>
          <li className='cursor-pointer hover:text-orange-400'>Home</li>
          <li className='cursor-pointer hover:text-orange-400'>About</li>
          <li className='cursor-pointer hover:text-orange-400'>Contact</li>
        </ul>
      </nav>
      <main>
        <div className='main bg-gray-900  flex justify-center flex-col text-center  text-white content-center '>
          <div className='text-3xl py-10 text-white font-bold xl:text-4xl hover:text-purple-500'>Spooky Season is Here!</div>
          <div className="w-[80vw] max-w-md mx-auto h-[45vh] border border-gray-60 rounded-lg p-5 backdrop-blur-sm py-5 bg-white/30 flex justify-center xl:w-full xl:h-[80vh]">
            <img src="https://images.unsplash.com/photo-1540427969750-1424f2fa0af8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFsbG93ZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" className='rounded-2xl h-[40vh] xl:h-[75vh]' alt="" />
          </div>
          <div className='flex justify-center p-16' >
          <div className='w-[80vw] font-serif text-sm xl:text-2xl content-center text-center'>
            As the leaves turn crimson and the crisp breeze carries the scent of pumpkin spice, a certain enchantment takes hold of the world. It's that time of year when we welcome the mysterious, the eerie, and the supernatural with open arms. Spooky season, as it's affectionately known, is a time to revel in the thrill of all things macabre, a prelude to the grandeur of Halloween. In this guide, we'll delve into the essence of spooky season, exploring its history, traditions, and the myriad ways to fully embrace this bewitching time of year.
          </div>
          </div>
          <div className='flex justify-center xl:h-full pb-16'>
          <img src="https://i.pinimg.com/originals/32/cd/0b/32cd0bb0462704dab050067adb1de597.gif" alt="" className='h-4/5 xl:w-[30vw]' />
          {/* <img src="https://giffiles.alphacoders.com/158/15899.gif" alt="" className='w-4/5 xl:w-[30vw]'/> */}
          </div>
        </div>      
      </main>
    </>
  )
}

export default App
