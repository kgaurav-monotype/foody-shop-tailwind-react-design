import React, { useState } from 'react';

const Header = () => {
    const [active, setActive] = useState(false);
    const [mobile] = useState(false);
    return <>
        <div className='text-gray-600 bg-gray-100 !font-nunito grid md:grid-cols-4'>
            <div className='bg-gray-900 text-white'>
                <nav className='md:col-span-1  sticky top-4'>
                    <div className='p-4 relative'>
                        <h1 className='text-2xl font-bold uppercase'>
                            <a href="/">Foody Shop</a>
                        </h1>
                        <div className='md:hidden px-4 absolute top-4 right-0 cursor-pointer' onClick={()=>setActive(!active)}>
                            {
                            !active ?
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            }
                        </div>
                    </div>
                    <div className={`${!mobile ? "md:block" : "hidden"} ${active ? "md:block" : "hidden"} transition ease-linear duration-500`}>
                    <ul className="flex flex-col">
                        <li className='flex border-l-4 border-gray-900 hover:border-red-600 mb-5 px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Home</span>
                        </li>
                        <li className='flex border-l-4 border-gray-900 hover:border-red-600 mb-5 px-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>About</span>
                        </li>
                        <li className='flex border-l-4 border-gray-900 hover:border-red-600 mb-5 px-4'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Contact</span>
                        </li>
                    </ul>
                    <div className='flex justify-start sm:flex-col lg:flex-row p-4'>
                        <a href="#" className='text-white bg-blue-600 btn sm:mb-4 lg:mb-0 border-2 border-transparent'>Log in</a>
                        <a href="#" className='text-white border-blur-600 border-2 btn ml-4 sm:ml-0 lg:ml-4'>Sign up</a>
                    </div>
                    </div>
                </nav>
            </div>

            <main className='py-6 px-4 md:col-span-3'>
                <header>
                    <h2 className='text-4xl text-gray-700 font-bold'>Recipes</h2>
                    <h3 className='text-1xl text-gray-400 font-light'>For Ninjas</h3>
                </header>

                <div>
                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest Recipes</h4>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1 mt-3'>
                        <div className='card'>
                            <img className='card-image' src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/traditional-spicy-thai-tom-yam-soup-picture-id187120370?k=20&m=187120370&s=612x612&w=0&h=KaeABX51wWUWjlsEwmiWTxy-cXmse9HeXPm0A6KB6Ww=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/tomato-red-pepper-soup-sauce-with-rosemary-picture-id492217652?k=20&m=492217652&s=612x612&w=0&h=b363o8uKpfNyUmI6Zng3m2mkPxFP2wcIY_xfdKctH5k=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/cream-soup-of-red-lentils-with-tomatoes-and-fried-wild-mushrooms-on-picture-id1180238552?k=20&m=1180238552&s=612x612&w=0&h=k9Ebg-a600RRynnCfAQPbpFOMVGWTLhaTf8mnSmkkQE=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/indian-food-and-spicy-spices-stylish-photos-for-the-menu-picture-id1248712871?k=20&m=1248712871&s=612x612&w=0&h=nZPxXbDuEVO5ScBmiR7nRjRRDwQl4voYe_vvbTnAtmo=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </div>

                    <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1 mt-3'>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/fresh-cocktail-juice-made-of-oranges-picture-id860455220?k=20&m=860455220&s=612x612&w=0&h=p3sQ71ArEkbaak9giX-68x9QPRPi45lajSCvHrmfZzg=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/refreshing-lemonade-with-ice-lime-and-mint-in-jar-picture-id827564914?k=20&m=827564914&s=612x612&w=0&h=uw3WU7WW0ck2r1PJaAZOuzbb0t53fEg3kD3NhoSOMYQ=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/cool-drink-with-fresh-fruit-and-ice-peppermint-peach-lemon-lime-picture-id1166893468?k=20&m=1166893468&s=612x612&w=0&h=oQ7z49MrGkmE0_Vg-wqFu1Jwbntb6vuTqlHg7G0q0ag=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/pizza-picture-id184946701?k=20&m=184946701&s=612x612&w=0&h=LRc4BfIMzP3QW9QKr5eria66F1ZeV2EY8xXeva-E6io=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                        <div className='card'>
                            <img className='card-image' src="https://media.istockphoto.com/photos/pepperoni-pizza-picture-id187248625?k=20&m=187248625&s=612x612&w=0&h=XA9vno3RjhQ6ETl4AkchN-PvMGKI5--9Xnk_k336pwk=" alt="stew" />
                            <div className='m-4'>
                                <span className='font-bold text-lg'>5 Bean Chili Stew</span>
                                <span className='block text-sm'>Recipe by Mario</span>
                            </div>
                            <div className='card-badge flex'>
                                <span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg></span>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center my-10'>
                    <div className='btn inline-block bg-blue-600 text-white'>Load more</div>
                </div>
            </main>
        </div>
    </>;
};

export default Header;
