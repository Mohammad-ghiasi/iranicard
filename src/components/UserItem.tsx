import { User } from "@/types/userType";

export default function UserItem({user} : {user: User}) {
    console.log(user);
    
    return (
        <div
            className="flex flex-col gap-y-2 p-4 border border-primary-40 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all hover:bg-primary-40"
        >
            <p className="text-sm text-base-80"><span className="">نام: </span><span>{user.name}</span></p>
            <p className="text-sm text-base-80"><span className="">ایمیل: </span><span>{user.email}</span></p>
            <p className="text-gray-400 text-xs mt-1">
                ثبت‌نام: {new Date(user.created_at).toLocaleDateString('fa-IR')}
            </p>
        </div>

    );
}
