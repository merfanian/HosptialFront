const urls = {
    defaultUrl: 'http://56468d75.ngrok.io',
    getDiseases: 'http://56468d75.ngrok.io' + '/api/diseases',
    getMedicines: 'http://56468d75.ngrok.io' + '/api/medicines',
    postVisit: 'http://56468d75.ngrok.io' + '/api/visits',
    getAllDoctors: 'http://56468d75.ngrok.io' + '/api/doctors',
    getVisitsOfSpecialDoctor:
        'http://56468d75.ngrok.io' + '/api/doctors/#id/visits',
    getSpecialDoctorInfo: 'http://56468d75.ngrok.io' + '/api/doctors/#id',
    getPatient: 'http://56468d75.ngrok.io' + '/api/patients/#id',
    getVisitsOfSpecialPatient:
        'http://56468d75.ngrok.io' + '/api/patients/#id/visits',
};

export default urls;
