
const SetupPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen md:h-screen md:flex-row"> {/* flex */}
            {/* Left side description */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-8 bg-green-800"> {/* 33% space flex items center justify center some padding */}
                <h2 className="w-full text-left font-bold text-3xl text-white mb-8">Information Section</h2>
                <p className="font-thin text-white">Some description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur accusantium sequi ducimus eum quo quae illo doloribus voluptatem! Iste reiciendis vero voluptatibus explicabo quaerat similique maxime provident fuga voluptas!</p>
            </div>

            {/* Right side questions */}
            <div className="w-2/3 flex justify-center p-12"> {/* 66% space flex items center justify center some padding */}
                <div className="">
                    <h1 className="text-4xl font-bold mb-8">Setup Form</h1>
                    <div className="border rounded-2xl p-10">
                        <form> {/* Form */}
                            <label className="font-semibold">Some question</label>
                            <input />
                        </form>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa, culpa quaerat soluta fugiat, tenetur maiores hic mollitia animi illum illo quos, aliquid consequuntur eos id tempore fuga sint sed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetupPage