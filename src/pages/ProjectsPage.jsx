
function ProjectPage() {
    return (
        <div class="container relative flex flex-col justify-start h-[91%] max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Projects</h2>
            <p class="mb-12 text-lg text-gray-500">Here are the acedemic projects and the personal projects I have worked on.</p>
            <div class="w-full">
                <div class="flex flex-col w-full mb-10 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                                    decentralized network that combines a smart contract and a frontend user interface.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                                    focus on understanding and analyzing data to provide a semantic web.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full mb-5 sm:flex-row">
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                                    to assess the extent up to which project management standards are being upheld.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                                    defenses and exploiting weaknesses in a computer system or network.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                    that eliminate a large amount of manual work and accelerate the development process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        // <div id='content' className='flex h-[93%] justify-center items-center'>
        //     <div className="flex-row flex-none flex-wrap">
        //         <a href="/" class="m-1 block w-[750px] h-[216px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Developer | Sushi Thread</h5>

        //             <a href="https://github.com" className="text-blue-700 underline truncate">https://github.com/inaguu/COMP4921_Project2_Group10_Tas_Ian</a>

        //             <p class="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //         </a>
        //     </div>

        // </div>
    );
}

export default ProjectPage;