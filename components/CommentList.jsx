export default function CommentList({ foundObject }) {
  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {foundObject.comment.map((comment) => {
          return (
            <li key={foundObject.slug}>
              <p>{`"${comment}"`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
