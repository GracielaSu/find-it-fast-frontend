import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const checkUserApiEndpoint = "http://localhost:8000/api/auth/profile";

const Auth = () => {
    console.log("auth called");
    const token = localStorage.getItem('token');
    console.log("token: ", token);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.post(checkUserApiEndpoint, null, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => {
            const role = response.data.role;
            console.log("role is :", role);
            if (role === "admin") {
                setIsAdmin(true);
                console.log("Role good");
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

    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;




// // import { useState, useEffect } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import axios from 'axios';

// const checkUserApiEndpoint = "http://localhost:8000/api/auth/profile";

// const Auth = () => {
//     console.log("auth called")
//     const token = localStorage.getItem('token');
//     console.log("token: ", token)
//     let isAdmin = false
//     console.log("isAdmin is: ", isAdmin)
//     axios.post(checkUserApiEndpoint, null, {
//         headers: {
//             'Authorization': `Bearer ${token}`,
//         },
//     })
//         .then(response => {
//             const role = response.data.role;
//             console.log("role is :", role)
//             if (role === "admin") {
//                 isAdmin = true
//                 console.log("Role good")
//             }
            
//         })
//         .catch(error => {
//             console.error('Error checking user', error);
//         });

//     return (
//         isAdmin ? <Outlet /> : <Navigate to="/login" />
//     );
// };

// export default Auth;
// import { useState, useEffect } from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import axios from 'axios';

// const checkUserApiEndpoint = "http://localhost:8000/api/auth/profile";

// const Auth = () => {
//     const [shouldNavigateToManagementHome, setShouldNavigateToManagementHome] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');

//         axios.post(checkUserApiEndpoint, null, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         })
//             .then(response => {
//                 const role = response.data.role;
//                 setShouldNavigateToManagementHome(role === "admin");
//             })
//             .catch(error => {
//                 console.error('Error checking user', error);
//             });
//     }, []);

//     return (
//         <div>
//             {shouldNavigateToManagementHome
//                 ? <Navigate to="/ManagementHome" replace />
//                 : <Navigate to="/login" replace />}
//         </div>
//     );
// };

// export default Auth;







// import { Outlet, Navigate } from 'react-router-dom'
// import React, { useState, useEffect } from 'react';

// import axios from 'axios';

// const checkUserApiEndpoint = "http://localhost:8000/api/auth/profile";


// const Auth = () => {
//     const [shouldNavigateToManagementHome, setShouldNavigateToManagementHome] = useState(false);
//     useEffect(() => {

//         const token = localStorage.getItem('token');

//         console.log("This is token from in auth", token)
//         axios.post(checkUserApiEndpoint, null, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         })
//             .then(response => {
//                 console.log('User profile:', response.data);
//                 const role = response.data.role;
//                 if (role === "admin") {
//                     console.log("U r admin")
//                     setShouldNavigateToManagementHome(true);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error checking user', error);
//                 return (
//                     <Navigate to="/login" />
//                 )
//             });
//     }, [shouldNavigateToManagementHome]);
//     return (
//         <div>
//             {shouldNavigateToManagementHome
//                 ? <Navigate to="/ManagementHome" replace />
//                 : <Navigate to="/login" replace />}
//         </div>
//     );
// }



// export default Auth

