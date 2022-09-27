import React from "react";
import Image from "next/image";

export default function index({ data }) {
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.map((item, _index) => (
          <li key={_index}>
            <div>
              <img src={item.flags.png} alt={`${item.name.common}' name`} />
            </div>
            <a href={`/countries/${item.cca2.toLowerCase()}`}>
              <h2>{item.name.common}</h2>
              <span>{item.name.official}</span>
            </a>
            <p>{item.ccn3}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
