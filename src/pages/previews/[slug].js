import { sanityClient } from "../../../lib/sanityClient";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import CommentBar from "@/components/CommentBar";
import classNames from "classnames";

const LeftSidebar = ({ menuList, menuShow, toggleMenu }) => {
  const router = useRouter();
  // console.log(router.asPath);

  const sidebarLeftClasses = classNames(
    "w-[80vw] md:w-[420px] fixed inset-y-0 left-0 transition-transform duration-300  ease-in-out transform bg-slate-100 p-4 rounded-r-lg drop-shadow-2xl",
    {
      "translate-x-0": menuShow,
      "-translate-x-full": !menuShow,
    }
  );

  return (
    <div className={sidebarLeftClasses}>
      <div className="flex justify-between items-center mb-5">
        <p className="font-bold uppercase text-sm text-slate-600">Navigation</p>
        <button onClick={toggleMenu} className="bg-red-100 p-2 rounded-md">
          <img className="w-4 " src="/icon/ic-close.svg" alt="close icon" />
        </button>
      </div>
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

export default function Preview({ illustration, menuList, riveFile }) {
  const convertDate = (inputDate) => {
    let date = new Date(inputDate);
    let options = { month: "long", day: "2-digit" };
    let formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(date);
  };

  // console.log(riveFile[0].riveFile);

  const [menuShow, setMenuShow] = useState(false);
  const toggleMenu = () => {
    setMenuShow(!menuShow);
  };

  const [commentShow, setCommentShow] = useState(false);
  const toggleComment = () => {
    setCommentShow(!commentShow);
  };

  return (
    <>
      <Head>
        <title>{`Preview: ${illustration.name}`}</title>
        <meta name="description" content={`Preview: ${illustration.name}`} />
      </Head>
      <div className="flex flex-col relative">
        <LeftSidebar
          menuList={menuList}
          menuShow={menuShow}
          toggleMenu={toggleMenu}
        />
        <div className="w-full m-auto max-w-[1440px]">
          <div className="mx-2 mt-2 mb-1 h-20 flex gap-5 items-center rounded-xl">
            <button
              className="cursor-pointer bg-slate-100 flex gap-3 items-center p-3 rounded-md hover:bg-slate-200"
              onClick={() => setMenuShow(!menuShow)}
            >
              <img src="/icon/ic-list.svg" alt="icon list" className="w-5" />
              <p>List</p>
            </button>

            <button
              className="cursor-pointer bg-slate-100 flex gap-3 items-center p-3 rounded-md hover:bg-slate-200"
              onClick={() => setCommentShow(!commentShow)}
            >
              <img src="/icon/ic-comment.svg" alt="icon list" className="w-5" />
              <p>Comment</p>
            </button>
          </div>
        </div>

        <div className="p-2 w-full max-w-[1440px] m-auto">
          <div className="bg-[#14131A]  p-10 lg:h-[720px] rounded-xl flex flex-col md:flex-row items-center justify-start lg:justify-between">
            <div className="p-10 lg:p-14">
              <p className="font-poppins text-md lg:text-lg text-center lg:text-left text-white">
                PREVIEW
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-white text-center lg:text-left max-w-lg leading-[1.2]">
                {illustration.name}
              </h1>
            </div>
            <div className="">
              {riveFile[0].riveFile !== null ? (
                <Rive
                  src={`${riveFile[0].riveFile}`}
                  className="w-[380px] h-[380px] lg:w-[520px] lg:h-[520px]"
                />
              ) : (
                <Rive src="/wip.riv" className=" w-[520px] h-[520px]" />
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
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
                  <p className="text-slate-400">
                    {" "}
                    Rive file isn't available yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <CommentBar
          section={illustration.slug.current}
          commentShow={commentShow}
          toggleComment={toggleComment}
        />
      </div>
    </>
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
