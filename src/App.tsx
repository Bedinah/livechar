import { useState } from "react";
import "./index.css";

const App = () => {
  const LIMIT = 100;
  const [text, setText] = useState("");
  const count = text.length;
  const over = count > LIMIT

  return (
    <div className="bg-white min-h-screen container mx-auto py-24 text-[#030229] font-normal text-lg">
      <div className="bg-gray-100 items-center rounded-b-md p-8 max-w-160 h-full">
        <h2>Live Character Count</h2>
        <p className="opacity-70">Keep it under {LIMIT} words</p>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-400 rounded-md w-full px-3"
          value={text}
          placeholder="type here..."
          name=""
          id=""
          rows={4}
        ></textarea>
        <div className="  font-medium">
          {
            over ? 'You exceed the limit' : ''
          }
          <p
            className={` rounded-2xl float-right mb-3   ${count < LIMIT ? "text-blue-900 bg-blue-200 px-4" : "text-red-500 bg-red-200 px-4"}`}
          >
            {count}/{LIMIT}
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
