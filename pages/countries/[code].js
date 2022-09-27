import React from "react";
import { useRouter } from "next/router";

export default function Country({ data }) {
  //const router = useRouter();
  //const { data } = router.query;

  return (
    <div>
      <h1>{data.name.common}</h1>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const code = params.code.toUpperCase();
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
 
  const data = await response.json(); 

  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  const data = await response.json();

  const paths = data.map(country => {
    const code = country.cca2.toLowerCase()
    return {
      params: {
        code : code
      },
    };
  })
  console.log(paths)

  return {
    paths: paths,
    fallback: false,
  };
}
