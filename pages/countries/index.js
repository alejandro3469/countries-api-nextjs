import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function Index({ data }) {
  const [searchedCountries, setSearchedCountries] = useState(null);
  const [countries, setCountries] = useState(data ? data : null);
  const [search, setSearch] = useState(null);

  const searchCountries = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (countries && search) {
      console.log(search);
      setSearchedCountries(
        countries.filter((array) => {
          return array.name.common.includes(search);
        })
      );
    }
  }, [search]);

  useEffect(() => {
    if (searchedCountries && searchedCountries.length !== 0) {
      console.log(searchedCountries);
      setCountries(searchedCountries);
    } else {
      if (data) {
        setCountries(data);
      }
    }
  }, [searchedCountries]);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div className="countries-page">
      {countries ? (
        <>
          <div className="searchbar-container">
            <div className="curve"></div>
            <span className="material-symbols-outlined icon2">search</span>
            <input
              type={"text"}
              placeholder={"Search by name"}
              className="search-input"
              onChange={searchCountries}
            ></input>
          </div>

          <div className="total-of-results">{`${countries.length} items`}</div>
          <ul className="countries-list">
            {countries.map((item, _index) => (
              <li name={`country${_index}`} className="card" key={_index}>
                <div className="image-container">
                  {/*<img className="image" src={item.flags.svg} alt={`${item.name.common}' name`} />*/}
                </div>
                <div className="country-data">
                  <Link href={`/countries/${item.cca2.toLowerCase()}`}>
                    <a>
                      <div className="country-name">
                        <div className="code-name">
                          <h2 className="country-code">{item.cca2}</h2>
                          <span className="official-country-name">
                            {item.name.common}
                          </span>
                        </div>
                        <div>
                          <span className="material-symbols-outlined icon">
                            chevron_right
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>Something went wrong :{"("} try again later</div>
      )}
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
