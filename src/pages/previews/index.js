import React from "react";
import Link from "next/link";
import { sanityClient } from "../../../lib/sanityClient";

export default function Previews({ menuList }) {
  return (
    <div className="w-full m-auto max-w-md flex flex-col gap-5 mt-20">
      {menuList.map((i) => {
        return (
          <Link href={`/previews/${i.slug.current}`} key={i._id}>
            <button className="border border-slate-700 rounded-lg px-5 py-3 w-full hover:text-white hover:bg-slate-700">
              {i.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const queryMenu =
    "*[_type == 'illustration']{_id, _createdAt, slug, name, status }|order(_createdAt asc)";
  const menuList = await sanityClient.fetch(queryMenu);

  return {
    props: {
      menuList: menuList,
    },
    revalidate: 3600,
  };
}
