import mongoose from 'mongoose';


const currencySchema = new mongoose.Schema({
  currency_id: {
    type: Number,
    required: true
  },name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  
});

const Currency = mongoose.model('Currency', currencySchema);

export default Currency;
