import React, { useState } from "react";
import ExamsTable from "../../../components/ExamsTable/ExamsTable.js";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";

const Exams = () => {
  const [exams, setExams] = useState([
    {
      examId: 0,
      authorId: 0,
      year: "",
      major: "",
      garde: 0,
      semeter: 0,
      term: "",
      name: "",
      professor: ""
    }
  ]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
      <div>Exams</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <ExamsTable data={exams} page={page} count={count} total={total} />
        )}
      </LoadingSpinner>
    </div>
  );
};

export default Exams;
