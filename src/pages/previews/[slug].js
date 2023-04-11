import { sanityClient } from "../../../lib/sanityClient";
import { useState } from "react";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useRouter } from "next/router";

import CommentBar from "@/components/CommentBar";

const LeftSidebar = ({ menuList }) => {
  const router = useRouter();
  // console.log(router.asPath);

  return (
    <div className="w-[320px] fixed left-0 top-0 bg-slate-100 p-4 rounded-xl m-2">
      <p className="font-bold uppercase text-sm text-slate-600 mb-2">
        NAVIGATION
      </p>
      <div className="pb-5 mb-1 border-b border-slate-400 flex gap-1">
        <div className="flex gap-1 items-center">
          <div className={`w-4 h-4 rounded-md bg-blue-500`}></div>
          <p className="text-sm">WIP</p>
        </div>
        <span className="text-slate-400">/</span>
        <div className="flex gap-1 items-center">
          <div className={`w-4 h-4 rounded-md bg-yellow-500`}></div>
          <p className="text-sm">Review</p>
        </div>
        <span className="text-slate-400">/</span>
        <div className="flex gap-1 items-center">
          <div className={`w-4 h-4 rounded-md bg-green-500`}></div>
          <p className="text-sm">Final</p>
        </div>
      </div>
      <ul className=" flex gap-2 flex-col mt-2">
        {menuList.map((i) => {
          let bgColor = "";

          switch (i.status) {
            case "wip":
              bgColor = "bg-blue-500";
              break;
            case "review":
              bgColor = "bg-yellow-500";
              break;
            case "final":
              bgColor = "bg-green-500";
              break;
          }

          return (
            <a href={`/previews/${i.slug.current}`} key={i._id}>
              <li
                className={
                  router.asPath === `/previews/${i.slug.current}`
                    ? "flex gap-3 items-center h-12 p-2 rounded-md  bg-white"
                    : "flex gap-3 items-center h-12 p-2 rounded-md hover:bg-slate-200"
                }
              >
                <div className={`w-4 h-4 rounded-md ${bgColor}`}></div>
                <p className="text-lg hover:text-slate-600">{i.name}</p>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default function preview({ illustration, menuList, riveFile }) {
  const convertDate = (inputDate) => {
    let date = new Date(inputDate);
    let options = { month: "long", day: "2-digit" };
    let formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  // console.log(riveFile[0].riveFile);

  return (
    <div className="flex relative">
      <LeftSidebar menuList={menuList} />

      <div className="ml-[328px] mr-[320px] p-2 w-full">
        <div className="bg-[#14131A] h-[720px] rounded-xl flex items-center justify-between">
          <div className="p-14">
            <p className="font-poppins text-lg text-white">PREVIEW</p>
            <h1 className="text-6xl font-bold font-poppins text-white max-w-lg">
              {illustration.name}
            </h1>
          </div>
          <div className=" m-10">
            <Rive
              // src={`/${illustration.fileRef}.riv`}
              src={`${riveFile[0].riveFile}`}
              className=" w-[520px] h-[520px]"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-slate-100 p-4 mt-2 rounded-xl">
            <p className="font-bold uppercase text-sm text-slate-600 mb-2">
              Update history:
            </p>
            <ul>
              {illustration.updateHistory.map((i) => {
                return (
                  <li key={i._key} className="flex flex-col gap-1">
                    <p>
                      <strong>{convertDate(i.date)}</strong> - {i.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-slate-100 flex-1 p-6 mt-2 rounded-xl w-full">
            {riveFile[0].riveFile !== null ? (
              <a href={`${riveFile[0].riveFile}?dl=`}>
                <div className="bg-slate-700 w-fit h-12 px-3 flex gap-3 items-center justify-center rounded-md text-white">
                  <img
                    src="/icon/download_active.svg"
                    alt="download icon active"
                    className="w-4"
                  />
                  <p> Download Rive animation file</p>
                </div>
              </a>
            ) : (
              <div className="bg-slate-200  w-fit h-12 px-3 flex gap-3 items-center justify-center rounded-md">
                <img
                  src="/icon/download_inactive.svg"
                  alt="download icon active"
                  className="w-4"
                />
                <p className="text-slate-400"> Rive file isn't available yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CommentBar section={illustration.slug.current} />
    </div>
  );
}

export async function getStaticPaths() {
  const query = "*[_type == 'illustration']{ slug }";
  const slugs = await sanityClient.fetch(query);

  const paths = slugs.map((i) => ({
    params: { slug: i.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == 'illustration' && slug.current == '${params.slug}']`;
  const illustrationData = await sanityClient.fetch(query);

  const queryMenu =
    "*[_type == 'illustration']{_id, _createdAt, slug, name, status }|order(_createdAt asc)";
  const menuList = await sanityClient.fetch(queryMenu);

  const queryRive = `*[_type == 'illustration' && slug.current == '${params.slug}']{'riveFile': riv.asset->url }`;
  const riveFile = await sanityClient.fetch(queryRive);

  return {
    props: {
      illustration: illustrationData[0],
      menuList: menuList,
      riveFile: riveFile,
    },
    revalidate: 3600,
  };
}
