
export const metadata = {
  title: "Iago F. - Portfolio",
  description: "xxxxxxx",
};


import './assets/css/index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden '>
        {children}
      </body>
    </html>
  );
}
