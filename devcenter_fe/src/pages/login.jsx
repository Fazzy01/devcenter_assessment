import { FormField } from '../components/form_field'
import { AuthLayout } from '../components/auth_layout'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../shared/Button'
import { useMutateLogin } from '../lib/models/auth/hooks';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const {isPending, mutate: onMutateLogin } = useMutateLogin({});
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();


        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData);
        console.log(values)

        if (!values.email || !values.password ) {
            toast.error("All fields are required");
            return;
        }

        setIsLoading(true);
        onMutateLogin(values, {
            onSuccess: (response) => {
                setIsLoading(false);
                toast.success("Login successfully");
                // setCookie()
                // console.log(response); access_token
                navigate('/dashboard');
            },
            onError: (error) => {
                console.log(error)
                setIsLoading(false);
                toast.error(error.toString());
            },
        });
    }

  return (
    <AuthLayout
      title="Login"
      subtitle="Enter your details to access your account."
      alternativeActionText="Are you a retiree without an account?"
      alternativeActionLink="/register"
    >
      <form className="space-y-1" action="#" onSubmit={onSubmit}>
        <div className='space-y-6'>
        <FormField id="email" name="email" label="Email Address" type="email" required autoComplete="email" />

        <FormField id="password" name="password" label="Password" type="password" required />

        </div>

        <div className="flex items-center justify-between ">
          <div className="text-sm mb-8">
            <Link href="/forgot-password" className="font-medium text-green-600 hover:text-green-500">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className=''>
           <Button
              text={isLoading ? 'Loading...' : 'Login'}
              width='w-full'
              padding='py-[0.6rem] px-[1rem]'
              type='submit'
            />
        </div>
      </form>
    </AuthLayout>
  )
}