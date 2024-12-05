import CommentList from "./CommentList";

export default function CommentForm({
  setArtistArrayComments,
  artistArrayComments,
  foundObject,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    foundObject.comment.push(data.comment);
    setArtistArrayComments(foundObject);
  }

  return (
    <>
      {" "}
      <CommentList foundObject={foundObject}></CommentList>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="comment">Comment:</label>
        <input type="text" id="comment" name="comment"></input>
        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}
