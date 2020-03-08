import fetchHelper from "../../../helpers/fakeFetchHelper";

export const getExam = async ({
  examId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = {
    success: true,
    exam: {
      examId,
      authorId: "userAbc",
      year: "2012",
      major: "컴퓨터공학과",
      grade: "2",
      semester: "1학기",
      term: "중간고사",
      name: "객체지향프로그래밍",
      professor: "한지영",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Neque convallis a cras semper auctor neque vitae tempus. Pulvinar pellentesque habitant morbi tristique. Molestie a iaculis at erat. Justo eget magna fermentum iaculis eu non diam phasellus. Egestas erat imperdiet sed euismod nisi porta lorem. Enim sit amet venenatis urna cursus. Integer malesuada nunc vel risus commodo. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Blandit libero volutpat sed cras ornare arcu. Semper eget duis at tellus at urna condimentum mattis pellentesque. Risus nec feugiat in fermentum posuere. Lectus nulla at volutpat diam. Odio ut sem nulla pharetra diam sit amet. Feugiat scelerisque varius morbi enim nunc."
    }
  };

  await apiCallStart();

  await fetchHelper
    .get(`/exam/${examId}`, null, apiResponse)
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export const deleteExam = async ({
  examId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  const apiResponse = { success: true };

  await apiCallStart();

  await fetchHelper
    .delete(`/exam/${examId}`, null, apiResponse)
    .then(() => apiCallSuccess())
    .catch(() => apiCallFailure());
};
