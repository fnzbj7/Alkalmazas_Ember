import DS from 'ember-data';

const ErrorModel = DS.Model.extend({
  todo: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('string'),
  status: DS.attr('string'),
});


export default ErrorModel;