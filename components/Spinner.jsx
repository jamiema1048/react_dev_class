import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <CircleLoader
      color="#36d7b7"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
