import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import kenneth from '../public/kenneth_profile.png'
import { useState } from 'react'

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Kenneth Lek's Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                <section className="min-h-screen">
                    <nav className='py-10 mb-12 flex justify-between'>
                        <h1 className='text-xl font-burtons dark:text-white'>Kenneth</h1>
                        <ul className='flex items-center'>
                            <li>
                                <BsFillBrightnessHighFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                            </li>
                            <li>
                                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:from-slate-50 dark:to-slate-400 dark:text-black' href='/about'>Experiences</a>
                            </li>
                        </ul>
                    </nav>

                    <div className='text-center px-10 pb-10'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Kenneth Lek Qi Yu</h2>
                        <h3 className='text-2xl py-2 md:text-4xl dark:text-white'>Technical Product Consultant</h3>
						<h4 className='text-xl py2 md:text-3xl dark:text-white'>Moody's Analytics</h4>
                        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>A tech enthuasiast that has multiple interests in different fields. Software engineering, Data engineering & Data Science. Currently still trying to figure out and plan my career path.</p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
                        <a href='https://www.linkedin.com/in/kenneth-lek-qi-yu/'><AiFillLinkedin/></a>
                        <a href='https://github.com/kennethlekk'><AiFillGithub/></a>
                    </div>
                    <div className='relative flex justify-center'>
                        <Image className='rounded-full h-80 w-80 mt-20 md:h-96 md:w-96'  src={kenneth}/>
                    </div>
                </section>

				<section>
					<div className='text-center p-10'>
						<h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
						<p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
							I have completed several projects throughout my time in school. Additionally, I like to work on side projects that interests me in my free time.
						</p>
					</div>
					<div className='lg:flex gap-10 '>
						<div className='text-center shadow-lg p-10 rounded-xl my-10 basis-1/2 dark:bg-white' >
							<a href='https://github.com/Alvan-Tan/chris.py_cream'><AiFillGithub className='text-5xl mx-auto'/></a>
							<h3 className='text-lg font-medium pt-8 pb-2'>E-learning Portal Web Application</h3>
							<p className='py-2'>Modelled database for an e-learning portal for engineers. Developed interactive user interface for the portal using API endpoints with a microservice architecture</p>
							<h4 className='py-4 text-teal-600'>Tech Stack</h4>
							<p className='text-gray-800 py-1'>VueJs</p>
							<p className='text-gray-800 py-1'>Python</p>
							<p className='text-gray-800 py-1'>Flask</p>
							<p className='text-gray-800 py-1'>SqlAlchemy</p>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl my-10 basis-1/2 dark:bg-white'>
							<a href='https://github.com/kennethlekk/portfolio_optimisation'><AiFillGithub className='text-5xl mx-auto'/></a>
							<h3 className='text-lg font-medium pt-8 pb-2'>Portfolio Optimisation</h3>
							<p className='py-2'> Finding optimal portfolio weightage from set of randomly picked 30 stocks from the list of top 100 ESG stocks. </p>
							<h4 className='py-4 text-teal-600'>Tech Stack</h4>
							<p className='text-gray-800 py-1'>Pandas </p>
							<p className='text-gray-800 py-1'>Numpy</p>
							<p className='text-gray-800 py-1'>Pyfolio</p>
						</div>
					</div>
				</section>
            </main>
        </div>
    )
}
