"use client"
import localFont from "next/font/local"
const HighlighterFont = localFont({ 
  src:"../fonts/highlighter3.woff2",
  display: "swap"

})
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form>

        <textarea title="code" placeholder="code"  className={" w-96 h-96  "+ HighlighterFont.className}/ >
      </form>
		</div>
  );
};
