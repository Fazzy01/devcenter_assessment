import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function AuthLayout({ children, title, subtitle, alternativeActionText, alternativeActionLink }) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
      };

  return (
    <>
    <div className='min-h-screen block md:grid grid-cols-12 p-2'>

        <div className='hidden md:grid col-span-4 bg-gray-100 rounded-[10px_2px_2px_10px] items-end self'>
            <div class="hidden md:block ">
                <img src="/assets/Group17.png" alt="CEOS_Investors_img"  className='object object-cover'/>
            </div>

        </div>

        <div className='col-span-8 flex flex-col justify-center mx-auto pt-10'>

            <div className="flex flex-col justify-start " lang="en">
                <div className=" sm:w-full sm:max-w-md  text-md-body">
                     <Link to="/">
                     <div  className="flex gap-2 text-gray-200 font-[500] cursor-pointer">
                        <ArrowLeft size={20} />
                        Back to home
                    </div>
                     </Link>
                    {/* text-start text-h2 md:text-md-h2 lg:text-lg-h2 */}
                    <h2 className="mt-3 text-3xl  font-extrabold text-gray-900">{title}</h2>
                    <p className="mt-2 text-start text-sm text-gray-600 ">{subtitle}</p>
                </div>

                <main className="mt-8 sm:w-full sm:max-w-md">
                    <div className=" w-full max-w-md mx-auto">
                    {children}
                    </div>
                    <p className="mt-2 text-center text-sm text-gray-600 text-md-small-caption">
                    {alternativeActionText}{' '}
                    <Link to={alternativeActionLink === '/register' ? '/register' : '/login'} className="font-medium text-green-600 hover:text-green-500">
                        {alternativeActionLink === '/login' ? 'Login here' : 'Register here'}
                    </Link>
                    </p>
                </main>

                <footer className="mt-28 text-center" role="contentinfo">
                    <p className="text-sm text-gray-500">Powered by StellarSync Technology © 2024 v.1.0.0</p>
                </footer>
            </div>

        </div>

    </div>

    </>

  )
}

