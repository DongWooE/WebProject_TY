const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {
        type: String,
        trim: true,
        //required: true
    },
    userPassword: {
        type: String,
        trim: true,
        //required: true
    },
    createdAt: Date,
    updatedAt: Date
});

schema.pre('save', function(next) {
	// 현재의 날짜를 가져온다
    var currentDate = new Date();
    
    // update_at 값을 현재의 날짜로 바꾼다
    this.updated_at = currentDate;
    
    // 만약 created_at이 존재하지 않는다면, 해당 값을 추가한다
    if (!this.created_at)
    	this.created_at = currentDate;
        
    next();
});

module.exports = schema;