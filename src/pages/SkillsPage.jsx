
function SkillsPage() {
    return (
        <section className="flex h-[75%] items-center pt-28 overflow-hidden">
            <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-2">
                <h1 className="sm:text-7xl text-5xl font-main font-black uppercase mb-12 xl:mb-0">
                    About
                    <br></br>
                    <span className="relative inline-block w-32  mr-4 h-4 bg-gray-200">
                        <span className="absolute bottom-full w-16 h-4 bg-yellow-300"></span>
                    </span>
                    Me
                </h1>
                <div>
                    <p className="text-main font-semibold text-lg leading-relaxed text-gray-800">
                        Hey! I am currently a 1st year Applied Computer Science student at British Columbia Institute of Technology, interested in computer systems and network security.
                        <br></br>
                        <br></br>
                        I have a passion for learning and creating new things which I believe will help me strive in the field.
                    </p>
                    <h3 className="text-3xl font-main font-black uppercase mb-6">My Skills :</h3>
                    <ul className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4 ">
                        <li className="text-main text-xl text-gray-700">html/css</li>
                        <li className="text-main text-xl text-gray-700">javascript</li>
                        <li className="text-main text-xl text-gray-700">reactjs</li>
                        <li className="text-main text-xl text-gray-700">go</li>
                        <li className="text-main text-xl text-gray-700">sql</li>
                        <li className="text-main text-xl text-gray-700">java</li>
                        <li className="text-main text-xl text-gray-700">python</li>
                        <li className="text-main text-xl text-gray-700">tailwindcss</li>
                        <li className="text-main text-xl text-gray-700">expressjs</li>
                        <li className="text-main text-xl text-gray-700">mysql</li>
                        <li className="text-main text-xl text-gray-700">mongodb</li>
                        <li className="text-main text-xl text-gray-700">firebase</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SkillsPage;