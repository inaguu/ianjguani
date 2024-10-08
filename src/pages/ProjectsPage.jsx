
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
                                    <h3 class="my-2 ml-3 mr-3 text-lg font-bold text-gray-800">MRAD</h3>
                                    <a href="https://github.com/inaguu/comp4800_MRAD">
                                        <svg className='inline-block h-[20px] w-[20px]' viewBox='0 0 16 16' fill='var(--accent-text)'>
                                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex items-center -mt-1">
                                    <h6 className="my-2 ml-3 font-bold text-gray-800">Developer</h6>
                                    <h6 className="my-2 ml-1 font-bold">|</h6>
                                    <h6 className="my-2 ml-1 font-bold text-gray-600">Student Randomizer for Hospitals</h6>
                                </div>

                                <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">A simple web application for BCIT's Medical Radiography program to randomly assign students to hospitals
                                    for their practicum semesters.</p>

                                <h6 className="font-bold text-gray-800">Tools:</h6>
                                <p class="mb-2 text-gray-600">HTML, EJs, JavaScript, Tailwind, MySQL, Node.js</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 mr-3 text-lg font-bold text-gray-800">Personal Website</h3>
                                    <a href="https://github.com/inaguu/ianjguani">
                                        <svg className='inline-block h-[20px] w-[20px]' viewBox='0 0 16 16' fill='var(--accent-text)'>
                                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex items-center -mt-1">
                                    <h6 className="my-2 ml-3 font-bold text-gray-800">Developer</h6>
                                    <h6 className="my-2 ml-1 font-bold">|</h6>
                                    <h6 className="my-2 ml-1 font-bold text-gray-600">Portfolio</h6>
                                </div>

                                <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">A personal portfolio website to display my skills and projects.</p>

                                <h6 className="font-bold text-gray-800">Tools:</h6>
                                <p class="mb-2 text-gray-600">React, Tailwind, JSX, Node.js</p>
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
                                    <h3 class="my-2 ml-3 mr-3 text-lg font-bold text-gray-800">Sushi Maker</h3>
                                    <a href="https://github.com/krispyrendang/COMP4921_Project1_Group8_Tas_Ian">
                                        <svg className='inline-block h-[20px] w-[20px]' viewBox='0 0 16 16' fill='var(--accent-text)'>
                                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex items-center -mt-1">
                                    <h6 className="my-2 ml-3 font-bold text-gray-800">Developer</h6>
                                    <h6 className="my-2 ml-1 font-bold">|</h6>
                                    <h6 className="my-2 ml-1 font-bold text-gray-600">Imgur meets Bit.ly meets Pastebin</h6>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">A simple web application that combines the features of Imgur, Bit.ly, and Pastebin.</p>

                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">HTML, CSS, EJs, MySQL, Node.js</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 mr-3 text-lg font-bold text-gray-800">BC REPIT</h3>
                                    <a href="https://github.com/samueljsong/COMP7082-s/tree/master">
                                        <svg className='inline-block h-[20px] w-[20px]' viewBox='0 0 16 16' fill='var(--accent-text)'>
                                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex items-center -mt-1">
                                    <h6 className="my-2 ml-3 font-bold text-gray-800">Developer</h6>
                                    <h6 className="my-2 ml-1 font-bold">|</h6>
                                    <h6 className="my-2 ml-1 font-bold text-gray-600">Damage Report</h6>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">A client-server damage report web application that centralizes BCIT's current damage report system.</p>

                                <h6 className="font-bold text-gray-800">Info:</h6>
                                <p class="mb-2 text-gray-600">React, JSX, Node.js, Cypress, MySQL</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="w-full sm:w-1/2">
                        <div class="relative h-full ml-0 md:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div class="flex items-center -mt-1">
                                    <h3 class="my-2 ml-3 mr-3 text-lg font-bold text-gray-800">fix it</h3>
                                    <a href="https://github.com/">
                                        <svg className='inline-block h-[20px] w-[20px]' viewBox='0 0 16 16' fill='var(--accent-text)'>
                                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex items-center -mt-1">
                                    <h6 className="my-2 ml-3 font-bold text-gray-800">Developer</h6>
                                </div>
                                <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                    that eliminate a large amount of manual work and accelerate the development process.</p>
                            </div>
                        </div>
                    </div> */}
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