export default function CommentForm({
  artistArray,
  setArtistArrayComments,
  artistArrayComments,
  piece,
}) {
  console.log("ArtistArrayComments from form:", artistArrayComments);
  const foundObject = artistArrayComments.find(
    (item) => item.slug === piece.slug
  );

  if (!foundObject.comment) {
    foundObject.comment = [];
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    foundObject.comment.push(data.comment);

    // setArtistArrayComments([...artistArrayComments]);
    console.log("foundObject", foundObject);
    console.log("artistArrayComments after submit", artistArrayComments);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="comment">Comment:</label>
      <input type="text" id="comment" name="comment"></input>
      <button type="submit">Add Comment</button>
    </form>
  );
}
