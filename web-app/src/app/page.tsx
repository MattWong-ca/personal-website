
export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="bg-blue-500 w-3/5">
        {/* Content for the 60% width column */}
        <div className="mt-50 ml-25">
          {/* New container with 50px padding */}
          <h1 className="text-5xl font-bold">MATT WONG</h1>
          <p className="text-xl">Entrepreneurial software developer studying biomedical engineering @ UWaterloo</p>
          <p>EXPERIENCE</p>
          <p>&gt; ExaCare</p>
          <p>ACCOMPLISHMENTS</p>
          <p>&gt; Academic</p>
        </div>
      </div>
      <div className="bg-red-500 flex-1 flex items-center justify-center">
        {/* Content for the 40% width column */}
        <div className="w-100 h-300 border-4 border-black rounded-xl flex items-center justify-center">
          {/* Centered div with black outline */}
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}
