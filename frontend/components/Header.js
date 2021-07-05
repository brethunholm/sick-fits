import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        sick fits
        <Link />
      </div>

      <div className="sub-bar">
        <p>search</p>
      </div>
    </header>
  );
}
