import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProjectPage = () => {
  const history = useHistory();

  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const formattedDate = new Date(projectData?.date_created).toDateString();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
        console.log(data);
      });
  }, []);

  const deleteProject = async () => {
    await fetch(`${process.env.REACT_API_URL}projects/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    history.push("/");
  };

  return (
    <div>
      <h2>{projectData.title}</h2>
      {/* <h3>Created at: {projectData.date_created}</h3> */}
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Created at: {formattedDate}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectPage;
