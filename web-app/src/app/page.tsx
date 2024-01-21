
export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="bg-blue-500 w-3/5">
        {/* Content for the 60% width column */}
        <div className="mt-50 ml-25">
          {/* New container with 50px padding */}
          <h1 className="text-5xl font-bold">MATT WONG</h1>
          <p className="text-xl">Software Developer. Studying Biomedical Engineering at the University of Waterloo.</p>
          <p>EXPERIENCE</p>
          <p>&gt; ExaCare</p>
          <p>ACCOMPLISHMENTS</p>
          <p>&gt; Academic</p>
        </div>
      </div>
      <div className="bg-red-500 flex-1 flex items-center justify-center border-l-4 border-black">
        {/* Content for the 40% width column */}
        <div className="w-100 h-300 border-4 border-black rounded-70 flex items-center justify-center bg-cover"
          style={{ backgroundImage: `url('https://i.pinimg.com/736x/30/86/1b/30861b54751c4f458c0054fb500dc76e.jpg')` }}>
          {/* Centered div with black outline */}
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}
