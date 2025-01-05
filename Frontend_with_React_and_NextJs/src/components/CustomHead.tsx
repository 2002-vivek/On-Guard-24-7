import Head from "next/head";



interface HeadProps{
    title:string;
}



export default function CustomHead({title}: HeadProps){
    return(
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/logo.png" />
            <meta name="description" content="ON GUARD 24/7 offers professional residential, site, and event security services." />
        </Head>
    );
}
