import { Star } from "../Star/Star"

interface ICountProps {
    count: number
}

export const Stars = ({ count }: ICountProps) => {
    function filterCount(count:number): number {
        if(count < 1 || count > 5) {
            return 0;
        }
        return count;
    }
    const result = filterCount(count)
    const starArray = Array.from({ length: result }, (_, index) => (
      <li key={index}>
        <Star />
      </li>
    ));
  
    return <ul className="card-body-stars u-clearfix">{starArray}</ul>;
};
Stars.defaultProps = {
    defaultCount: 1,
}
  
