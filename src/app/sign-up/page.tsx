'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import FloatInput from '@/components/ui/Input';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { loginSchema } from '@/yup/loginResolver';
import { setCookie } from '@/utils/cookies';

type LoginFormInputs = {
    phone: string;
    password: string;
};

export default function LoginPage() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            // send req
            const res = await fetch("https://main-api.ir-xe.com/api/v1/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mobile: data.phone,
                    password: data.password,
                }),
            });
            const result = await res.json();

            // if faild
            if (!res.ok) {
                toast.error(result?.message || "مشکلی پیش اومده", {
                    closeButton: false,
                });
                return;
            }

            const isLogin = await fetch("https://main-api.ir-xe.com/api/v1/authentication-status", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (isLogin.ok == true) {
                toast.success(result?.message || "با موفقیت وارد شدید", {
                    closeButton: false,
                });
                setCookie("full_name", result.data.full_name, 7);
                window.location.href = "/";
            }

        } catch (err) {
            console.error("Unexpected error:", err);
            toast.error("مشکل در اتصال به سرور", {
                closeButton: false,
            });
        }
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center md:min-h-screen mt-10 md:mt-0 px-4 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-sm bg-white md:p-6 rounded-xl shadow-none md:shadow-md space-y-5"
                >
                    <div className="flex gap-x-1 items-center justify-center my-10 ">
                        <img
                            src="/images/logo/icon.svg"
                            alt="My Icon"
                            className="w-[23.59px] h-[21.75px] md:w-[28px] md:h-[25.83px]"
                        />
                        <img
                            src="/images/logo/textLogo.svg"
                            alt="My Text Logo"
                            className="w-[83.98px] h-[17.99px] md:w-[99.69px] md:h-[21.36px]"
                        />
                    </div>
                    <div className="">
                        <p className='mb-5'>ورود | ثبت نام</p>
                        <p className='text-sm text-base-60'>سلام!</p>
                        <p className='text-sm text-base-60'>لصلفا شماره تلفن و رمز عبور را وارد کنید</p>
                    </div>
                    <div className="flex flex-col ">
                        <FloatInput type='text' label='شماره تلفن'    {...register('phone')} error={errors.phone?.message} />
                    </div>

                    <div className="flex flex-col">
                        <FloatInput type='password' label='رمز عبور'  {...register('password')} error={errors.password?.message} />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary-100 hover:bg-primary-200 text-white font-bold py-2 rounded-lg transition-all"
                    >
                        ورود
                    </button>
                </form>
            </div>
            {/* toast ToastContainer */}
            <ToastContainer />
        </>
    );
}
