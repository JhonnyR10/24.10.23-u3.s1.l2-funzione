import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ listaReview, getComments }) => {
  // console.log(this.props.listaReview);
  // const getComments = getComments;
  return (
    <ListGroup>
      {listaReview.map((comment, i) => {
        return (
          <SingleComment
            key={i}
            SingleReview={comment}
            getComments={getComments}
          />
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
