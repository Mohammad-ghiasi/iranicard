'use client';

import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import BodyProvider from '../providers/BodyProvider';
import { User } from '@/types/userType';
const UserItem = dynamic(() => import('@/components/UserItem'), { ssr: true })


export default function UsersPage() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://json.xstack.ir/api/v1/users`);
            if (!res.ok) throw new Error('خطا در دریافت کاربران');
            return res.json();
        },
    });
    


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-primary-100 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) return <div className="p-4 text-red-500">خطا در دریافت اطلاعات</div>;

    return (
        <BodyProvider>
            <h1 className="text-xl font-bold mb-6">لیست کاربران</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
                {data.data.map((user: User, index: number) => (
                    <UserItem user={user} key={index} />
                ))}

            </div>
        </BodyProvider>
    );
}
