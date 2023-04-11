import db from "../../lib/firebaseConfig";
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function CommentBar({ section }) {
  const colRef = collection(db, `${section}-comment`);
  const q = query(colRef, orderBy("created", "asc"));

  const [comment, setComment] = useState([]);
  const [rawComment, setRawComment] = useState({ comment: "" });
  //   console.log(section);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addDoc(colRef, {
        ...rawComment,
        created: serverTimestamp(),
      });

      setRawComment("");
      console.log("success adding comment");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const deleteComment = async (id) => {
    try {
      deleteDoc(doc(colRef, id));
    } catch (error) {
      console.log(`Can't delete comment. Error ${error}`);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setComment(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          created: doc.data().created?.toDate().toLocaleDateString("en-GB"),
        }))
      );
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="w-[320px] h-[100vh] bg-slate-100 p-4 fixed right-0 top-0">
      <p className="font-bold uppercase text-sm text-slate-600 mb-2">
        Feedback
      </p>
      <form onSubmit={handleSubmit} className="mb-10">
        <textarea
          value={rawComment.comment}
          onChange={(e) =>
            setRawComment({ ...rawComment, comment: e.target.value })
          }
          placeholder="Write your comment here"
          className="w-full h-32 p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-600 w-full rounded-md p-3 font-semibold text-white"
        >
          Send
        </button>
      </form>

      <div className="flex flex-col gap-6 h-[70%] overflow-scroll">
        {loading ? (
          <div className="flex gap-2 items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              data-motion-id="svg 1"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#BEBEBE"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#2E2E2E"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          <>
            {comment.map((i) => {
              return (
                <div key={i.id}>
                  <div className="flex justify-between">
                    <p className="text-xs font-bold text-slate-500">
                      {i.created}
                    </p>
                    <button
                      className="text-xs text-red-500"
                      onClick={() => deleteComment(i.id)}
                    >
                      delete
                    </button>
                  </div>
                  <p className="text-md">{i.comment}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}