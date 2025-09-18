import Link from "next/link";

type ButtonProp = {
  text: string;
  href: string;
  bold?: boolean;
  bg?: "blue" | "red" | "green" | "black" | "white" | "purple";
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500 hover:bg-blue-600 text-white",
  red: "bg-red-500 hover:bg-red-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
  black: "bg-black hover:bg-gray-800 text-white",
  white: "bg-white hover:bg-gray-300 text-black",
  purple: "bg-purple-600 hover:bg-purple-700 text-white",
};

export default function Button({ text, href, bg = "white", bold = true}: ButtonProp) {
  return (
    <Link
      href={href}
      className={`
        ${bg ? colorMap[bg] : colorMap['white']}
        ${bold && "font-semibold"}
        inline-block
        rounded-full
        py-3
        px-8
        min-w-[240px]
        mb-4
        shadow
        transition
        text-center
      `}
    >
      {text}
    </Link>
  );
}
