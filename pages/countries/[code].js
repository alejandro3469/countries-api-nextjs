import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Country({ data }) {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    const array = [];
    Object.keys(data.currencies).forEach((key) => {
      array.push({
        name: key,
        about: data.currencies[key],
      });
      setCurrencies(array);
    });
  }, []);

  useEffect(() => {
    console.log(currencies);
  }, [currencies]);

  return (
    <div className="country-container">
      <h1>{data.cca2}</h1>
      <div className="gap-8">
        <h3>Name</h3>
        <div className="flex-inline">
          <div>
            <h4 className="subtitle1">Common</h4>
            <p>{data.name.common}</p>
          </div>
          <div>
            <h4 className="subtitle1">Official</h4>
            <p>{data.name.official}</p>
          </div>
        </div>
      </div>
      {currencies && (
        <div className="gap-8">
          <h3>Currencies</h3>
          <ul>
            {currencies.map((currency, _index) => (
              <li className="flex-inline-8" key={_index}>
                <span className="light-color currency-name">
                  {currency.name}
                </span>
                <span>
                {" · "}{currency.about.symbol} {" · "}
                </span>
                <span>{currency.about.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
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

  const paths = data.map((country) => {
    const code = country.cca2.toLowerCase();
    return {
      params: {
        code: code,
      },
    };
  });
  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}
