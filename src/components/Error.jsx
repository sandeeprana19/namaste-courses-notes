import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="w-svw h-svh flex items-center justify-center flex-col text-center">
      <h1>
        {error.status}: {error.statusText}
      </h1>
      <h2>{error.error.message}</h2>
    </div>
  );
};

export default Error;
