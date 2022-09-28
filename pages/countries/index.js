import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function index({ data }) {
  return (
    <div className="countries-page">
      <SearchBar />
      <div className="total-of-results">
        {`${data.length} items`}
      </div>
      <ul className="countries-list">
        {data.map((item, _index) => (
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
