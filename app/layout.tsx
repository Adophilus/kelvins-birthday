import "~/styles/globals.css"

export const metadata = {
  title: "Sammy's Birthday Gift",
  description: "Sammy's birthday gift",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
