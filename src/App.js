import GitHubAccount from "./GitHubAccount.jsx";
import { BallTriangle } from "react-loader-spinner";
import useFetch from "./useFetch.js";

export default function App() {
  const [data, error, loading] = useFetch(
    "https://api.github.com/users/pjhyett"
  );

  if (loading) {
    return (
      <div>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <h1> Something went Wrong... </h1>;
  }
  if (data) {
    return (
      <pre>
        <GitHubAccount
          login={data.login}
          id={data.id}
          avatarUrl={data.avatar_url}
        />
      </pre>
    );
  }
  return (
    <>
      <h1>No DATA</h1>
    </>
  );
}
