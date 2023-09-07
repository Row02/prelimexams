import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a Student from University of the Assumption</p>
        <p>I’m Rowie Nabong. I'm 20 years Old from Apalit Pampanga. My hobbies are playing video games and basketball. My favorite music is God's Plan by drake. My favorite food is adobo. And other things about me is that I'm a shy type of person.
</p>
<p>I choose to study information technology to gain a solid understanding of the rapidly evolving field of technology, develop skills in areas like programming, networking, and cybersecurity, and pursue careers in IT management, software development, data analysis, and more.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}