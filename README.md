# Colors

- Yellow; ffd546
- Blue; 23335b


```js
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
 
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```