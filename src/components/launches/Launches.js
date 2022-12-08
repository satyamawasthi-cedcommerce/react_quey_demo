import React from "react";
import { useQuery } from "react-query";
import "./Launches.css";
import moment from "moment";

function Launches() {
  const fetchLaunches = async () => {
    const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=9`);
    return res.json();
  };
  const { data, status } = useQuery("launches", fetchLaunches,
  {staleTime:0,
   cacheTime:10
  });
  console.log(data);

  return (
    <div className="content-wrapper">
      <h1>Demo React-Query</h1>
      {status === "loading" && (
        <>
          <p>Data Loading....</p>
        </>
      )}
      {status === "error" && (
        <>
          <p>Error</p>
        </>
      )}
      {status === "success" && (
        <div className="card--wrapper">
          {data.map((items, index) => (
            <div className="card" key={index}>
              <div className="card__details">
                <img
                  src={items.links.mission_patch}
                  alt="Launch_details"
                  className="card__image"
                />
                <h2 className="card__title">{items.mission_name}</h2>
                <p>{items.details}</p>
              </div>

              <div className="card__details-datetime">
                <p>{moment(items.launch_date_local).format("MMMM D,YYYY")}</p>
                <a href="/#">#{items.launch_site.site_name}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Launches;
