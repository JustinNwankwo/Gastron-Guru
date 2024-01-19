import useChef from "../utils/Api";
import { capitalizeWords } from "../utils/helpers";
import { ChefDataProps } from "../types";
import RatingAndLocation from "./RatingAndLocation";
import Ribbon from "./Ribbon";
import Star from "./icons/Star";

import "./ChefCards.scss";

const ChefCard = ({ name, rating, distance_from_centre, labels, private: chefPrivate }: ChefDataProps) => (
  <div className="chef-card">
    <div className="thumbnail">
      {/* FILLER IMAGE */}
      <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Peter Winston" />
    </div>

    <h2>{name}</h2>

    <div className="ratings-container">
      <div className="left">
        <Star />
        <RatingAndLocation
          rating={rating}
          distance_from_centre={distance_from_centre}
        />
      </div>
      <div className="right">
        <Ribbon label={labels?.[0]} />
      </div>
    </div>

    <div className="tags">
      <ul>
        {chefPrivate && chefPrivate.map((item) => (
          <li key={item}>{capitalizeWords(item)}</li>
        ))}
      </ul>
    </div>

    <div className="buy-btn-container">
      <button className="button-primary">Buy now</button>
    </div>
  </div>
);

// CREATE SEPARATE COMPONENT..?
const ChefCards = () => {
  const chefData = useChef();

  return (
    // CREATED CONTAINER TO VISUALIZE CARDS UI. UPDATE/EDIT ACCORDINGLY
    <div className="chef-card-container">
      {chefData.map(chef => (
        <ChefCard key={chef.name} {...chef} />
      ))}
    </div>
  )
};

export default ChefCards;