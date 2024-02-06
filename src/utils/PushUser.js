import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const checkUserApiEndpoint = "http://localhost:8000/api/auth/profile";

const PushUser = () => {
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true);
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    axios.post(checkUserApiEndpoint, null, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        const role = response.data.role;
        if (role === "admin") {
          setRedirectTo('/admin');
        } else if (role === "customer") {
          setRedirectTo('/home');
        }
      })
      .catch(error => {
        console.error('Error checking user', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader color={"#36D7B7"} loading={loading} css={override} size={50} />
      </div>
    );
  }

  return redirectTo ? <Navigate to={redirectTo} /> : null;
};

export default PushUser;