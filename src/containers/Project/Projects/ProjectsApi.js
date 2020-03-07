import fetchHelper from "../../../helpers/fakeFetchHelper";

const getProjects = async ({
  rowsPerPage = 10,
  page = 0,
  sort = "asc",
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    users: [
      {
        projectId: "1",
        projectName: "mozzi_front",
        projectLeader: "강민준"
      },
      {
        projectId: "2",
        projectName: "toefl-server",
        projectLeader: "이서준"
      },
      {
        projectId: "3",
        projectName: "toefl-front",
        projectLeader: "정예준"
      },
      {
        projectId: "4",
        projectName: "iamlazy-front",
        projectLeader: "김도윤"
      },
      {
        projectId: "5",
        projectName: "LazyPeoplesProject",
        projectLeader: "이시우"
      },
      {
        projectId: "6",
        projectName: "hangman",
        projectLeader: "김주원"
      },
      {
        projectId: "7",
        projectName: "thisable",
        projectLeader: "전소율"
      },
      {
        projectId: "8",
        projectName: "ssonga",
        projectLeader: "윤지호"
      },
      {
        projectId: "9",
        projectName: "artemis",
        projectLeader: "임현우"
      },
      {
        projectId: "10",
        projectName: "isEmpty",
        projectLeader: "고연우"
      }
    ],
    page,
    count: rowsPerPage,
    total: 12
  };

  await apiCallStart();

  await fetchHelper
    .get(
      `/project?limit=${rowsPerPage}&page=${page}&sort=${sort}`,
      null,
      apiResponse
    )
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export default getProjects;
