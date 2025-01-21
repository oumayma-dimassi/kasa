import active from "../assets/star-active2.png"
import inactive from "../assets/star-inactive1.png"

export default function Stars({ rating }) {


    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            <span>
                {stars.map((element, index) => (<img key={index} src={`${element <= rating ? active : inactive}`} alt="star" className="star" />))}
            </span>
        </div>
    );
}