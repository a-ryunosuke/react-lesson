import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="./item1">item1</Link>
        </li>
        <li>
          <Link href="./item2">item2</Link>
        </li>
      </ul>
    </div>
  );
}
