import Link from 'next/link';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard/settings/account">Account</Link>
          </li>
          <li>
            <Link href="/dashboard/settings/security">Security</Link>
          </li>
          <li>
            <Link href="/dashboard/settings/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}