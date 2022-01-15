import { useLocation, useNavigate } from "react-router-dom";

function Products() {
  let { search } = useLocation();
  //console.log(search);
  let query = new URLSearchParams(search);
  //console.log(query);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  //console.log(start, end);

  let navigate = useNavigate();
  console.log(navigate);

  const handlePrev = (e) => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };

  const handleNext = (e) => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };

  return (
    <>
      <h3>This is the product's page 🛒🏪</h3>
      <p>
        Products from{" "}
        <b>
          {start} to <b>{end}</b>
        </b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </>
  );
}

export { Products };
