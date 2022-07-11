import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import FormElement from '../components/FormElement'

const Home: NextPage = () => {
  return (
    <div className="bg-peach h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <FormElement placeholder="Enter your name..." type="text"/>
      <Button btn='buttonLight'>Hey there</Button>
      
    </div>
  )
}

export default Home
