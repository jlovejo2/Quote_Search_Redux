import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => (
  <div className="jumbotron">
    <h1>Profile Page</h1>
    <p>Find all your favorited stuff here</p>
    <Link to="home" className="btn btn-primary btn-lg">
      Go Home
    </Link>
  </div>
);

export default ProfilePage;

//Code saved for later to render accordion divs based for the facts, quotes, or jokes

// <Accordion defaultActiveKey="">
// {quotesApiArray
//   ? quotesApiArray.map((quoteApiCardData, index) => {
//       return (
//         <Card key={index}>
//           <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
//             {quoteApiCardData.cardHeader}
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey={`${index}`}>
//             <div>
//               {index == 0 ? ronSwansonQuoteFragment : ""}
//               {index == 1 ? quoteGardenFragment : ""}
//               {index == 2 ? kanyeWestFragment : ""}
//               {index == 3 ? taylorSwiftFragment : ""}
//               {index == 4 ? donaldTrumpFragment : ""}
//             </div>
//           </Accordion.Collapse>
//         </Card>
//       );
//     })
//   : null}
// </Accordion>
