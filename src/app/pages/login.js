'use client'
import {useRouter} from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        router.push('/Dashboard');
    };

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex w-[720px] flex-col justify-center items-center max-w-lg p-10 bg-gray-900 text-white">
                <h1 className="text-3xl font-semibold mb-2">Hello, <span
                    className="text-cyan-400">Digital Fortress</span></h1>
                <p className="mb-6 text-gray-400">Log in to platform to start creating magic.</p>

                <form className="space-y-4 w-full" onSubmit={handleLogin}>
                    <div>
                        <label className="block mb-1 text-gray-400">Email</label>
                        <div
                            className="flex items-center border rounded-md bg-gray-800 focus-within:ring-2 focus-within:ring-cyan-500">
                            <span className="px-3 text-gray-400">@</span>
                            <input
                                type="email"
                                className="w-full px-3 py-2 bg-transparent outline-none text-white"
                                placeholder="candidate.digitalfortress@gmail.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-400">Password</label>
                        <div
                            className="flex items-center border rounded-md bg-gray-800 focus-within:ring-2 focus-within:ring-cyan-500">
                            <span className="px-3 text-gray-400">🔒</span>
                            <input
                                type="password"
                                className="w-full px-3 py-2 bg-transparent outline-none text-white"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-gray-400">
                            <input type="checkbox" className="form-checkbox bg-gray-800 text-cyan-500"/>
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-cyan-400 hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full py-2 bg-[#B6F09C] text-gray-900 rounded-md hover:bg-cyan-600 transition">
                        Log in
                    </button>
                </form>

                <div className="mt-6 text-center text-gray-400">
                    Don&apos;t have an account? <a href="#" className="text-cyan-400 hover:underline">Sign Up</a>
                </div>
            </div>

            <div className=" items-center justify-center relative  bg-cover bg-center bg-[url('/images/image1.png')]">
                <div
                    className="bg-black h-full bg-opacity-60 p-10 rounded-lg text-white max-w-md flex flex-col gap-6 justify-end bg-[url('/images/image1.png')]">
                    <p className="text-2xl text-white text-[20px] font-bold ">Digital Fortress has been a game-changer
                        for our content
                        creation process.</p>
                    <p className="text-2xl text-white text-[20px] font-bold ">The AI-powered tools are incredibly
                        user-friendly and have
                        saved us countless hours of work.</p>
                    <div className="text-left">
                        <p className="text-sm text-white font-bold text-[20px] mb-1">Lily Alisson</p>
                        <p className="text-sm text-[#B6F09C]">CMO at Digital Fortress</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
