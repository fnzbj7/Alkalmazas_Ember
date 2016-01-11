import Ember from 'ember';


export default Ember.Component.extend({
    members: Ember.Object.create(),
    
    actions: {
        submit() {
            if (!this.validate()) {
                return;
            }
            this.get('onSave')({
                firstname: this.$('#firstname').val(),
                lastname: this.$('#lastname').val(),
                age: this.$('#age').val(),
            });
            $('.modal').modal('hide');
        }
    },
    
    validate() {
        var location = this.$('#firstname').val();
        var description = this.$('#lastname').val();
        
        this.set('members.location', location === '' ? 'Név kötelező' : '');
        this.set('members.description', description === '' ? 'Leírás kötelező' : '');
        
        return this.get('members.location') === '' &&
               this.get('members.description') === '';
    }
});
