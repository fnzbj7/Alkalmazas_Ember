import DS from 'ember-data';

const FamilymemberModel = DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  age: DS.attr('string'),
});

export default FamilymemberModel;
