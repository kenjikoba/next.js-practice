import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

{/** やりたいこと

1. Google Mapのピン立て（東大のところでいいかな？）
2. Contactフォームを作る
3. 










*/}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
