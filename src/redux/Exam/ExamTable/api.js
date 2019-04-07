import fetchHelper from './../../../helpers/fetchHelper';

export const getExamTableDataRequestList = async({limit, page, sort}) => {
    return ({
        success: true,
        exams: [
            {
                examId : 1,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0424",
                year : "2018",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "중간",
                subject : "programming introduction(1)",
                professor : "권태수",
            },
            {
                examId : 2,
                examlink : "/exam/{examId}",
                author :  2,
                userlink : "/user/{userId}",
                date : "1020",
                year : "2018",
                major : "computer engineering",
                grade : 2,
                semester : 2,
                term : "중간",
                subject : "자료구조",
                professor : "김역",
            },
            {
                examId : 3,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0430",
                year : "2018",
                major : "computer engineering",
                grade : 3,
                semester : 1,
                term : "중간",
                subject : "컴퓨터 네트워크",
                professor : "권태수",
            },
            {
                examId : 4,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0610",
                year : "2019",
                major : "computer engineering",
                grade : 2,
                semester : 1,
                term : "기말",
                subject : "객체 지향 프로그래밍",
                professor : "김역",
            },  
            {
                examId : 5,
                examlink : "/exam/{examId}",
                author :  2,
                userlink : "/user/{userId}",
                date : "0612",
                year : "2017",
                major : "computer engineering",
                grade : 1,
                semester : 4,
                term : "중간",
                subject : "컴퓨터공학개론",
                professor : "류욱재",
            },
            {
                examId : 6,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0424",
                year : "2018",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "중간",
                subject : "programming introduction(1)",
                professor : "권태수",
            },
            {
                examId : 7,
                examlink : "/exam/{examId}",
                author :  2,
                userlink : "/user/{userId}",
                date : "1020",
                year : "2018",
                major : "computer engineering",
                grade : 2,
                semester : 2,
                term : "중간",
                subject : "자료구조",
                professor : "김역",
            },
            {
                examId : 8,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0430",
                year : "2018",
                major : "computer engineering",
                grade : 3,
                semester : 1,
                term : "중간",
                subject : "컴퓨터 네트워크",
                professor : "권태수",
            },
            {
                examId : 9,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0610",
                year : "2019",
                major : "computer engineering",
                grade : 2,
                semester : 1,
                term : "기말",
                subject : "객체 지향 프로그래밍",
                professor : "김역",
            },  
            {
                examId : 10,
                examlink : "/exam/{examId}",
                author :  2,
                userlink : "/user/{userId}",
                date : "0612",
                year : "2017",
                major : "computer engineering",
                grade : 1,
                semester : 4,
                term : "중간",
                subject : "컴퓨터공학개론",
                professor : "류욱재",
            },  
        ],
        page: 1,
        count: 10,
        total: 500
    });
    //return await fetchHelper.post(`/exam`)
}

export const appendExamData = async({}) => {
    return ({
        success : true,
    });
}

export const deleteExamData = async({}) => {
    return ({
        success : true,
    });
}

export const reviseExamData = async({}) => {
    return ({
        success : true,
    });
}