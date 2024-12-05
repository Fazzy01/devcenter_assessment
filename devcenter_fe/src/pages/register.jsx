import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/auth_layout";
import { FormField } from "../components/form_field";
import { useMutateRegister } from "../lib/models/auth/hooks";
import Button from "../shared/Button";

export default function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const {isPending, mutate: onMutateRegister } = useMutateRegister({});
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData);

        if (!values.email || !values.password || !values["confirm_password"] || !values["pin"] || !values.surname) {
            toast.error("All fields are required");
            return;
        }

        if (values.password !== values["confirm_password"]) {
            toast.error("Passwords do not match");
            return;
        }
        const {confirm_password , ...payload} = values;

        onMutateRegister(payload, {
            onSuccess: (response) => {
                setIsLoading(false);
                toast.success("Registered successfully");
                navigate('/login');
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
            title="Register"
            subtitle="Enter your details to start your pension process"
            alternativeActionText="Already have an account or are not a retiree?"
            alternativeActionLink="/login"
        >
            <form className="space-y-6 max-w-screen-sm" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-y-[1rem] w-full">
                    <FormField id="pin" name="pin" label="RSA Pin" type="password" placeholder="xxxxxx" required />
                    <FormField id="surname" name="surname" label="Surname" type="text" placeholder="Surname" required />
                    <FormField id="email" name="email" label="Email Address" type="email" required placeholder="Your email address" autoComplete="email" />
                </div>
                <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[180px_180px] gap-x-[1rem] gap-y-[1rem] max-w-screen-sm">
                    <FormField id="password" name="password" label="Password" type="password" placeholder="Your password" required helpText="Help text" />
                    <FormField id="confirm_password" name="confirm_password" label="Confirm Password" type="password" placeholder="Confirm Password" required />
                </div>

                <div>
                    <Button
                        text={isLoading ? 'Loading...' : 'Register'}
                        width='w-full'
                        padding='py-[0.6rem] px-[1rem]'
                        type='submit'
                        disabled={isLoading}
                    />
                </div>
            </form>
        </AuthLayout>
    )
}

