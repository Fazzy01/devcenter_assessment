import { useMutation } from "@tanstack/react-query";
import { backendFetch } from "../../core/clients";

export const useMutateRegister = ({options}) => {
    const register = (data) =>
        backendFetch({
            endpoint: "/user/create/",
            body: data,
            method: "POST",
        });
    return useMutation({
        mutationFn: register,
        ...options,
    });

};
export const useMutateLogin = ({options}) => {
    const login = (data) =>
        backendFetch({
            endpoint: "/auth/login/",
            body: data,
            method: "POST",
        });
    return useMutation({
        mutationFn: login,
        ...options,
    });
};