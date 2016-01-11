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
        var firstname = this.$('#firstname').val();
        var lastname = this.$('#lastname').val();
        var age = this.$('#age').val();
        
        this.set('members.firstname', firstname === '' ? 'Név kötelező' : '');
        this.set('members.lastname', lastname === '' ? 'Név kötelező' : '');
        this.set('members.age', age === '' ? 'Kor kötelező' : '');
        
        return this.get('members.firstname') === '' &&
               this.get('members.lastname') === '' &&
               this.get('members.age') === '';
    }
});
