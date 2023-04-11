import { useState } from "react";

export default function preview() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="flex relative">
      <div className="w-[320px] p-4 fixed left-0 top-0">
        <ul className="bg-slate-100 p-2 rounded-md">
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </div>
      <div className="ml-[320px] mr-[320px] bg-yellow-50 p-4 w-full">
        <div className="bg-[#14131A]">
          <img src="" alt="your image" className="w-full" />
        </div>
      </div>

      <div className="w-[320px] h-[100vh] bg-slate-100 p-4 fixed right-0 top-0">
        <h3>Comment</h3>
      </div>
    </div>
  );
}

{
  /* <Transition
        show={showComments}
        enter="transition-transform ease-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed top-0 right-0 w-1/4 h-full bg-yellow-500 p-4 z-10"
      >
        {(ref) => (
          <div ref={ref}>
            <button onClick={() => setShowComments(!showComments)}>
              Hide Comments
            </button>
            <ul>
              <li>Comment 1</li>
              <li>Comment 2</li>
              <li>Comment 3</li>
            </ul>
          </div>
        )}
      </Transition>
      <button
        className="fixed top-0 right-0 w-[320px]"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide" : "Show"} Comments
      </button> */
}
