import Navbar from '@/layouts/Navbar';
import { Head } from '@inertiajs/react';

export default function Anasayfa({
    profile_infos,
    info,
}: {
    profile_infos: {
        name: string;
        surname: string;
    };
    info: string;
}) {
    return (
        <>
            <Head title={info}></Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <Navbar></Navbar>
                <div className="flex w-full items-center justify-center bg-amber-300 opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full flex-col-reverse lg:max-w-4xl lg:flex-row">
                        {info}
                        <h1>
                            {profile_infos.name} {profile_infos.surname}
                        </h1>
                    </main>
                </div>
                <div className="mt-2 hidden h-14.5 w-full bg-amber-300 lg:block"></div>
            </div>
        </>
    );
}
