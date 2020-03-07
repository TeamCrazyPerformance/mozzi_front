export const getExam = ({
  examId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const getExamResponse = {
    success: true,
    exam: {
      examId: "1",
      authorId: "ruru14",
      year: "2016",
      major: "Computer science and engineering",
      grade: "1",
      semester: "1학기",
      term: "중간고사",
      name: "Unix",
      professor: "Lee",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Neque convallis a cras semper auctor neque vitae tempus. Pulvinar pellentesque habitant morbi tristique. Molestie a iaculis at erat. Justo eget magna fermentum iaculis eu non diam phasellus. Egestas erat imperdiet sed euismod nisi porta lorem. Enim sit amet venenatis urna cursus. Integer malesuada nunc vel risus commodo. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. Blandit libero volutpat sed cras ornare arcu. Semper eget duis at tellus at urna condimentum mattis pellentesque. Risus nec feugiat in fermentum posuere. Lectus nulla at volutpat diam. Odio ut sem nulla pharetra diam sit amet. Feugiat scelerisque varius morbi enim nunc."
    }
  };

  if (getExamResponse.success) {
    apiCallSuccess(getExamResponse.exam);
  } else {
    apiCallFailure();
  }
};

export const putExam = ({
  examInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const getExamResponse = {
    success: true
  };

  if (getExamResponse.success) {
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};

export const postExam = ({
  examInformation,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure
}) => {
  apiCallStart();

  const getExamResponse = {
    success: true
  };

  if (getExamResponse.success) {
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
