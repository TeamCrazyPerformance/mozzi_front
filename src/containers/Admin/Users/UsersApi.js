import fetchHelper from "../../../helpers/fakeFetchHelper";

const getUsers = async ({
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
        id: "kangji1610",
        name: "강민준",
        nickname: "Alianna",
        stdNumber: "16101341",
        phoneNum: "01020581720",
        email: "kangji1610@naver.com",
        birthday: "971226"
      },
      {
        id: "sy1510",
        name: "이서준",
        nickname: "Hollaun",
        stdNumber: "15101261",
        phoneNum: "01026318999",
        email: "sy1510@gmail.com",
        birthday: "080706"
      },
      {
        id: "dongha1810",
        name: "정예준",
        nickname: "Maherri",
        stdNumber: "18101826",
        phoneNum: "01083979203",
        email: "dongha1810@daum.com",
        birthday: "940528"
      },
      {
        id: "doh18",
        name: "김도윤",
        nickname: "Pherly",
        stdNumber: "18101926",
        phoneNum: "01093842917",
        email: "doh18@naver.com",
        birthday: "900106"
      },
      {
        id: "gw1741",
        name: "이시우",
        nickname: "Kenel",
        stdNumber: "15101729",
        phoneNum: "01026916838",
        email: "gw1741@kakao.com",
        birthday: "931231"
      },
      {
        id: "kimkim715",
        name: "김주원",
        nickname: "Ondedo",
        stdNumber: "16101274",
        phoneNum: "01077118537",
        email: "kimkim715@gmail.com",
        birthday: "980306"
      },
      {
        id: "jjj391",
        name: "전소율",
        nickname: "Proich",
        stdNumber: "16101037",
        phoneNum: "01018883424",
        email: "jjj391@ms.com",
        birthday: "010214"
      },
      {
        id: "yjs1013",
        name: "윤지호",
        nickname: "Casi",
        stdNumber: "12101348",
        phoneNum: "01024781216",
        email: "yjs1013@naver.com",
        birthday: "941129"
      },
      {
        id: "ijh34879",
        name: "임현우",
        nickname: "Onogror",
        stdNumber: "14101242",
        phoneNum: "01084927342",
        email: "ijh34879@baidu.com",
        birthday: "960721"
      },
      {
        id: "jackjack",
        name: "고연우",
        nickname: "Reryng",
        stdNumber: "20101340",
        phoneNum: "01083726493",
        email: "isdjh879@gmail.com",
        birthday: "970226"
      }
    ],
    page,
    count: rowsPerPage,
    total: 57
  };

  await apiCallStart();

  await fetchHelper
    .get(
      `/admin/user/getall?limit=${rowsPerPage}&page=${page}&sort=${sort}`,
      null,
      apiResponse
    )
    .then(response => apiCallSuccess(response))
    .catch(() => apiCallFailure());
};

export default getUsers;
