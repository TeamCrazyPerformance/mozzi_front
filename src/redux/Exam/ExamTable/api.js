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
                date : "0204",
                year : "1999",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "middle",
                subject : "programming introduction(1)",
                professor : "kwon",
            },
            {
                examId : 1,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0204",
                year : "1999",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "middle",
                subject : "programming introduction(1)",
                professor : "kwon",
            },
            {
                examId : 1,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0204",
                year : "1999",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "middle",
                subject : "programming introduction(1)",
                professor : "kwon",
            },
            {
                examId : 1,
                examlink : "/exam/{examId}",
                author :  1,
                userlink : "/user/{userId}",
                date : "0204",
                year : "1999",
                major : "computer engineering",
                grade : 1,
                semester : 1,
                term : "middle",
                subject : "programming introduction(1)",
                professor : "kwon",
            },  
            ],
        page: 1,
        count: 10,
        total: 4,
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