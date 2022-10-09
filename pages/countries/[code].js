import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

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
    <div className="country-page">
      <div className="navigation">
        <Link href={"/countries"}>
          <a className="back">
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
        </Link>
      </div>
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

        {data.flags.png && (
          <div className="gap-8">
            <h3>Flag</h3>
            <img
              style={{
                border: "8px solid #ECEFF4",
                "backgroundColor": "#ECEFF4",
              }}
              src={data.flags.png}
              width="80px"
            />
          </div>
        )}

        {data.capital && (
          <div className="gap-8">
            <h3>Capital</h3>
            <p>{data.capital}</p>
          </div>
        )}

        <div className="flex-inline">
          {data.region && (
            <div className="gap-8">
              <h3>Region</h3>
              <p>{data.region}</p>
            </div>
          )}
          {data.subregion && (
            <div className="gap-8">
              <h3>Subregion</h3>
              <p>{data.subregion}</p>
            </div>
          )}
        </div>

        {data.area && (
          <div className="gap-8">
            <h3>Area</h3>
            <p className="number">{data.area}</p>
          </div>
        )}

        {data.population && (
          <div className="gap-8">
            <h3>Population</h3>
            <p className="number">{data.population}</p>
          </div>
        )}

        {data.continents && (
          <div className="gap-8">
            <h3>Continents</h3>
            <ul>
              {data.continents.map((continent, _index) => (
                <li key={_index}>{continent}</li>
              ))}
            </ul>
          </div>
        )}

        {data.borders && (
          <div className="gap-8">
            <h3>Borders</h3>
            <ul>
              {data.borders.map((country, _index) => (
                <li key={_index}>{country}</li>
              ))}
            </ul>
          </div>
        )}

        {currencies && (
          <div className="gap-8">
            <h3>Currencies</h3>
            <ul>
              {currencies.map((currency, _index) => (
                <li className="flex-inline-8" key={_index}>
                  <span className="light-color currency-name">
                    {currency.about.symbol}
                  </span>
                  <span>
                    {" · "}
                    {currency.name} {" · "}
                  </span>
                  <span>{currency.about.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
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
