import Rive from "@rive-app/react-canvas";
import Head from "next/head";
import { useState } from "react";


export default function Preview() {

    return (
        <>
            <Head>
                <title>FATJOE July 2024</title>
                <meta name="description" content="Preview" />
            </Head>
            <div className="flex flex-col relative">
                <div className="w-full m-auto max-w-[1440px]">

                </div>

                <div className="p-2 w-full max-w-[1440px] m-auto">
                    <div className="bg-[#14131A]  p-10 lg:h-[720px] rounded-xl flex flex-col md:flex-row items-center justify-start lg:justify-between">
                        <div className="p-10 lg:p-14">
                            <p className="font-poppins text-md lg:text-lg text-center lg:text-left text-white">
                                PREVIEW
                            </p>
                            <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-white text-center lg:text-left max-w-lg leading-[1.2]">
                                Combined Services
                            </h1>
                        </div>
                        <div className="">
                            <Rive
                                src="https://res.cloudinary.com/imagestash/raw/upload/v1720087003/Personal/fatjoe-july-2024-2_lxbxiy.riv"
                                className="w-[320px] h-[320px] lg:w-[520px] lg:h-[520px]"
                            />
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
