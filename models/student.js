const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      regNo: {
            type: String,
            required: true
      },
      sectionId: {
            type: Schema.Types.ObjectId,
            ref : 'Section',
            sparse:true
            /*
            The sparse property of an index ensures that the index only contain entries for documents 
                  that have the indexed field. 
            The index skips documents that do not have the indexed field.

            --> We could also use regular indexes for our application.
            But it won't be a good idea to use Unique indexes or unique sparse indexes.
            or, we could also apply compund indexes in the schema itself if we watnt to.
            */
      },
      email: {
            type: String,
            required: true
      },
      dob: {
            type: Date,
            required: true
      },
      gender:{
            type: String,
            required: true,
            lowercase: true,
            enum: ['male','female','other']
      },
      profileImageUrl: {
            type: String
      },
      rollNo: {
            type: Number,
            min: 1
      },
      mobileNo: {
            type: String
      },
      mothersName: String,
      fathersName: String
});

const Student = mongoose.model('Student', studentSchema );

module.exports = Student;