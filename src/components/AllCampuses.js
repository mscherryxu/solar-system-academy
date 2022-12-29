import { useState, useEffect } from "react";
import supabase from "../client";

const AllCampuses = () => {
  const [fetchError, setFetchError] = useState(null);
  const [campuses, setCampuses] = useState(null);

  useEffect(() => {
    const fetchCampuses = async () => {
      const { data, error } = await supabase.from("campuses").select();

      if (error) {
        setFetchError("Could not fetch campuses");
        setCampuses(null);
        console.log(error);
      }
      if (data) {
        setCampuses(data);
        setFetchError(null);
      }
    };

    fetchCampuses();
  }, []);

  return (
    <div className="allCampuses">
      <h1>All Campuses</h1>
      {fetchError && <p>{fetchError}</p>}
      {campuses && (
        <div className="campuses">
          {campuses.map((campus) => {
            return (
              <div key={campus.id} className="eachCampus">
                <img
                  src={campus.imageUrl}
                  style={{ width: "300px", height: "300px" }}
                  alt={campus.name}
                />
                <div className="campusText">
                  <h1>{campus.name}</h1>
                  <h3>{campus.description}</h3>
                  <button type="button">Delete Campus</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllCampuses;
