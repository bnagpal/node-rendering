
var request = require('request'),
    Promise = require('promise');

function getDataFromEndpoint(endpoint) {
    return promise = new Promise(function (resolve, reject) {
        request.get({
            uri: endpoint,
            json: true
        }, function(error, res, body) {
            if (!error) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
}

function buildUrl(seriesName) {

    var base = 'http://api.tvmaze.com/singlesearch/shows?q=',
        part1 = seriesName;
    return base + part1;
}

function buildSeriesDetail(results) {

   var data = results,
       dataObj = {};

       if(data) {
         if (data.name) {
             dataObj.name = data.name ;
         }

         if (data.summary) {
             dataObj.summary = data.summary;
         }

         if (data.image && data.image.medium) {
             dataObj.image = data.image.medium;
         }
       }




       return dataObj;
}

module.exports = {
    getDataFromEndpoint: getDataFromEndpoint,
    buildUrl: buildUrl,
    buildSeriesDetail: buildSeriesDetail
};
