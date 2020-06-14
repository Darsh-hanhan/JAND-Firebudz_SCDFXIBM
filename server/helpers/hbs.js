const moment = require('moment');

module.exports = {
    formatDate: function(date, targetFormat){ 
        return moment(date).format(targetFormat);
    },

    radioCheck: function(value, radioValue){ 
        return (value === radioValue) ? 'checked' : '';
    },
    
    replaceCommas: function(subtitles){
        return (subtitles === '') ? 'None' : subtitles.replace(/,/g, ' | ')
    }
};
