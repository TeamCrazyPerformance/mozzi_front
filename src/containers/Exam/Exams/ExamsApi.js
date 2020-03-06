// import fetchHelper from './../../../helpers/fetchHelper';

// export const getUsers = async ({
export const getExams = ({
  page = 1,
  limit = 10,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/getall?limit=${limit}&page=${page}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getProjectsResponse = {
    success: true,
    exams: [
      {
        examId: "1",
        authorId: "kang",
        year: "2016",
        major: "Computer science and engineering",
        grade: "1",
        semester: "1",
        term: "1",
        name: "Unix",
        professor: "Lee",
        content: ""
      },
      {
        examId: "2",
        authorId: "Lee",
        year: "2017",
        major: "Computer science and engineering",
        grade: "3",
        semester: "1",
        term: "1",
        name: "Network",
        professor: "Lee",
        content: ""
      },
      {
        examId: "3",
        authorId: "Song",
        year: "2019",
        major: "Computer science and engineering",
        grade: "2",
        semester: "1",
        term: "1",
        name: "Data communication",
        professor: "Lee",
        content: ""
      },
      {
        examId: "4",
        authorId: "Kim",
        year: "2012",
        major: "Computer science and engineering",
        grade: "2",
        semester: "1",
        term: "1",
        name: "Java",
        professor: "Lee",
        content: ""
      }
    ],
    page: 1,
    count: 10,
    total: 500
  };

  if (getProjectsResponse.success) {
    setResponseToState({ getProjectsResponse });
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
