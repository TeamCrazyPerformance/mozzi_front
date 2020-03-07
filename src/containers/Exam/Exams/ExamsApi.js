import fetchHelper from "../../../helpers/fakeFetchHelper";

const getExams = async ({
  rowsPerPage = 10,
  page = 0,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    exams: [
      {
        examId: "1",
        authorId: "kangji1610",
        year: "2016",
        major: "컴퓨터공학과",
        grade: "1",
        semester: "1학기",
        term: "중간고사",
        name: "컴퓨터공학개론",
        professor: "김재수",
        content: ""
      },
      {
        examId: "2",
        authorId: "dongha1810",
        year: "2017",
        major: "컴퓨터공학과",
        grade: "3",
        semester: "2학기",
        term: "기말고사",
        name: "네트워크",
        professor: "이길흥",
        content: ""
      },
      {
        examId: "3",
        authorId: "gw1741",
        year: "2019",
        major: "기계공학과",
        grade: "2",
        semester: "1학기",
        term: "기말고사",
        name: "정역학",
        professor: "이지수",
        content: ""
      },
      {
        examId: "4",
        authorId: "jjj391",
        year: "2012",
        major: "컴퓨터공학과",
        grade: "2",
        semester: "1학기",
        term: "중간고사",
        name: "객체지향프로그래밍",
        professor: "한지영",
        content: ""
      }
    ],
    page,
    count: rowsPerPage,
    total: 4
  };

  await apiCallStart();

  await fetchHelper
    .get(
      `/exam?limit=${rowsPerPage}&page=${page}&sort=${sort}`,
      null,
      apiResponse
    )
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export default getExams;
