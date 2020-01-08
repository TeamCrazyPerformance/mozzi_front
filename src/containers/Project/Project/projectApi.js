// import fetchHelper from './../../../helpers/fetchHelper';

// export const getProject = async ({
export const getProject = ({
  projectId,
  apiCallStart,
  apiCallSuccess,
  apiCallFailure,
  setResponseToState
}) => {
  apiCallStart();

  // const getJoinRequetsResponse = await fetchHelper.get(`/admin/user/${userId}`)
  // .then(response => response)
  // .catch(error => ({error: JSON.stringify(error)}))

  const getProjectResponse = {
    success: true,
    project: {
      projectId: "888",
      projectName: "Mozzi",
      projectLeader: "Lee",
      projectContent:
        "Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin. Vivamus libero odio, dapibus vitae varius quis, varius vitae arcu. Aenean sed turpis et lacus placerat aliquet.",
      projectIssues: [
        {
          issueName: "issue1",
          issueContent:
            "Vestibulum nunc dolor, semper quis sodales a, accumsan gravida dolor. Mauris at justo eu neque sollicitudin placerat. Nunc interdum consectetur tincidunt. Ut imperdiet semper est, eget molestie lectus. Vestibulum massa ante, consequat eget ullamcorper ut, porta non augue. Maecenas quis pharetra nisi, a imperdiet orci. Mauris ac nunc non turpis vehicula maximus."
        },
        {
          issueName: "issue2",
          issueContent:
            "Fusce id lobortis lectus. Nullam eu felis leo. Etiam vitae tortor quis lacus mollis tempus. Donec varius mauris eget metus volutpat, id hendrerit mauris efficitur. Praesent nulla nunc, hendrerit non imperdiet vitae, ultricies sed nibh. Proin sagittis elit ut accumsan ultrices. Donec vehicula erat nec lectus mattis, ut bibendum velit vestibulum. Nunc tincidunt erat vel ipsum varius, a pharetra orci mollis. Fusce varius cursus faucibus. Etiam commodo efficitur nulla, sed mattis ante finibus id."
        },
        {
          issueName: "issue3",
          issueContent:
            "Proin at mattis velit. Donec euismod purus ac nisi ornare, at iaculis libero tincidunt. Curabitur ut sapien arcu. Phasellus placerat nisi non libero lobortis commodo non et nisi. Integer viverra fermentum nisl vel congue. Donec dapibus venenatis dolor, vel sollicitudin lectus ultricies eget. Suspendisse tristique eget metus nec aliquet. Nunc sed turpis at dolor dignissim porttitor. Sed tincidunt aliquet odio, sed ornare ipsum pretium suscipit. Suspendisse purus massa, malesuada ac commodo ut, vehicula vitae neque. Vivamus cursus nec tortor nec dapibus. Curabitur cursus, ligula nec cursus convallis, ex justo faucibus purus, eu sollicitudin erat enim et sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"
        },
        {
          issueName: "issue4",
          issueContent:
            "Duis at ante non augue ultricies ornare at ut purus. Sed nisi ipsum, fermentum in enim at, luctus vestibulum ipsum. Donec tincidunt nunc ac est ullamcorper fermentum. Curabitur justo odio, iaculis a tellus id, accumsan posuere elit. Nunc vel euismod erat, feugiat auctor justo. Fusce fermentum finibus leo non vestibulum. Quisque malesuada nisi ac felis eleifend luctus. Phasellus rhoncus pharetra massa, et sollicitudin lorem aliquam et. Ut sapien ex, scelerisque eget neque ut, efficitur elementum ligula. Donec eu enim dui. Etiam vitae metus id enim auctor porta hendrerit quis diam."
        },
        {
          issueName: "issue5",
          issueContent:
            "Curabitur arcu leo, hendrerit ac ullamcorper eget, pretium quis nunc. Suspendisse vel ipsum eleifend augue bibendum vestibulum. Etiam malesuada nibh et lorem porttitor ultricies. Vivamus mattis, lectus sit amet dapibus aliquam, sem justo vulputate felis, eu finibus nibh dolor vel dui. Donec molestie porttitor nibh, id tristique lacus facilisis id. Morbi condimentum mi nec tellus laoreet dictum. Vivamus orci quam, convallis quis erat et, vehicula fermentum risus. Duis et scelerisque dui. Quisque ultricies dui ut risus iaculis, pellentesque lacinia tortor vulputate."
        }
      ]
    }
  };

  if (getProjectResponse.success) {
    setResponseToState({ getProjectResponse });
    apiCallSuccess();
  } else {
    apiCallFailure();
  }
};
