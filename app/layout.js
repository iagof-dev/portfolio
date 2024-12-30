
export const metadata = {
  title: "Iago F. - Portfolio",
  description: "Iago Fragnan | Meu portfólio",
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
