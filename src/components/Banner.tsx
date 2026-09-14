// import bannerImg from '/assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="container mx-auto mt-30 grid grid-cols-2 gap-10">
            <div className="mt-15">
                <h1 className="flex flex-col gap-2">
                    <span className="text-5xl font-bold">Build Your Ideal</span>
                    <span className="text-5xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent ">Development Stack</span>
                </h1>
                <p className="line-clamp-3 my-4">Explore frontend, backend, database, and tooling options,
                    <br />
compare them side by side, and put together the stack 
<br />
that fits your
next project.</p>
                <div className="my-10 flex gap-6">
                  <button className="rounded p-2 font-bold w-45 h-10 bg-linear-to-t from-purple-500 to-orange-500">Explore Technologies</button>
                  <button className="border-2 font-bold h-10 p-2 shadow-2xl rounded">Learn More</button>
                </div>
              
            </div>
            <div> <img src="/assets/banner-stack.png" alt="" /></div>
        </div>
    );
};

export default Banner;